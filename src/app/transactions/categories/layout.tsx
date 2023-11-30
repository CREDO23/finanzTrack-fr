/* eslint-disable react-hooks/exhaustive-deps */

'use client';
import Button from '@/components/shared/button';
import { ViewActionType } from '@/store/viewState/action';
import { useViewDispatcher } from '@/store/viewState/hooks';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ReactNode, use, useEffect, useState } from 'react';
import { BiPlus } from 'react-icons/bi';
import { Dropdown, MenuProps, message } from 'antd';
import { BiSolidArrowFromBottom, BiSolidArrowFromTop } from 'react-icons/bi';
import APICall from '@/helpers/apiCall';
import useAxiosAction from '@/hooks/useAction';
import { TransCtgryActionType } from '@/store/transactionCategory/actions';
import { AxiosResponse } from 'axios';
import { useAuth } from '@/store/auth/hooks';
import {  useTransCtgryDispatcher } from '@/store/transactionCategory/hooks';

export default function Layout({ children }: { children: ReactNode }): JSX.Element {
  const dispatchView = useViewDispatcher();
  const [msg, msgContext] = message.useMessage();
  const currentUser = useAuth();
  const pathname = usePathname();
  const [seletedTab, setSelectedTab] = useState('all');
  const dispatchTransCatgry = useTransCtgryDispatcher();

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
      onClick: () => dispatchView({ type: ViewActionType.SET_NAVIGATION, payload: false }),
    },
    {
      key: '2',
      label: <Link href={'/transactions/categories/incomes/new'}>Income</Link>,
      icon: (
        <span className=" text-cgreen text-lg">
          <BiSolidArrowFromTop />
        </span>
      ),
      onClick: () => dispatchView({ type: ViewActionType.SET_NAVIGATION, payload: false }),
    },
  ];

  // Fetch all categories
  const fetchAllTransactionCategories = async (): Promise<
    AxiosResponse<IAPIResponse<ITransactionCategory[]>>
  > => {
    return await APICall.get('/transaction_categories/', {}, currentUser.accessToken);
  };

  // Create a new action (Fetch all categories)
  const [fetchAllTransactionCategoriesAction, { loading, data, error }] = useAxiosAction(
    fetchAllTransactionCategories
  );

  // Fetch all categories onLoad
  useEffect(() => {
    fetchAllTransactionCategoriesAction();
  }, []);

  /*
   * Track the loading state to either set all categories to the
   * storage or show an error message in the UI
   **/
  useEffect(() => {
    if (data) {
      dispatchTransCatgry({ type: TransCtgryActionType.SET_CATEGORIES, payload: data.data.data });
      console.log(data);
    }

    if (error) {
      msg.error(error.response?.data.message);
    }

    dispatchTransCatgry({
      type: TransCtgryActionType.SET_LOADING,
      payload: loading,
    });
  }, [loading]);

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
