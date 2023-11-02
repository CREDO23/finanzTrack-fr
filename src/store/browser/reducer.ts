import {
  BrowserStorageAction,
  BrowserStorageActionType,
  setData,
} from './actions';

export default function browserStorageReducer(
  store: BrowserStorage,
  action: BrowserStorageAction
): BrowserStorage {
  switch (action.type) {
    case BrowserStorageActionType.SET_DATA:
      const {key,value} = setData(action.payload);
      return { ...store, [key] : value };

    default:
      return store;
  }
}
