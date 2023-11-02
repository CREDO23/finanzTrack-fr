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

const initialBrowserStore: BrowserStorage = {};

const BrowserStorageContext =
  createContext<BrowserStorage>(initialBrowserStore);
const BrowserStorageDispatcher = createContext<
  Dispatch<BrowserStorageAction> | (() => null)
>(() => null);

const useStorage = () => useContext<BrowserStorage>(BrowserStorageContext);
const useStorageDispatcher = () =>
  useContext<Dispatch<BrowserStorageAction> | (() => null)>(
    BrowserStorageDispatcher
  );

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

export { useStorage, useStorageDispatcher };
