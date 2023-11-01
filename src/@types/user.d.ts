declare global {}
interface IUser {
    name : string | null;
    email : string | null;
}

interface AuthState {
    isLoading: boolean;
    user: {
        name?: string;
        email?: string;
    } | null;
    accessToken: string | null;
  }