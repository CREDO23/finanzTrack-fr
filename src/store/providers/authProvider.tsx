import { Dispatch, ReactNode, createContext, useReducer } from 'react';
import { authReducer } from '../auth/reducer';
import { AuthAction } from '../auth/actions';

const initialAuthContext: AuthState = {
  isLoading: false,
  user: null,
  accessToken: null,
};

const AuthContext = createContext(initialAuthContext);
const AuthDispatcher = createContext<Dispatch<AuthAction> | null>(null);

const useAuth = () => AuthContext
const useAuthDispatcher = () => AuthDispatcher

export default function AuthProvider({
  children,
}: {
  children: ReactNode;
}): JSX.Element {
  const [authContext, dispatcher] = useReducer(authReducer, initialAuthContext);

  return (
    <AuthContext.Provider value={authContext}>
      <AuthDispatcher.Provider value={dispatcher}>
        {children}
      </AuthDispatcher.Provider>
    </AuthContext.Provider>
  );
}

export {useAuth, useAuthDispatcher}