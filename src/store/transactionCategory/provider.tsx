/* eslint-disable react-hooks/exhaustive-deps */
'use client';
import { Dispatch, ReactNode, createContext, memo, useContext, useEffect, useReducer } from 'react';
import initialTransCtgryState from './initialState';
import transCtgryReducer from './reducer';
import { TransCtgryAction } from './actions';
import { useStorageDispatcher } from '../browser/hooks';
import { BrowserStorageActionType } from '../browser/actions';
import { AxiosResponse } from 'axios';
import APICall from '@/helpers/apiCall';
import useAxiosAction from '@/hooks/useAction';
import { message } from 'antd';

export const TransCtgryContext = createContext<TransCtgryState>(initialTransCtgryState);
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

  const fetchAllTransactionCategories = async (): Promise<
    AxiosResponse<IAPIResponse<ITransactionCategory[]>>
  > => {
    return await APICall.get('/transaction_categories/', {}, '');
  };

  
  const [fetchAllTransactionCategoriesAction, { loading, data, error }] = useAxiosAction(
    fetchAllTransactionCategories
  );

  useEffect(() => {
    fetchAllTransactionCategoriesAction();
  }, []);

  useEffect(() => {
    if (data) {
      storageDispatch({
        type: BrowserStorageActionType.SET_DATA,
        payload: { key: 'transactionCategories', value: data.data.data },
      });
    }

    console.log('fetch')

    if (error) {
      msg.error(error.response?.data.message);
    }
  }, [loading]);

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
