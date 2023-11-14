'use client';

import {
  Dispatch,
  ReactNode,
  createContext,
  memo,
  useEffect,
  useReducer,
} from 'react';
import browserStorageReducer from './reducer';
import { BrowserStorageAction, persistData } from './actions';
import initialBrowserStore from './initialState';



export const BrowserStorageContext =
  createContext<BrowserStorage>(initialBrowserStore);

/**
 * @alias BrowserStorageDispatcher: The dispatcher for handling the BrowserStorageContext
 */
export const BrowserStorageDispatcher = createContext<
  Dispatch<BrowserStorageAction> | (() => null)
>(() => null);


/**
 * StorageProvider : A provider that provides access to the AuthContext and StorageProvider
 */
export default memo(function StorageProvider({ children }: { children: ReactNode }) {
  let [browserStorage, dispatcher] = useReducer(
    browserStorageReducer,
    initialBrowserStore
  );

  // Persist data when re-loading the page
  useEffect(() => {
    persistData();
  }, []);


  useEffect(() => {
    localStorage.setItem('root', JSON.stringify(browserStorage));
  }, [browserStorage]);


  return (
    <BrowserStorageContext.Provider value={browserStorage}>
      <BrowserStorageDispatcher.Provider value={dispatcher}>
        {children}
      </BrowserStorageDispatcher.Provider>
    </BrowserStorageContext.Provider>
  );
})

