import { ViewActionType, setNavBar } from './action';

import type { ViewAction } from './action';

export default function viewReducer(
  state: ViewState,
  action: ViewAction
): ViewState {
  switch (action.type) {
    case ViewActionType.SET_NAVIGATION:
      const showNavBar = setNavBar(action.payload);
      return { ...state, showNavBar };

    default:
      return state;
  }
}
