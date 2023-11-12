enum TransCtgryActionType {
  'SET_CATEGORIES' = 'SET_CATEGORIES',
  'ADD_CATEGORY' = 'ADD_CATEGORY',
  'SET_LOADING' = 'SET_LOADING',
}

interface TransCtgryPayloadType {
  SET_CATEGORIES: ITransactionCategory[];
  SET_LOADING: boolean;
  ADD_CATEGORY: ITransactionCategory;
}

interface TransCtgryAction {
  type: TransCtgryActionType;
  payload: TransCtgryPayloadType[TransCtgryAction['type']];
}

/** ======= Handlers ========== */

function setCategories(payload: ITransCtgryState['items']): ITransCtgryState['items'] {
  return payload;
}

function addCategory(
  payload: ITransactionCategory,
  previousState: ITransCtgryState['items']
): ITransCtgryState['items'] {
  const newCategories = [payload,...previousState];

  return newCategories;
}

function setLoading(payload: TransCtgryPayloadType['SET_LOADING']): ITransCtgryState['loading'] {
  return payload;
}

export { setCategories, setLoading, addCategory, TransCtgryActionType };
export type { TransCtgryAction, TransCtgryPayloadType };
