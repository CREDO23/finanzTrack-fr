const initialAuthContext: AuthState = typeof window !== 'undefined' ? JSON.parse(
  localStorage.getItem('root') as string
)
  ? JSON.parse(localStorage.getItem('root') as string)['auth']
  : {
      isLoading: false,
      user: null,
      accessToken: null,
    } : null;

export default initialAuthContext;
