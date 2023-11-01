enum AuthActionEnum {
    'SET_USER' = 'setUser',
    'SET_LOADING' = 'setLoading',
    'SET_ACCESS_TOKEN' = 'setAccessToken',
  }

interface SetUserActionPayload {
    name?: string;
    email?: string;
  }
  
  type SetLoadingActionPayload = boolean;
  
  type SetAccessTokenActionPayload = string | null;
  
  type AuthActionPayload =
    | SetAccessTokenActionPayload
    | SetLoadingActionPayload
    | SetAccessTokenActionPayload;
  
  interface AuthAction {
    type: AuthActionEnum;
    payload: AuthActionPayload;
  }
  
  
  function setUser(
    payload: SetUserActionPayload,
    previousState: AuthState['user']
  ): AuthState['user'] {
    return { ...previousState, ...payload };
  }
  
  function setLoading(payload: SetLoadingActionPayload): AuthState['isLoading'] {
    return payload;
  }
  
  function setAccessToken(
    payload: SetAccessTokenActionPayload
  ): AuthState['accessToken'] {
    return payload;
  }

  export {setUser , setAccessToken, setLoading}