enum ViewActionType {
  'SET_NAVIGATION' = 'SET_NAVIGATION',
}

interface ViewPayloadType {
  SET_NAVIGATION: boolean;
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

export type { ViewAction, ViewPayloadType };
export { setNavBar, ViewActionType };
