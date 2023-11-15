/* eslint-disable react-hooks/exhaustive-deps */

'use client';
import { transactionsCategories } from '@/components/transactions/categories';
import TransactionItem from '@/components/transactions/transactionItem';
import { useTransactions } from '@/store/transactions/hooks';
import { ViewActionType } from '@/store/viewState/action';
import { useViewDispatcher } from '@/store/viewState/hooks';
import { useEffect } from 'react';

export default function AllTransactions(): JSX.Element {
  const transactions = useTransactions();
  const dispatchView = useViewDispatcher();

  useEffect(() => {
    dispatchView({
      type: ViewActionType.SET_ARROW_BACK,
      payload: false,
    });
    dispatchView({
      type: ViewActionType.SET_NAVIGATION,
      payload: true,
    });
  }, []);



  return (
    <ul className="w-full px-3 h-full overflow-auto flex flex-col items-center gap-2 ">
      {transactions.items?.map((item, key) => {
        const category = item.category?.name as string;
        const type = item.category?.type?.label as string;

        return (
          <TransactionItem
            type={type?.substring(0, type.length - 1) as 'income' | 'expense'}
            description={item.description}
            date={new Date(item.updatedAt as string)}
            amount={item.amount}
            icon={
              {
                ...(transactionsCategories[category] ??
                  transactionsCategories[type?.substring(0, type.length - 1)]),
              }.icon
            }
            title={
              transactionsCategories[item.category?.name as string]
                ? (item.category?.name as string)
                : (item.category?.type?.label as string)
            }
            key={key}
            color={
              {
                ...(transactionsCategories[item?.category?.name as string] ??
                  transactionsCategories[item?.category?.type?.label as string]),
              }.color
            }
          />
        );
      })}
    </ul>
  );
}
