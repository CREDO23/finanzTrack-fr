enum ViewActionType {
  'SET_NAVIGATION' = 'SET_NAVIGATION',
  'SET_IN_ACTION' = 'SET_IN_ACTION',
  'SET_NAVIGATION_TAB' = 'SET_NAVIGATION_TAB',
  'SET_ARROW_BACK' = 'SET_ARROW_BACK'
}

interface ViewPayloadType {
  SET_NAVIGATION: ViewState["showNavBar"];
  SET_IN_ACTION : ViewState["inAction"];
  SET_NAVIGATION_TAB: ViewState["tab"];
  SET_ARROW_BACK : ViewState["showArrowBack"];
}

interface ViewAction {
  type: ViewActionType;
  payload: ViewPayloadType[ViewAction['type']];
}

/* =========== HANDLERS ============= */

function setNavBar(
  payload: ViewPayloadType["SET_NAVIGATION"]
): ViewState["showNavBar"] {
  return payload;
}

function setInAction(
  payload: ViewPayloadType["SET_IN_ACTION"]
): ViewState["inAction"] {
  return payload;
}

function setNavTab(payload: ViewPayloadType["SET_NAVIGATION_TAB"]) : ViewState["tab"] {
  return payload;
}

function setArrowBack (payload: ViewPayloadType["SET_ARROW_BACK"]) : ViewState["showArrowBack"] {
  return payload;
}

export type { ViewAction, ViewPayloadType };
export { setNavBar,setInAction, setNavTab, setArrowBack, ViewActionType };
