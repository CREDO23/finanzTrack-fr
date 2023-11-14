/* eslint-disable react-hooks/exhaustive-deps */
'use client';
import { Dispatch, ReactNode, createContext, memo, useContext, useEffect, useReducer } from 'react';
import initialTransCtgryState from './initialState';
import transCtgryReducer from './reducer';
import { TransCtgryAction, TransCtgryActionType } from './actions';
import { useStorageDispatcher } from '../browser/hooks';
import { BrowserStorageActionType } from '../browser/actions';
import { AxiosResponse } from 'axios';
import APICall from '@/helpers/apiCall';
import useAxiosAction from '@/hooks/useAction';
import { message } from 'antd';

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

  const [msg, msgContext] = message.useMessage();

  // Fetch all categories
  const fetchAllTransactionCategories = async (): Promise<
    AxiosResponse<IAPIResponse<ITransactionCategory[]>>
  > => {
    return await APICall.get('/transaction_categories/', {}, '');
  };

  // Create a new action (Fetch all categories)
  const [fetchAllTransactionCategoriesAction, { loading, data, error }] = useAxiosAction(
    fetchAllTransactionCategories
  );

  // Fetch all categories onLoad
  useEffect(() => {
    fetchAllTransactionCategoriesAction();
  }, []);

  /*
  * Track the loading state to either set all categories to the
  * storage or show an error message in the UI
  **/
  useEffect(() => {
    if (data) {
      dispatcher({ type: TransCtgryActionType.SET_CATEGORIES, payload: data.data.data });
    }

    if (error) {
      msg.error(error.response?.data.message);
    }
  }, [loading]);

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
    <>
    {msgContext}
    <TransCtgryContext.Provider value={transCtgriesContext}>
      <TransCtgryDispatcher.Provider value={dispatcher}>{children}</TransCtgryDispatcher.Provider>
    </TransCtgryContext.Provider>
    </>
  );
});
