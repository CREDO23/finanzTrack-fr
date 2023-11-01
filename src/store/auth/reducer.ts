import type {AuthAction, AuthPayloadType} from './actions'
import {setAccessToken, setUser, setLoading, AuthActionType} from './actions'


export function authReducer(
  initialState: AuthState,
  action: AuthAction
): AuthState {

  switch (action.type) {
    case AuthActionType.SET_USER:
      const user = setUser(
        action.payload as AuthPayloadType["SET_USER"],
        initialState.user
      );

      return { ...initialState, user };

    case AuthActionType.SET_LOADING:
      const isLoading = setLoading(
        action.payload as AuthPayloadType["SET_LOADING"]
      );
      return { ...initialState, isLoading };

    case AuthActionType.SET_ACCESS_TOKEN:
      const accessToken = setAccessToken(
        action.payload as AuthPayloadType["SET_ACCESS_TOKEN"]
      );
      return { ...initialState, accessToken };

    default:
      return initialState;
  }
}
