"use client"
import TransactionGategoryItem from '@/components/transactions/transactionCategoryItem';
import { useTransCtgry } from '@/store/transactionCategory/hooks';
import { useParams } from 'next/navigation';


export default function TransactionsCategories(): JSX.Element {

  const { type } = useParams();

  const transCtgries = useTransCtgry()

  return (
    <ul className="w-full h-full overflow-auto flex flex-col items-center gap-2 ">
      {transCtgries.items?.filter(el => el.type?.label == type.toString().substring(0,type.length)).map((item, key) => {
        return (
          <TransactionGategoryItem
            type={item.type?.label as 'incomes' | 'expenses'}
            description={item.description as string}
            name={item.name}
            key={key}
          />
        );
      })}
    </ul>
  );
}
