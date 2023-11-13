import { useContext } from 'react';
import { TransactionContext, TransactionDispatcher } from './provider';

const useTransactions = () => useContext(TransactionContext);
const useTransactionDispatcher = () => useContext(TransactionDispatcher);

export { useTransactions, useTransactionDispatcher };
