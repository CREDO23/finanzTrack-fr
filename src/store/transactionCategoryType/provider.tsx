/* eslint-disable react-hooks/exhaustive-deps */
'use client';
import { Dispatch, ReactNode, createContext, memo, useEffect, useReducer } from 'react';
import initialTransCtgryTypeState from './initialState';
import { useStorageDispatcher } from '../browser/hooks';
import { BrowserStorageActionType } from '../browser/actions';
import { message } from 'antd';
import { TransCtgryTypeAction } from './actions';
import transCtgryTypeReducer from './reducer';

export const TransCtgryTypeContext = createContext<ITransCtgryTypeState>(
  initialTransCtgryTypeState
);
export const TransCtgryTypeDispatcher = createContext<
  Dispatch<TransCtgryTypeAction> | (() => null)
>(() => null);

export default memo(function TransCtgryTypeProvider({
  children,
}: {
  children: ReactNode;
}): JSX.Element {
  const [transCtgryTypesContext, dispatcher] = useReducer(transCtgryTypeReducer, initialTransCtgryTypeState);
  const [msg, msgContext] = message.useMessage();
  const dispatchStorage = useStorageDispatcher();

  /**
   * I there is a change in the tTransaction category types context, set it to the storage
   */
  useEffect(() => {
    dispatchStorage({
      type: BrowserStorageActionType.SET_DATA,
      payload: { key: 'transactionCategoryTypes', value: transCtgryTypesContext },
    });
  }, [transCtgryTypesContext]);

  return (
    <TransCtgryTypeContext.Provider value={transCtgryTypesContext}>
      <TransCtgryTypeDispatcher.Provider value={dispatcher}>

      {msgContext}
      {children}
      </TransCtgryTypeDispatcher.Provider>
    </TransCtgryTypeContext.Provider>
  );
});
