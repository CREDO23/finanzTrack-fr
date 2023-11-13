import { Dispatch, ReactNode, createContext, useEffect, useReducer } from 'react';
import initialTransactionsState from './initialState';
import transactionReducer from './reducer';
import { TransactionAction, TransactionActionType } from './actions';
import { useStorageDispatcher } from '../browser/hooks';
import { BrowserStorageActionType } from '../browser/actions';
import APICall from '@/helpers/apiCall';
import { AxiosResponse } from 'axios';
import useAxiosAction from '@/hooks/useAction';
import { message } from 'antd';

export const TransactionContext = createContext<ITransactionState>(initialTransactionsState);
export const TransactionDispatcher = createContext<Dispatch<TransactionAction> | (() => null)>(
  () => null
);

export default function TransactionsProvider({ children }: { children: ReactNode }): JSX.Element {
  const [transactions, dispatcher] = useReducer(transactionReducer, initialTransactionsState);
  const storageDispatch = useStorageDispatcher();
  const [msg, msgCtx] = message.useMessage();

  const fetchAllTransactions = (): Promise<AxiosResponse<IAPIResponse<ITransaction[]>>> => {
    return APICall.get('/transactions', {}, '');
  };

  const [fetchAllTransactionsAction, { loading, data, error }] =
    useAxiosAction(fetchAllTransactions);

  useEffect(() => {
    fetchAllTransactionsAction();
  }, []);

  useEffect(() => {
    if (data) {
     dispatcher({
        type : TransactionActionType.SET_TRANSACTIONS,
        payload : data.data.data
     })
    }

    if (error) {
      msg.error(error.response?.data.message);
    }
  }, [loading]);

  useEffect(() => {
    storageDispatch({
      type: BrowserStorageActionType.SET_DATA,
      payload: {
        key: 'transactions',
        value: transactions,
      },
    });
  }, [transactions]);

  return (
    <>
      {msgCtx}
      <TransactionContext.Provider value={transactions}>
        <TransactionDispatcher.Provider value={dispatcher}>
          {children}
        </TransactionDispatcher.Provider>
      </TransactionContext.Provider>
    </>
  );
}
