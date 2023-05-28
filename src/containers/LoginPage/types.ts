export interface UserData {
  email: string;
  first_name: string;
  last_name: string;
  username: string;
}

export interface LoginState {
  error: string | null;
  loading: boolean;
  accessToken: string | null;
  refreshToken: string | null;

  userData: {
    data: UserData | null;
    error: null | string;
    loading: boolean;
  };
}
