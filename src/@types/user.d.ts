declare global {}


interface AuthState {
  isLoading: boolean;
  user: IUser | null;
  accessToken: string | null;
}
