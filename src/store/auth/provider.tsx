/* eslint-disable react-hooks/exhaustive-deps */
'use client';
import {
  Dispatch,
  ReactNode,
  createContext,
  useEffect,
  useReducer,
} from 'react';
import { authReducer } from './reducer';
import { AuthAction } from './actions';
import initialAuthContext from './initialState';
import { useStorageDispatcher } from '../browser/hooks';
import { BrowserStorageActionType } from '../browser/actions';

console.log(window)

export const AuthContext = createContext<AuthState>(initialAuthContext);
export const AuthDispatcher = createContext<
  Dispatch<AuthAction> | (() => null)
>(() => null);

export default function AuthProvider({
  children,
}: {
  children: ReactNode;
}): JSX.Element {
  const [authContext, dispatcher] = useReducer(authReducer, initialAuthContext);

  const storageDispatch = useStorageDispatcher();

  useEffect(() => {
    storageDispatch({
      type: BrowserStorageActionType.SET_DATA,
      payload: { key: 'auth', value: authContext },
    });
  }, [authContext]);

  return (
    <AuthContext.Provider value={authContext}>
      <AuthDispatcher.Provider value={dispatcher}>
        {children}
      </AuthDispatcher.Provider>
    </AuthContext.Provider>
  );
}
