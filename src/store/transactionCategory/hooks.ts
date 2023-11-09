import { useContext } from 'react';
import { TransCtgryContext, TransCtgryDispatcher } from './provider';

export const useTransCtgry = () => useContext(TransCtgryContext);
export const useTransCtgryDispatcher = () => useContext(TransCtgryDispatcher);
