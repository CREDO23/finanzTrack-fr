import { useContext, Dispatch } from 'react';
import { ViewAction } from './action';
import { ViewContext, ViewDispatcher } from './provider';

const useView = () => useContext<ViewState>(ViewContext);
const useViewDispatcher = () =>
  useContext<Dispatch<ViewAction> | (() => null)>(ViewDispatcher);

export { useView, useViewDispatcher };
