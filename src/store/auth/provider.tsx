/* eslint-disable react-hooks/exhaustive-deps */
'use client';
import {
  Dispatch,
  ReactNode,
  createContext,
  memo,
  useEffect,
  useReducer,
} from 'react';
import { authReducer } from './reducer';
import { AuthAction } from './actions';
import initialAuthContext from './initialState';
import { useStorageDispatcher } from '../browser/hooks';
import { BrowserStorageActionType } from '../browser/actions';


export const AuthContext = createContext<AuthState>(initialAuthContext);

/**
 * @alias AuthDispatcher: The dispatcher for handling the authContext
 */
export const AuthDispatcher = createContext<
  Dispatch<AuthAction> | (() => null)
>(() => null);

/**
 * AuthProvider : A provider that provides access to the AuthContext and AuthDispatcher
 */
export default memo(function AuthProvider({
  children,
}: {
  children: ReactNode;
}): JSX.Element {
  const [authContext, dispatcher] = useReducer(authReducer, initialAuthContext);

  const storageDispatch = useStorageDispatcher();

  /**
   * If there is a change in the AuthContext, we need to set it in the browser storage
   */
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
})
