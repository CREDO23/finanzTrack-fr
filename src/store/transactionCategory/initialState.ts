const initialTransCtgryeState: ITransCtgryState = typeof window != 'undefined' && ( (JSON.parse(
    localStorage.getItem('root') as string
  ) &&
    JSON.parse(localStorage.getItem('root') as string)['transactionCategories']) ?? {
      items : [],
      loading : false
    });
  
  export default initialTransCtgryeState;
  