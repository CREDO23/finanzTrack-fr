const initialTransCtgryeState: TransCtgryState = typeof window != 'undefined' && ( (JSON.parse(
    localStorage.getItem('root') as string
  ) &&
    JSON.parse(localStorage.getItem('root') as string)['transactionCategories']) ?? []);
  
  export default initialTransCtgryeState;
  