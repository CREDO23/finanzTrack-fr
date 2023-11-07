"use client"
import TransactionGategoryItem from '@/components/transactions/transactionCategoryItem';
import { useParams } from 'next/navigation';


export default function AllTransactionsCategories(): JSX.Element {

  const { type } = useParams();

  const transactionCategories = [
    { name: 'Salary', description: 'Monthly paycheck', type: 'income' },
    { name: 'Freelance', description: 'Income from freelancing work', type: 'income' },
    { name: 'Investments', description: 'Income from investments and dividends', type: 'income' },
    { name: 'Side Job', description: 'Additional income from part-time work', type: 'income' },
    { name: 'Rental Income', description: 'Income from property rentals', type: 'income' },
    { name: 'Gift', description: 'Received as a gift or monetary gift', type: 'income' },
    { name: 'Bonus', description: 'Year-end or performance bonus', type: 'income' },
    {
      name: 'Interest',
      description: 'Income from interest on savings or investments',
      type: 'income',
    },
    { name: 'Consulting', description: 'Income from consulting services', type: 'income' },
    { name: 'Online Sales', description: 'Income from online sales or e-commerce', type: 'income' },
    { name: "Groceries", description: "Monthly grocery expenses", type: 'expense' },
    { name: "Rent", description: "Monthly rent or housing expenses", type: 'expense' },
    { name: "Utilities", description: "Expenses for electricity, water, and gas", type: 'expense' },
    { name: "Transportation", description: "Expenses for transportation and commuting" , type: 'expense'},
    { name: "Dining Out", description: "Spending on dining at restaurants", type: 'expense' },
    { name: "Insurance", description: "Insurance premiums and expenses" , type: 'expense'},
    { name: "Entertainment", description: "Expenses for entertainment and leisure", type: 'expense' },
    { name: "Internet", description: "Monthly internet service expenses", type: 'expense' },
    { name: "Loan Payment", description: "Monthly loan or debt payments" , type: 'expense'},
    { name: "Hobbies", description: "Expenses for hobbies and leisure activities", type: 'expense' }
  ];

  return (
    <ul className="w-full px-3 h-full overflow-auto flex flex-col items-center gap-2 ">
      {transactionCategories.filter(el => el.type == type.toString().substring(0,type.length-1)).map((item, key) => {
        return (
          <TransactionGategoryItem
            type={item.type as 'income' | 'expense'}
            description={item.description}
            name={item.name}
            key={key}
          />
        );
      })}
    </ul>
  );
}
