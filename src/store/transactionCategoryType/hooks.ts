import { useContext } from "react";
import { TransCtgryTypeContext, TransCtgryTypeDispatcher } from "./provider";


export const useTransCtgryTypes = () => useContext(TransCtgryTypeContext);
export const useTransCtgryTypeDispatcher = () => useContext(TransCtgryTypeDispatcher);