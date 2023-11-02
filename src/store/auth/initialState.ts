const initialAuthContext: AuthState = (JSON.parse(
  localStorage.getItem('root') as string
) &&
  JSON.parse(localStorage.getItem('root') as string)['auth']) ?? {
  isLoading: false,
  user: null,
  accessToken: null,
};

export default initialAuthContext;
