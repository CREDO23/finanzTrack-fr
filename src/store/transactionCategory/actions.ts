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
}

/** ======= Handlers ========== */

function setCategories(
  payload: ITransCtgryState["items"],
): ITransCtgryState["items"] {

  return payload;
}

function setLoading(payload: TransCtgryPayloadType["SET_LOADING"]): ITransCtgryState['loading'] {
  return payload;
}

export {setCategories, setLoading, TransCtgryActionType}
export type {TransCtgryAction, TransCtgryPayloadType}