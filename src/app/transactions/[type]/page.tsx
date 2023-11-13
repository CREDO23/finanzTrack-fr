'use client';

import { transactionsCategories } from '@/components/transactions/categories';
import TransactionItem from '@/components/transactions/transactionItem';
import { useTransactions } from '@/store/transactions/hooks';
import { useParams } from 'next/navigation';

export default function Transactions(): JSX.Element {
  const { type } = useParams();

  const transactions = useTransactions()

  
  return (
    <ul className="w-full h-full overflow-auto flex flex-col items-center gap-2 ">
      {transactions.items?.filter(el => el.category?.type?.label == type).map((item, key) => {
        const category = item.category?.name as string;
        const type = item.category?.type?.label as string;

        return (
          <TransactionItem
            type={type?.substring(0, type.length - 1) as 'income' | 'expense'}
            description={item.description}
            date="12/10/2014"
            amount={item.amount}
            icon={
              {
                ...(transactionsCategories[category] ??
                  transactionsCategories[type.substring(0, type.length - 1)]),
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
                ...(transactionsCategories[item.category?.name as string] ??
                  transactionsCategories[item.category?.type?.label as string]),
              }.color
            }
          />
        );
      })}
    </ul>
  );
}
