import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { setAuthToken, decodeToken } from '../../utils/auth'
import '../../styles/auth/login.css'

interface LoginFormData {
  email: string;
  password: string;
}

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<LoginFormData>({
    email: '',
    password: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [verificationNeeded, setVerificationNeeded] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    setError(null);
    setVerificationNeeded(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setVerificationNeeded(false);
    setIsSubmitting(true);

    try {
      const response = await fetch('https://localhost:7001/api/Auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        if (data.message === "Your email is not verified. Please verify your email to log in.") {
          setVerificationNeeded(true);
        } else {
          throw new Error(data.message || 'Login failed');
        }
        return;
      }

      // Successful login with token
      if (data.token) {
        const decoded = decodeToken(data.token);
        if (decoded) {
          setAuthToken(data.token);
          // You can store additional user info here if needed
          navigate('/dashboard'); // or your desired redirect path
        } else {
          throw new Error('Invalid token received');
        }
      }

    } catch (error) {
      setError(error instanceof Error ? error.message : 'An error occurred during login');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h1>Welcome Back</h1>
        <p>Please login to your account</p>
        
        {error && (
          <div className="error-message">
            {error}
          </div>
        )}

        {verificationNeeded ? (
          <div className="verification-message">
            <p>Your email is not verified.</p>
            <p>Please check your email inbox and verify your account to login.</p>
            <button 
              className="resend-button"
              onClick={() => {
                // Add resend verification email functionality here
                console.log('Resend verification email');
              }}
            >
              Resend Verification Email
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="login-form">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                required
              />
            </div>
            
            <div className="form-footer">
              <div className="remember-me">
                <input type="checkbox" id="remember" />
                <label htmlFor="remember">Remember me</label>
              </div>
              <a href="#" className="forgot-password">Forgot Password?</a>
            </div>
            
            <button 
              type="submit" 
              className="login-button"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Logging in...' : 'Login'}
            </button>
            
            <p className="signup-link">
              Don't have an account? <a href="/register">Sign up</a>
            </p>
          </form>
        )}
      </div>
    </div>
  );
};

export default Login; 