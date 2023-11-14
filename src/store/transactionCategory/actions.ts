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

/**
 * @interface TransCtgryAction: The action interface for the Transaction categories reducer
 * 
 * @field type: The action type : (@example "ADD_CATEGORY")
 * @field payload: The payload for an action (@see TransCtgryPayloadType)
 */
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
