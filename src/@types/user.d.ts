declare global {}
interface IUser {
  name?: string | null;
  email?: string | null;
  password?: string | null ;
  confirmPassword?: string | null;
}

interface AuthState {
  isLoading: boolean;
  user: IUser | null;
  accessToken: string | null;
}
