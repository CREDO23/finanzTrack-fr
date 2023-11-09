/* eslint-disable react-hooks/exhaustive-deps */
"use client"
import { Dispatch, createContext, useContext, useEffect, useReducer } from 'react';
import initialTransCtgryState from './initialState';
import transCtgryReducer from './reducer';
import { TransCtgryAction } from './actions';
import { useStorageDispatcher } from '../browser/hooks';
import { BrowserStorageActionType } from '../browser/actions';

export const TransCtgryContext = createContext<TransCtgryState>(initialTransCtgryState);
export const TransCtgryDispatcher = createContext<Dispatch<TransCtgryAction> | (() => null)>(
  () => null
);

export default function TransCtgryProvider({ children }: { children: JSX.Element }): JSX.Element {
  const [transCtgriesContext, dispatcher] = useReducer(transCtgryReducer, initialTransCtgryState);

  const storageDispatch = useStorageDispatcher();

  useEffect(() => {
    storageDispatch({
      type: BrowserStorageActionType.SET_DATA,
      payload: { key: 'transactionCategories', value: transCtgriesContext },
    });

  }, [transCtgriesContext]);

  return (
    <TransCtgryContext.Provider value={transCtgriesContext}>
      <TransCtgryDispatcher.Provider value={dispatcher}>{children}</TransCtgryDispatcher.Provider>
    </TransCtgryContext.Provider>
  );
}
