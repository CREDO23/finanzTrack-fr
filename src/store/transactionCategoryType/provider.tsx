/* eslint-disable react-hooks/exhaustive-deps */
'use client';
import { Dispatch, ReactNode, createContext, memo, useContext, useEffect, useState } from 'react';
import initialTransCtgryTypeState from './initialState';
import { useStorageDispatcher } from '../browser/hooks';
import { BrowserStorageActionType } from '../browser/actions';
import { message } from 'antd';
import { AxiosResponse } from 'axios';
import APICall from '@/helpers/apiCall';
import useAxiosAction from '@/hooks/useAction';

interface Action {
  type: 'get';
  payload?: never;
}

export const TransCtgryTypeContext = createContext<ITransCtgryTypeState>(
  initialTransCtgryTypeState
);
export const TransCtgryTypeDispatcher = createContext<Dispatch<Action>>(() => []);

// hook
export const useTransCtgryTypes = () => useContext(TransCtgryTypeContext);

export default memo(function TransCtgryTypeProvider({
  children,
}: {
  children: ReactNode;
}): JSX.Element {
  const [state, setState] = useState<ITransCtgryTypeState>(initialTransCtgryTypeState);
  const [msg, msgContext] = message.useMessage();
  const dispatchStorage = useStorageDispatcher();
  const fetchAllTransactionCategories = async (): Promise<
    AxiosResponse<IAPIResponse<ITransactionCategoryType[]>>
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
      setState({ ...state, items: data.data.data });
    }
    if (error) {
      msg.error(error.response?.data.message);
    }
  }, [loading]);

  useEffect(() => {
    dispatchStorage({
      type: BrowserStorageActionType.SET_DATA,
      payload: { key: 'transactionCategoryTypes', value: state },
    });
  }, [state]);

  return (
    <TransCtgryTypeContext.Provider value={state}>
      {msgContext}
      {children}
    </TransCtgryTypeContext.Provider>
  );
});
