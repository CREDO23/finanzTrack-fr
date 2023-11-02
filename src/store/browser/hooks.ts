import { useContext, Dispatch } from 'react';
import { BrowserStorageAction } from './actions';
import { BrowserStorageContext, BrowserStorageDispatcher } from './provider';

const useStorage = () => useContext<BrowserStorage>(BrowserStorageContext);
const useStorageDispatcher = () =>
  useContext<Dispatch<BrowserStorageAction> | (() => null)>(
    BrowserStorageDispatcher
  );

export { useStorage, useStorageDispatcher };
