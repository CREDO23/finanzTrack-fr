'use client';
import TransactionItem from '@/components/home/transactions/transactionItem';
import AppLayout from '@/components/layouts/appLayout';
import { BiSolidArrowFromBottom, BiSolidArrowFromTop } from 'react-icons/bi';
import { expensesCategories } from '@/components/home/transactions/categories';

export default function Home(): JSX.Element {
  return (
    <AppLayout showNavigationBar={true}>
      <div className="w-full font-light h-full flex flex-col gap-7 bg-gradient-to-b top-0 left-0 from-[#FFF6E5] via-white to-white pt-10 px-4 overflow-auto">
        <div className="w-full h-10 flex items-center justify-center">
          <span className="border rounded-2xl py-1 px-4">October</span>
        </div>
        <div className="w-full flex items-center justify-center flex-col gap-2">
          <p className=" font-light text-sm text-gray-500">Account Balance</p>
          <p className=" text-5xl font-semibold">$9400</p>
        </div>
        <div className="w-full flex items-center justify-center gap-12 ">
          <div className="rounded-3xl w-[10rem] bg-cgreen h-20 p-4 flex items-center gap-2">
            <span className=" text-3xl border flex items-center justify-center h-full w-10 rounded-xl bg-white text-cgreen">
              {<BiSolidArrowFromBottom />}
            </span>
            <div className="h-full flex flex-col justify-between text-white">
              <p className=" text-xs">Incomes</p>
              <p className=" text-xl">$12000</p>
            </div>
          </div>
          <div className="rounded-3xl w-[10rem] bg-cred h-20 p-4 flex items-center gap-2">
            <span className=" text-3xl border flex items-center justify-center h-full w-10 rounded-xl bg-white text-cred">
              {<BiSolidArrowFromTop />}
            </span>{' '}
            <div className="h-full flex flex-col justify-between text-white">
              <p className=" text-xs">Incomes</p>
              <p className=" text-xl">$12000</p>
            </div>
          </div>
        </div>
        <div className="w-full">
          <p className=" font-semibold">Spend frequency</p>
        </div>
        <div className="w-full">
          <p className=" font-semibold">Recent transactions</p>
          <ul className="w-full flex flex-col items-center gap-2 ">
            {Object.entries(expensesCategories).map(([k, v]) => {
              return (
                <TransactionItem
                  type="expense"
                  description="By some toys for the first time"
                  date="12/10/2014"
                  amount={233}
                  icon={v.icon}
                  title={k}
                  key={k}
                  color={v.color}
                />
              );
            })}
          </ul>
        </div>
      </div>
    </AppLayout>
  );
}
