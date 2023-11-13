const initialTransactionsState: ITransactionState = typeof window != 'undefined' && ( (JSON.parse(
    localStorage.getItem('root') as string
  ) &&
    JSON.parse(localStorage.getItem('root') as string)['transactions']) ?? {
        items : [],
        loading : false
    });
  
  export default initialTransactionsState;
  