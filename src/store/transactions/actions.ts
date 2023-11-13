enum TransactionActionType {
  'SET_TRANSACTIONS' = 'SET_TRANSACTIONS',
  'ADD_TRANSACTION' = 'ADD_TRANSACTION',
}

interface TransactionPayloadType {
  SET_TRANSACTIONS: ITransactionState["items"];
  ADD_TRANSACTION: ITransaction;
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


export {setTransactions, addTransaction, TransactionActionType}
export type {TransactionAction, TransactionPayloadType}