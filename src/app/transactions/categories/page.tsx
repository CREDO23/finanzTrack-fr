/* eslint-disable react-hooks/exhaustive-deps */


"use client"
import TransactionGategoryItem from '@/components/transactions/transactionCategoryItem';
import { useTransCtgry } from '@/store/transactionCategory/hooks';
import { ViewActionType } from '@/store/viewState/action';
import { useViewDispatcher } from '@/store/viewState/hooks';
import { useEffect } from 'react';

export default function AllTransactionsCategories(): JSX.Element {

  const dispatchView = useViewDispatcher()
  const transCtgries = useTransCtgry()

  useEffect(() => {
    dispatchView({type : ViewActionType.SET_ARROW_BACK, payload : true})
    dispatchView({type : ViewActionType.SET_NAVIGATION, payload : false})
  }, [])

  return (
    <ul className="w-full px-3 h-full overflow-auto flex flex-col items-center gap-2 ">
      {transCtgries.items?.map((item, key) => {
        return (
          <TransactionGategoryItem
            type={item.type?.label as 'incomes' | 'expenses'}
            description={item?.description as string}
            name={item.name}
            key={key}
          />
        );
      })}
    </ul>
  );
}
