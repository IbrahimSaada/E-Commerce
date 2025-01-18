export interface RegisterFormData {
  email: string;
  username: string;
  password: string;
  fullName: string;
  dateOfBirth: string;
}

export interface ValidationErrors {
  email?: string;
  username?: string;
  password?: string;
  fullName?: string;
  dateOfBirth?: string;
} 