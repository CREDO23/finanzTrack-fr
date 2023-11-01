"use client"
import { Dispatch, ReactNode, createContext, useContext, useReducer } from 'react';
import { authReducer } from './reducer';
import { AuthAction } from './actions';

const initialAuthContext: AuthState = {
  isLoading: false,
  user: null,
  accessToken: null,
};

const AuthContext = createContext(initialAuthContext);
const AuthDispatcher = createContext<Dispatch<AuthAction> | (() => null)>(() => null);

const useAuth = () => useContext(AuthContext)
const useAuthDispatcher = () => useContext(AuthDispatcher)

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