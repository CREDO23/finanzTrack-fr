/* eslint-disable react-hooks/exhaustive-deps */
'use client';
import TransactionItem from '@/components/transactions/transactionItem';
import { BiSolidArrowFromBottom, BiSolidArrowFromTop } from 'react-icons/bi';
import { transactionsCategories } from '@/components/transactions/categories';
import { memo, useEffect } from 'react';
import { useViewDispatcher } from '@/store/viewState/hooks';
import { ViewActionType } from '@/store/viewState/action';
import { useAuth } from '@/store/auth/hooks';
import Link from 'next/link';
import { useTransactions } from '@/store/transactions/hooks';
import {ImSpinner2} from 'react-icons/im'


export default memo(function Home(): JSX.Element {

  const dispatchView = useViewDispatcher();
  const currentUser = useAuth();
  const transactions = useTransactions()
  
  useEffect(() => {
    dispatchView({
      type : ViewActionType.SET_NAVIGATION,
      payload : true
    })
    dispatchView({
      type : ViewActionType.SET_NAVIGATION_TAB,
      payload : 'home'
    })
  },[])

  let expenses = 0
  let incomes = 0

  for(let i = 0; i < transactions.items.length; i++) {
    const type = transactions.items[i].category?.type?.label
    const amount = transactions.items[i].amount

    if(type == 'expenses'){
        expenses += amount
    }

    if(type == 'incomes'){
      incomes += amount
  }
  }

  const totalTransactions = [
    { name: 'expenses', totalAmount: expenses, icon: <BiSolidArrowFromTop /> },
    { name: 'incomes', totalAmount: incomes, icon: <BiSolidArrowFromBottom /> },
  ];

  return (
    <>
    <div className="w-full font-light h-full flex flex-col gap-12  bg-gradient-to-b top-0 left-0 from-[#FFF6E5] via-white to-white pt-10 px-4 overflow-auto">
      <div className="w-full flex flex-col gap-7">
        <div className="w-full  h-0 flex items-center">
          <span className="flex items-center justify-center rounded-full h-12 w-12 border border-primary">
            {currentUser.user?.name?.substring(0, 2)}
          </span>
        </div>
        <div className="w-full h-10 flex items-center justify-center">
          <span className="border rounded-2xl py-1 px-4">October</span>
        </div>
        <div className="w-full flex items-center justify-center flex-col gap-2">
          <p className=" font-light text-sm text-gray-500">Account Balance</p>
          <p className=" text-5xl font-semibold">${incomes - expenses}</p>
        </div>
        <div className="w-full flex items-center justify-center gap-12 ">
          {totalTransactions.map(el => {
            return (
              <div
                key={el.name}
                className={`rounded-3xl w-[10rem] ${
                  el.name == 'incomes' ? ' bg-cgreen' : el.name == 'expenses' ? 'bg-cred' : ''
                }  h-20 p-4 flex items-center gap-2`}
              >
                <span
                  className={`text-3xl border flex items-center justify-center h-full w-10 rounded-xl bg-white ${
                    el.name == 'incomes' ? ' text-cgreen' : el.name == 'expenses' ? 'text-cred' : ''
                  }`}
                >
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
          <div className="w-full flex items-center justify-between">
            <p className=" font-medium text-xl">Recent transactions</p>
            <Link href={'/transactions'}>
            <span
            onClick={() => dispatchView({type : ViewActionType.SET_NAVIGATION_TAB, payload : 'trans'})}
              className="py-1 px-4 border cursor-pointer flex items-center justify-center border-cyellow/10
              rounded-2xl bg-cyellow/10 text-cyellow"
              >
              See all
            </span>
              </Link>
          </div>
          <ul className="w-full flex flex-col items-center gap-2 ">
            {transactions.loading && <span className=' animate-spin'><ImSpinner2/></span>}
            {!transactions.loading && transactions.items?.map((item, key) => {

              const category = item.category?.name as string
              const type =  item.category?.type?.label as string

              if(key < 5){
              return (
                <TransactionItem
                  type={type?.substring(0, type.length - 1) as 'income' | 'expense'}
                  description={item.description}
                  date={new Date(item.updatedAt as string)}
                  amount={item.amount}
                  icon={
                    {
                      ...(transactionsCategories[category] ??
                        transactionsCategories[type.substring(0, type.length - 1)]),
                    }.icon
                  }
                  title={transactionsCategories[item.category?.name as string] ? item.category?.name as string : item.category?.type?.label as string}
                  key={key}
                  color={
                    {
                      ...(transactionsCategories[item.category?.name as string] ??
                        transactionsCategories[item.category?.type?.label as string]),
                    }.color
                  }
                />
              );
                }
            })}
          </ul>
        </div>
      </div>
    </div>
    </>
  );
})
