const initialTransCtgryTypeState: ITransCtgryTypeState = typeof window != 'undefined' && ( (JSON.parse(
    localStorage.getItem('root') as string
  ) &&
    JSON.parse(localStorage.getItem('root') as string)['transactionCategoryTypes']) ?? {items: []});
  
  export default initialTransCtgryTypeState;
  