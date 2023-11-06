enum AuthActionType {
  'SET_USER' = 'SET_USER',
  'SET_LOADING' = 'SET_LOADING',
  'SET_ACCESS_TOKEN' = 'SET_ACCESS_TOKEN',
}

interface AuthPayloadType {
  SET_USER: IUser | null;
  SET_LOADING: boolean;
  SET_ACCESS_TOKEN: string | null;
}

interface AuthAction {
  type: AuthActionType;
  payload: AuthPayloadType[AuthAction["type"]];
}

/* =========== HANDLERS ============= */

function setUser(
  payload: AuthPayloadType["SET_USER"],
  previousState: AuthState['user']
): AuthState['user'] {
  return { ...previousState, ...payload };
}

function setLoading(payload: AuthPayloadType["SET_LOADING"]): AuthState['isLoading'] {
  return payload;
}

function setAccessToken(
payload: AuthPayloadType["SET_ACCESS_TOKEN"]
): AuthState['accessToken'] {
  return payload;
}

export type {
  AuthAction,
  AuthPayloadType
};
export { setUser, setAccessToken, setLoading, AuthActionType };
