import {
  TransCtgryAction,
  TransCtgryActionType,
  TransCtgryPayloadType,
  setLoading,
  setCategories
} from './actions';

export default function transCtgryReducer(
  state: ITransCtgryState,
  action: TransCtgryAction
): ITransCtgryState {
  switch (action.type) {
    case TransCtgryActionType.SET_CATEGORIES:
      const newCategories = setCategories(
        action.payload as TransCtgryPayloadType['SET_CATEGORIES']
      );
      return { ...state, items: newCategories };

    case TransCtgryActionType.SET_LOADING:
      const loading = setLoading(action.payload as TransCtgryPayloadType['SET_LOADING']);
      return { ...state, loading };
    default:
      return state;
  }
}
