const initialViewState: ViewState = typeof window !== 'undefined' &&( (JSON.parse(
  localStorage?.getItem('root') as string
) &&
  JSON.parse(localStorage?.getItem('root') as string)['view']) ?? {
  showNavBar: true,
  inAction: false,
  tab : 'home',
  showArrowBack : false,
});

export default initialViewState;
