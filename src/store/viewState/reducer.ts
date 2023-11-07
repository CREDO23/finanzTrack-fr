import { ViewActionType, setNavBar , setInAction, setNavTab, setArrowBack} from './action';

import type { ViewAction } from './action';

export default function viewReducer(
  state: ViewState,
  action: ViewAction
): ViewState {
  switch (action.type) {
    case ViewActionType.SET_NAVIGATION:
      const showNavBar = setNavBar(action.payload as ViewState["showNavBar"]);

        return { ...state, showNavBar };
      

    case ViewActionType.SET_IN_ACTION:
      const inAction = setInAction(action.payload as ViewState["inAction"]);
      return { ...state, inAction };

    case ViewActionType.SET_NAVIGATION_TAB:
      const tab = setNavTab(action.payload as ViewState["tab"])
      return {...state, tab}

    case ViewActionType.SET_ARROW_BACK:
      const showArrowBack = setArrowBack(action.payload as ViewState["showArrowBack"])
      return {...state, showArrowBack}
    default:
      return state;
  }
}
