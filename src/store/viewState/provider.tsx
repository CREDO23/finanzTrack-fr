'use client';

import {
  Dispatch,
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useReducer,
} from 'react';
import viewReducer from './reducer';
import type { ViewAction } from './action';
import NavigationBar from '@/components/navigationBar';
import { useStorage } from '../browser/provider';

import { useStorageDispatcher } from '../browser/provider';
import { BrowserStorageActionType } from '../browser/actions';

const initialViewState: ViewState = JSON.parse(
  localStorage?.getItem('root') as string
)['view'];

const ViewContext = createContext<ViewState>(initialViewState);
const ViewDispatcher = createContext<Dispatch<ViewAction> | (() => null)>(
  () => null
);

const useView = () => useContext<ViewState>(ViewContext);
const useViewDispatcher = () =>
  useContext<Dispatch<ViewAction> | (() => null)>(ViewDispatcher);

export default function ViewProvider({
  children,
}: {
  children: ReactNode;
}): JSX.Element {
  const [viewContext, dispatcher] = useReducer(viewReducer, initialViewState);

  const storageDispatch = useStorageDispatcher();

  const store = useStorage();

  useEffect(() => {
    storageDispatch({
      type: BrowserStorageActionType.SET_NEW_DATA,
      payload: { key: 'view', value: viewContext },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [viewContext]);

  return (
    <ViewContext.Provider value={viewContext}>
      <ViewDispatcher.Provider value={dispatcher}>
        <div
          className={`w-full sm:w-96 ${
            viewContext?.showNavBar ? 'h-[calc(100%-5rem)]' : ' h-full'
          }`}
        >
          {children}
        </div>
        <div
          className={`w-full sm:w-96 ${
            viewContext?.showNavBar ? ' h-20' : 'h-0'
          }`}
        >
          <NavigationBar />
        </div>
      </ViewDispatcher.Provider>
    </ViewContext.Provider>
  );
}

export { useView, useViewDispatcher };
