/* eslint-disable react-hooks/exhaustive-deps */
'use client';
import { ReactNode, createContext, memo, useContext, useEffect, useState } from 'react';
import initialTransCtgryTypeState from './initialState';
import { useStorageDispatcher } from '../browser/hooks';
import { BrowserStorageActionType } from '../browser/actions';
import { message } from 'antd';
import { AxiosResponse } from 'axios';
import APICall from '@/helpers/apiCall';
import useAxiosAction from '@/hooks/useAction';

export const TransCtgryTypeContext = createContext<TransCtgryState>(initialTransCtgryTypeState);

// hook
export const useTransCtgryTypes = () => useContext(TransCtgryTypeContext)

export default memo(function TransCtgryTypeProvider({
  children,
}: {
  children: ReactNode;
}): JSX.Element {
  const [state] = useState(initialTransCtgryTypeState);

  const storageDispatch = useStorageDispatcher();

  const [msg, msgContext] = message.useMessage();

  const fetchAllTransactionCategories = async (): Promise<
    AxiosResponse<IAPIResponse<ITransactionCategory[]>>
  > => {
    return await APICall.get('/transaction_category_types/', {}, '');
  };

  const [fetchAllTransactionCategoryTypeAction, { loading, data, error }] = useAxiosAction(
    fetchAllTransactionCategories
  );

  useEffect(() => {
    fetchAllTransactionCategoryTypeAction();
  }, []);

  useEffect(() => {
    if (data) {
      storageDispatch({
        type: BrowserStorageActionType.SET_DATA,
        payload: { key: 'transactionCategoryTypes', value: data.data.data },
      });

    }
    if (error) {
      msg.error(error.response?.data.message);
    }
  }, [loading]);

  return (
    <TransCtgryTypeContext.Provider value={state}>
      {msgContext}
      {children}
    </TransCtgryTypeContext.Provider>
  );
});
