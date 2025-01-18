import { RegisterFormData, ValidationErrors } from '../types/auth';

export const validateRegisterForm = (data: RegisterFormData): ValidationErrors => {
  const errors: ValidationErrors = {};

  // Email validation
  if (!data.email) {
    errors.email = 'Email is required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(data.email)) {
    errors.email = 'Invalid email address';
  }

  // Username validation
  if (!data.username) {
    errors.username = 'Username is required';
  } else if (data.username.length < 3) {
    errors.username = 'Username must be at least 3 characters long';
  } else if (!/^[a-zA-Z0-9_]+$/.test(data.username)) {
    errors.username = 'Username can only contain letters, numbers, and underscores';
  }

  // Password validation
  if (!data.password) {
    errors.password = 'Password is required';
  } else if (data.password.length < 8) {
    errors.password = 'Password must be at least 8 characters long';
  } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(data.password)) {
    errors.password = 'Password must contain at least one uppercase letter, one lowercase letter, and one number';
  }

  // Full Name validation
  if (!data.fullName) {
    errors.fullName = 'Full name is required';
  } else if (data.fullName.length < 2) {
    errors.fullName = 'Full name must be at least 2 characters long';
  }

  // Date of Birth validation
  if (!data.dateOfBirth) {
    errors.dateOfBirth = 'Date of birth is required';
  } else {
    const dob = new Date(data.dateOfBirth);
    const today = new Date();
    const age = today.getFullYear() - dob.getFullYear();
    if (age < 13) {
      errors.dateOfBirth = 'You must be at least 13 years old';
    }
  }

  return errors;
}; 