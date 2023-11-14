/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import { Dispatch, ReactNode, createContext, useEffect, useReducer } from 'react';
import {memo} from 'react'
import viewReducer from './reducer';
import { ViewActionType, type ViewAction } from './action';
import NavigationBar from '@/components/navigationBar';
import { useStorageDispatcher } from '../browser/hooks';
import { BrowserStorageActionType } from '../browser/actions';
import initialViewState from './initialState';
import { IoChevronBack } from 'react-icons/io5';
import { useRouter } from 'next/navigation';

export const ViewContext = createContext<ViewState>(initialViewState);
export const ViewDispatcher = createContext<Dispatch<ViewAction> | (() => null)>(() => null);

export default memo(function ViewProvider({ children }: { children: ReactNode }): JSX.Element {
  const [viewContext, dispatcher] = useReducer(viewReducer, initialViewState);

  const storageDispatch = useStorageDispatcher();

  const router = useRouter();

  // If there is a change, set it to the storage
  useEffect(() => {
    storageDispatch({
      type: BrowserStorageActionType.SET_DATA,
      payload: { key: 'view', value: viewContext },
    });
  }, [viewContext]);

  return (
    <ViewContext.Provider value={viewContext}>
      <ViewDispatcher.Provider value={dispatcher}>
        <div
          className={`w-full sm:w-96 relative ${
            viewContext?.showNavBar ? 'h-[calc(100%-5rem)]' : ' h-full'
          }`}
        >
          {children}
          {(!viewContext.showNavBar || viewContext.showArrowBack ) && (
            <div
              className={`flex items-center absolute top-3 left-3 justify-center text-primary text-3xl`}
            >
              <span
                className=" cursor-pointer"
                onClick={() => {
                  dispatcher({ type: ViewActionType.SET_NAVIGATION, payload: true });
                  router.back();
                }}
              >
                <IoChevronBack />
              </span>
            </div>
          )}
          {viewContext?.inAction && (
            <div className="w-full h-full backdrop-blur-md bg-black/30 absolute top-0 left-0"></div>
          )}
        </div>
        <div className={`w-full sm:w-96 ${viewContext?.showNavBar ? ' h-20' : 'h-0'}`}>
          <NavigationBar />
        </div>
      </ViewDispatcher.Provider>
    </ViewContext.Provider>
  );
})
