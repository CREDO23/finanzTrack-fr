enum ViewActionType {
  'SET_NAVIGATION' = 'SET_NAVIGATION',
  'SET_IN_ACTION' = 'SET_IN_ACTION',
}

interface ViewPayloadType {
  SET_NAVIGATION: boolean;
  SET_IN_ACTION : boolean;
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

export type { ViewAction, ViewPayloadType };
export { setNavBar,setInAction, ViewActionType };
