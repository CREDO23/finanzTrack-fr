'use client';
import Button from '@/components/shared/button';
import Link from 'next/link';
import { ReactNode, useState } from 'react';
import { BiPlus } from 'react-icons/bi';

export default function Layout({ children }: { children: ReactNode }): JSX.Element {
  const tabs = ['all', 'expenses', 'incomes'];

  const [seletedTab, setSelectedTab] = useState('All');

  return (
    <div className="w-full  h-full px-3 flex flex-col gap-3">
      <div className="w-full  flex items-center justify-center flex-col pt-4 gap-4 ">
        <span className=" font-medium text-lg">Transactions</span>
        <div className="w-full ">
          {
            <ul className="w-full flex items-center justify-evenly gap-[2px]">
              {tabs.map(tab => {
                return (
                  <li
                    key={tab}
                    onClick={() => {
                      setSelectedTab(tab)
                    } }
                    className={` cursor-pointer capitalize text-sm grow flex items-center justify-center relative after:absolute after:w-full after:h-[0.125rem] after:-bottom-[2px] ${
                      seletedTab == tab
                        ? 'after:bg-primary text-black'
                        : 'after:bg-black/10 text-black/50'
                    }  after:left-1/2 after:-translate-x-1/2`}
                  >
                    <Link href={`${tab != 'all' ? '/transactions/' +tab  : '/transactions'}`}>{tab}</Link>
                    
                  </li>
                );
              })}
            </ul>
          }
        </div>
      </div>
      <div className="w-full flex items-center justify-end">
        <Button type="primary">
          <div className="flex w-full items-center justify-between text-sm capitalize gap-2">
            <BiPlus /> category
          </div>
        </Button>
      </div>
      <hr className=' bg-cgray1' />
      <div className="w-full overflow-auto ">{children}</div>
    </div>
  );
}
