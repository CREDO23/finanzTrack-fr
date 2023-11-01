'use client';

import {
  Dispatch,
  ReactNode,
  createContext,
  useContext,
  useReducer,
} from 'react';
import viewReducer from './reducer';
import type { ViewAction } from './action';
import NavigationBar from '@/components/navigationBar';
import { Montserrat } from 'next/font/google';
const montserrat = Montserrat({ subsets: ['latin'] });

const initialViewState: ViewState = {
  showNavBar: true,
};

const ViewContext = createContext(initialViewState);
const ViewDispatcher = createContext<Dispatch<ViewAction> | (() => null)>(
  () => null
);

const useView = () => useContext(ViewContext);
const useViewDispatcher = () => useContext(ViewDispatcher);

export default function ViewProvider({
  children,
}: {
  children: ReactNode;
}): JSX.Element {
  const [navBarContext, dispatcher] = useReducer(viewReducer, initialViewState);

  return (
    <ViewContext.Provider value={navBarContext}>
      <ViewDispatcher.Provider value={dispatcher}>
        <body
          className={`${montserrat.className} min-h-[100vdh] h-[100dvh] flex items-center justify-center flex-col  overflow-hidden `}
        >
          <div
            className={`w-full sm:w-96 ${
              navBarContext.showNavBar ? 'h-[calc(100%-5rem)]' : ' h-full'
            }`}
          >
            {children}
          </div>
          <div
            className={`w-full sm:w-96 ${
              navBarContext.showNavBar ? ' h-20' : 'h-0'
            }`}
          >
            <NavigationBar />
          </div>
        </body>
      </ViewDispatcher.Provider>
    </ViewContext.Provider>
  );
}

export { useView, useViewDispatcher };
