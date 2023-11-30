import {
  TransCtgryTypeAction,
  TransCtgryTypeActionType,
  TransCtgryTypePayloadType,
  setLoading,
  setTypes,
} from './actions';

export default function transCtgryTypeReducer(
  state: ITransCtgryTypeState,
  action: TransCtgryTypeAction
): ITransCtgryTypeState {
  switch (action.type) {
    case TransCtgryTypeActionType.SET_TYPES:
      const newTypes = setTypes(action.payload as TransCtgryTypePayloadType['SET_TYPES']);
      return { ...state, items: newTypes };

    case TransCtgryTypeActionType.SET_LOADING:
      const loading = setLoading(action.payload as TransCtgryTypePayloadType['SET_LOADING']);
      return { ...state, loading };
    default:
      return state;
  }
}
