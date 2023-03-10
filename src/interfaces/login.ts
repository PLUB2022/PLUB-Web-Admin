export interface UseSignIn {
  email: string;
  password: string;
}

export interface LoginResponse {
  data: {
    accessToken: string;
    refreshToken: string;
  };
}

export interface LoginError {
  isSignInFailed: boolean;
  errorCode: 2000 | 2010 | 2050 | 9000;
}

export interface LogoutResponse {
  data: string;
}
