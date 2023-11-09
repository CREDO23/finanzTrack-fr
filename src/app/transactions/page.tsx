/* eslint-disable react-hooks/exhaustive-deps */

"use client"
import { transactionsCategories } from '@/components/transactions/categories';
import TransactionItem from '@/components/transactions/transactionItem';
import { ViewActionType } from '@/store/viewState/action';
import { useViewDispatcher } from '@/store/viewState/hooks';
import { useEffect } from 'react';

export default function AllTransactions(): JSX.Element {
  const transactions = [
    {
      category: 'groceries',
      amount: 300,
      description: 'Monthly grocery shopping',
      type: 'expense',
    },
    { category: 'housing', amount: 1200, description: 'Monthly rent payment', type: 'expense' },
    {
      category: 'healthcare',
      amount: 150,
      description: 'Electricity and water bill',
      type: 'expense',
    },
    { category: 'transportation', amount: 100, description: 'Bus pass', type: 'expense' },
    { category: 'clothing', amount: 200, description: 'Eating at restaurants', type: 'expense' },
    { category: 'education', amount: 50, description: 'Health insurance premium', type: 'expense' },
    { category: 'entertainment', amount: 80, description: 'Movie tickets', type: 'expense' },
    {
      category: 'fitness and wellness',
      amount: 60,
      description: 'Monthly internet bill',
      type: 'expense',
    },
    { category: 'education', amount: 400, description: 'Student loan payment', type: 'expense' },
    { category: 'education', amount: 100, description: 'Art supplies', type: 'expense' },
    { category: 'salary', amount: 5000, description: 'Monthly paycheck', type: 'income' },
    { category: 'freelance', amount: 1200, description: 'Web development project', type: 'income' },
    { category: 'investments', amount: 300, description: 'Stock dividends', type: 'income' },
    { category: 'side Job', amount: 600, description: 'Part-time gig', type: 'income' },
    { category: 'rental Income', amount: 800, description: 'Apartment rent', type: 'income' },
    { category: 'gift', amount: 50, description: 'Birthday gift', type: 'income' },
    { category: 'bonus', amount: 200, description: 'Year-end bonus', type: 'income' },
    { category: 'interest', amount: 30, description: 'Savings account interest', type: 'income' },
    { category: 'consulting', amount: 700, description: 'Consulting fee', type: 'income' },
    { category: 'online Sales', amount: 250, description: 'E-commerce sales', type: 'income' },
  ];

  const dispatchView = useViewDispatcher()

  useEffect(() => {
    dispatchView({
      type :  ViewActionType.SET_ARROW_BACK,
      payload : false
    })
  },[])

  return (
    <ul className="w-full px-3 h-full overflow-auto flex flex-col items-center gap-2 ">
      {transactions.map((item, key) => {
        return (
          <TransactionItem
            type={item.type as 'income' | 'expense'}
            description={item.description}
            date="12/10/2014"
            amount={item.amount}
            icon={
              { ...(transactionsCategories[item.category] ?? transactionsCategories[item.type]) }
                .icon
            }
            title={item.category}
            key={key}
            color={
              { ...(transactionsCategories[item.category] ?? transactionsCategories[item.type]) }
                .color
            }
          />
        );
      })}
    </ul>
  );
}
