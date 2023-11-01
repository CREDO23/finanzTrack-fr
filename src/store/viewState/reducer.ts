import { ViewActionType, setNavBar } from './action';

import type { ViewAction } from './action';

export default function viewReducer(
  initialState: ViewState,
  action: ViewAction
): ViewState {
  switch (action.type) {
    case ViewActionType.SET_NAVIGATION:
      const showNavBar = setNavBar(action.payload);
      return { ...initialState, showNavBar };

    default:
      return initialState;
  }
}
