import { TransactionAction, addTransaction, setTransactions } from './actions';
import { TransactionActionType } from './actions';

export default function transactionReducer(
  state: ITransactionState,
  action: TransactionAction
): ITransactionState {
  switch (action.type) {
    case TransactionActionType.SET_TRANSACTIONS:
      const newTransactions = setTransactions(action.payload as ITransactionState['items']);
      return { ...state, items: newTransactions };

    case TransactionActionType.ADD_TRANSACTION:
      const updated = addTransaction(action.payload as ITransaction, state.items);
      return { ...state, items: updated };
    default:
      return state;
  }
}
