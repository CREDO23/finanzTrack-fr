enum TransactionActionType {
  'SET_TRANSACTIONS' = 'SET_TRANSACTIONS',
  'ADD_TRANSACTION' = 'ADD_TRANSACTION',
  'SET_LOADING' = 'SET_LOADING',
}

interface TransactionPayloadType {
  SET_TRANSACTIONS: ITransactionState["items"];
  ADD_TRANSACTION: ITransaction;
  SET_LOADING: boolean;
}


interface TransactionAction {
    type : TransactionActionType;
    payload : TransactionPayloadType[TransactionAction["type"]]
}


/** ======== handlers ========= */

function setTransactions (payload: ITransactionState["items"]) : ITransactionState["items"] {
    return payload
}

function addTransaction (payload: ITransaction, previousState :ITransactionState["items"] ) : ITransactionState["items"] {
    return [payload, ...previousState]
}


function setLoading(payload: TransactionPayloadType['SET_LOADING']): ITransactionState['loading'] {
  return payload;
}

export {setTransactions, addTransaction, setLoading, TransactionActionType}
export type {TransactionAction, TransactionPayloadType}