enum TransCtgryTypeActionType {
  'SET_TYPES' = 'SET_TYPES',
  'SET_LOADING' = 'SET_LOADING',
}

interface TransCtgryTypePayloadType {
  SET_TYPES: ITransactionCategoryType[];
  SET_LOADING: boolean;
}

/**
 * @interface TransCtgryTypeAction: The action interface for the Transaction category types reducer
 *
 * @field type: The action type : (@example "SET_TYPES")
 * @field payload: The payload for an action (@see TransCtgryTypePayloadType)
 */
interface TransCtgryTypeAction {
  type: TransCtgryTypeActionType;
  payload: TransCtgryTypePayloadType[TransCtgryTypeAction['type']];
}

/** ======= Handlers ========== */

function setTypes(payload: ITransCtgryTypeState['items']): ITransCtgryTypeState['items'] {
  return payload;
}

function setLoading(
  payload: TransCtgryTypePayloadType['SET_LOADING']
): ITransCtgryState['loading'] {
  return payload;
}

export { setTypes, setLoading, TransCtgryTypeActionType };
export type { TransCtgryTypeAction, TransCtgryTypePayloadType };
