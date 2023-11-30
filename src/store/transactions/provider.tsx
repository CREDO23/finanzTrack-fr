import { Dispatch, ReactNode, createContext, useEffect, useReducer } from 'react';
import initialTransactionsState from './initialState';
import transactionReducer from './reducer';
import { TransactionAction } from './actions';
import { useStorageDispatcher } from '../browser/hooks';
import { BrowserStorageActionType } from '../browser/actions';

export const TransactionContext = createContext<ITransactionState>(initialTransactionsState);
export const TransactionDispatcher = createContext<Dispatch<TransactionAction> | (() => null)>(
  () => null
);

export default function TransactionsProvider({ children }: { children: ReactNode }): JSX.Element {
  const [transactions, dispatcher] = useReducer(transactionReducer, initialTransactionsState);
  const storageDispatch = useStorageDispatcher();

  /**
   * I there is a change in the tTransaction categories context, set it to the storage
   */
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
    <TransactionContext.Provider value={transactions}>
      <TransactionDispatcher.Provider value={dispatcher}>{children}</TransactionDispatcher.Provider>
    </TransactionContext.Provider>
  );
}
