/* eslint-disable react-hooks/exhaustive-deps */
'use client';
import { Dispatch, ReactNode, createContext, memo, useEffect, useReducer } from 'react';
import initialTransCtgryState from './initialState';
import transCtgryReducer from './reducer';
import { TransCtgryAction } from './actions';
import { useStorageDispatcher } from '../browser/hooks';
import { BrowserStorageActionType } from '../browser/actions';

export const TransCtgryContext = createContext<ITransCtgryState>(initialTransCtgryState);
export const TransCtgryDispatcher = createContext<Dispatch<TransCtgryAction> | (() => null)>(
  () => null
);

export default memo(function TransCtgryProvider({
  children,
}: {
  children: ReactNode;
}): JSX.Element {
  const [transCtgriesContext, dispatcher] = useReducer(transCtgryReducer, initialTransCtgryState);
  const storageDispatch = useStorageDispatcher();
  
  /**
   * I there is a change in the tTransaction categories context, set it to the storage
   */
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
});
