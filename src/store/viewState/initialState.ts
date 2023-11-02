const initialViewState: ViewState = typeof window !== 'undefined' ? JSON.parse(
    localStorage?.getItem('root') as string
  )
    ? JSON.parse(localStorage?.getItem('root') as string)['view']
    : { showNavBar: true, inAction: false } : null;



export default initialViewState