interface DecodedToken {
  sub: string;
  'http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress': string;
  username: string;
  exp: number;
  iss: string;
  aud: string;
}

export const decodeToken = (token: string): DecodedToken | null => {
  try {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(
      atob(base64).split('').map(c => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)).join('')
    );
    return JSON.parse(jsonPayload);
  } catch (error) {
    return null;
  }
};

export const setAuthToken = (token: string) => {
  localStorage.setItem('authToken', token);
};

export const removeAuthToken = () => {
  localStorage.removeItem('authToken');
};

export const getAuthToken = () => {
  return localStorage.getItem('authToken');
};

export const isTokenExpired = (token: string): boolean => {
  const decoded = decodeToken(token);
  if (!decoded) return true;
  
  const currentTime = Math.floor(Date.now() / 1000); // Convert to seconds
  return decoded.exp < currentTime;
};

export const getUserId = (): string | null => {
  const token = getAuthToken();
  if (!token) return null;
  
  const decoded = decodeToken(token);
  return decoded?.sub || null;
};

export const getUsername = (): string | null => {
  const token = getAuthToken();
  if (!token) return null;
  
  const decoded = decodeToken(token);
  return decoded?.username || null;
};

export const getUserEmail = (): string | null => {
  const token = getAuthToken();
  if (!token) return null;
  
  const decoded = decodeToken(token);
  return decoded?.['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress'] || null;
}; 