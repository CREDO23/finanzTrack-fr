enum TransCtgryActionType {
  'SET_CATEGORIES' = 'SET_CATEGORIES',
  'SET_LOADING' = 'SET_LOADING',
}

interface TransCtgryPayloadType {
  SET_CATEGORIES: ITransactionCategory[];
  SET_LOADING : boolean;
}

interface TransCtgryAction {
  type: TransCtgryActionType;
  payload: TransCtgryPayloadType[TransCtgryAction['type']];
}``

/** ======= Handlers ========== */

function setCategories(
  payload: TransCtgryState["items"],
  previousState: TransCtgryState["items"]
): TransCtgryState["items"] {
  const updatedCategories = [...payload, ...previousState];

  return updatedCategories;
}

function setLoading(payload: TransCtgryPayloadType["SET_LOADING"]): TransCtgryState['loading'] {
  return payload;
}

export {setCategories, setLoading, TransCtgryActionType}
export type {TransCtgryAction, TransCtgryPayloadType}