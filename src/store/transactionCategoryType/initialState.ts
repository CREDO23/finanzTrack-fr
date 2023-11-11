const initialTransCtgryTypeState: TransCtgryState = typeof window != 'undefined' && ( (JSON.parse(
    localStorage.getItem('root') as string
  ) &&
    JSON.parse(localStorage.getItem('root') as string)['transactionCategoryType']) ?? []);
  
  export default initialTransCtgryTypeState;
  