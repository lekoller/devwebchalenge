export interface LoginState {
  user: string;
  password: string;
  showPassword: boolean;
}

export interface RegisterState {
    name: string;
    email: string;
    phone: string;
    password: string;
    retypePassword: string;
    showPassword: boolean;
    showRetypePassword: boolean;
    acceptTerms: boolean;
    marketing: boolean | null;
  }