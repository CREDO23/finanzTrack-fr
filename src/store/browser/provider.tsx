'use client';

import {
  Dispatch,
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useReducer,
} from 'react';
import browserStorageReducer from './reducer';
import { BrowserStorageAction, persistData } from './actions';
import initialBrowserStore from './initialState';



export const BrowserStorageContext =
  createContext<BrowserStorage>(initialBrowserStore);
export const BrowserStorageDispatcher = createContext<
  Dispatch<BrowserStorageAction> | (() => null)
>(() => null);



export default function StorageProvider({ children }: { children: ReactNode }) {
  let [browserStorage, dispatcher] = useReducer(
    browserStorageReducer,
    initialBrowserStore
  );

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
}

