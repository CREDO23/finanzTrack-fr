/* eslint-disable react-hooks/exhaustive-deps */

'use client';
import Button from '@/components/shared/button';
import { ViewActionType } from '@/store/viewState/action';
import { useViewDispatcher } from '@/store/viewState/hooks';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ReactNode, use, useEffect, useState } from 'react';
import { BiPlus } from 'react-icons/bi';
import { Dropdown, MenuProps } from 'antd';
import { BiSolidArrowFromBottom, BiSolidArrowFromTop } from 'react-icons/bi';

export default function Layout({ children }: { children: ReactNode }): JSX.Element {

  const dispatchView = useViewDispatcher();

  
  const tabs = ['all', 'expenses', 'incomes'];

  const transactionsCategoryItems: MenuProps['items'] = [
    {
      key: '1',
      label: <Link href={'/transactions/categories/expenses/new'}>Expense</Link>,
      icon: (
        <span className=" text-cred text-lg">
          <BiSolidArrowFromBottom />
        </span>
      ),
      onClick : () => dispatchView({type : ViewActionType.SET_NAVIGATION, payload : false})
    },
    {
      key: '2',
      label: <Link href={'/transactions/categories/incomes/new'}>Income</Link>,
      icon: (
        <span className=" text-cgreen text-lg">
          <BiSolidArrowFromTop />
        </span>
      ),
      onClick : () => dispatchView({type : ViewActionType.SET_NAVIGATION, payload : false})
    },
  ];

  const [seletedTab, setSelectedTab] = useState('all');

  const pathname = usePathname();


  return (
    <div className="w-full  h-full  flex flex-col gap-4">
      {pathname.split('/')[pathname.split('/').length - 1] != 'new' && (
        <>
          <div className="w-full px-3 flex items-center justify-center flex-col pt-4 gap-4 ">
            <span className=" font-semibold text-xl">Transaction categories</span>
            <div className="w-full ">
              {
                <ul className="w-full flex items-center justify-evenly gap-[2px]">
                  {tabs.map(tab => {
                    return (
                      <li
                        key={tab}
                        onClick={() => {
                          setSelectedTab(tab);
                        }}
                        className={` cursor-pointer capitalize grow flex items-center justify-center relative after:absolute after:w-full after:h-[0.125rem] after:-bottom-[2px] ${
                          seletedTab == tab
                            ? 'after:bg-primary text-black'
                            : 'after:bg-black/10 text-black/50'
                        }  after:left-1/2 after:-translate-x-1/2`}
                      >
                        <Link
                          href={`${
                            tab != 'all'
                              ? '/transactions/categories/' + tab
                              : '/transactions/categories'
                          }`}
                        >
                          {tab}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              }
            </div>
          </div>
          <div className="w-full flex px-3 items-center justify-end">
            <Dropdown menu={{ items: transactionsCategoryItems }}>
              <div>
                <Button type="primary">
                  <div className="flex w-full items-center justify-between text-sm capitalize gap-2">
                    <BiPlus /> New
                  </div>
                </Button>
              </div>
            </Dropdown>
          </div>
          <hr className=" bg-cgray1" />
        </>
      )}
      <div className="w-full h-full overflow-auto ">{children}</div>
    </div>
  );
}
