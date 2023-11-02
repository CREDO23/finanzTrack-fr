/* eslint-disable react-hooks/exhaustive-deps */
'use client';
import dynamic from 'next/dynamic';
import TransactionItem from '@/components/home/transactions/transactionItem';
import { BiSolidArrowFromBottom, BiSolidArrowFromTop } from 'react-icons/bi';
import { expensesCategories } from '@/components/home/transactions/categories';
import { useEffect } from 'react';
import { useViewDispatcher } from '@/store/viewState/hooks';
import { ViewActionType } from '@/store/viewState/action';
const ChartNoSSR = dynamic(() => import('@/components/home/chart'), {
  ssr: false,
});

export default function Home(): JSX.Element {
  const dispatchView = useViewDispatcher();

  useEffect(() => {
    dispatchView({ type: ViewActionType.SET_NAVIGATION, payload: true });
  }, []);

  const transactions = [
    { name: 'expenses', totalAmount: 12000, icon: <BiSolidArrowFromTop /> },
    { name: 'incomes', totalAmount: 9400, icon: <BiSolidArrowFromBottom /> },
  ];

  return (
    <div className="w-full font-light h-full flex flex-col gap-12  bg-gradient-to-b top-0 left-0 from-[#FFF6E5] via-white to-white pt-10 px-4 overflow-auto">
      <div className="w-full flex flex-col gap-7">
        <div className="w-full h-10 flex items-center justify-center">
          <span className="border rounded-2xl py-1 px-4">October</span>
        </div>
        <div className="w-full flex items-center justify-center flex-col gap-2">
          <p className=" font-light text-sm text-gray-500">Account Balance</p>
          <p className=" text-5xl font-semibold">$9400</p>
        </div>
        <div className="w-full flex items-center justify-center gap-12 ">
          {transactions.map(el => {
            return (
              <div
                key={el.name}
                className={`rounded-3xl w-[10rem] ${
                  el.name == 'incomes'
                    ? ' bg-cgreen'
                    : el.name == 'expenses'
                    ? 'bg-cred'
                    : ''
                }  h-20 p-4 flex items-center gap-2`}
              >
                <span className={`text-3xl border flex items-center justify-center h-full w-10 rounded-xl bg-white ${el.name == 'incomes'
                    ? ' text-cgreen'
                    : el.name == 'expenses'
                    ? 'text-cred'
                    : ''}`} >
                  {el.icon}
                </span>{' '}
                <div className="h-full flex flex-col justify-between text-white">
                  <p className=" text-xs capitalize">{el.name}</p>
                  <p className=" text-xl font-normal">${el.totalAmount}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="w-full flex flex-col gap-8">
        <div className="w-full flex flex-col gap-4">
          <p className=" font-medium text-xl">Spend frequency</p>
          <ChartNoSSR />
        </div>
        <div className="w-full flex flex-col gap-4">
          <div className="w-full flex items-center justify-between">
            <p className=" font-medium text-xl">Recent transactions</p>
            <span
              className="py-1 px-4 border flex items-center justify-center border-cyellow/10
           rounded-2xl bg-cyellow/10 text-cyellow"
            >
              See all
            </span>
          </div>
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
    </div>
  );
}
