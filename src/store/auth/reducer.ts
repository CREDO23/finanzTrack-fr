import type {AuthAction, SetAccessTokenActionPayload, SetLoadingActionPayload, SetUserActionPayload} from './actions'
import {setAccessToken, setUser, setLoading} from './actions'


export function authReducer(
  initialState: AuthState,
  action: AuthAction
): AuthState {
  switch (action.type) {
    case 'setUser':
      const newUser = setUser(
        action.payload as SetUserActionPayload,
        initialState.user
      );

      return { ...initialState, user: newUser };

    case 'setLoading':
      const newLoadingState = setLoading(
        action.payload as SetLoadingActionPayload
      );
      return { ...initialState, isLoading: newLoadingState };

    case 'setAccessToken':
      const newToken = setAccessToken(
        action.payload as SetAccessTokenActionPayload
      );
      return { ...initialState, accessToken: newToken };

    default:
      return initialState;
  }
}
