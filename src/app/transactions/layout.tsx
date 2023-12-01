/* eslint-disable react-hooks/exhaustive-deps */

'use client';
import Button from '@/components/shared/button';
import APICall from '@/helpers/apiCall';
import useAxiosAction from '@/hooks/useAction';
import { useAuth } from '@/store/auth/hooks';
import { TransCtgryTypeActionType } from '@/store/transactionCategoryType/actions';
import { useTransCtgryTypeDispatcher } from '@/store/transactionCategoryType/hooks';
import { ViewActionType } from '@/store/viewState/action';
import { useViewDispatcher } from '@/store/viewState/hooks';
import { Dropdown, MenuProps, message } from 'antd';
import { AxiosResponse } from 'axios';
import Link from 'next/link';
import { useParams, usePathname } from 'next/navigation';
import { ReactNode, useEffect, useState } from 'react';
import { BiPlus, BiSolidArrowFromBottom, BiSolidArrowFromTop } from 'react-icons/bi';
import withAuth from '@/helpers/HOC/withAuth';

export default withAuth(function Layout({ children }: { children: ReactNode }): JSX.Element {
  const dispatchView = useViewDispatcher();
  const [msg, msgContext] = message.useMessage();
  const pathname = usePathname();
  const { type } = useParams();
  const currentUser = useAuth();
  const dispatchTransCatgryTypes = useTransCtgryTypeDispatcher();

  const tabs = ['all', 'expenses', 'incomes'];
  const transactionsCategoryItems: MenuProps['items'] = [
    {
      key: 'expenses',
      label: <Link href={'/transactions/categories/expenses/new'}>Expense</Link>,
      icon: (
        <span className=" text-cred text-lg">
          <BiSolidArrowFromBottom />
        </span>
      ),
      onClick: () => dispatchView({ type: ViewActionType.SET_NAVIGATION, payload: false }),
    },
    {
      key: 'incomes',
      label: <Link href={'/transactions/categories/incomes/new'}>Income</Link>,
      icon: (
        <span className=" text-cgreen text-lg">
          <BiSolidArrowFromTop />
        </span>
      ),
      onClick: () => dispatchView({ type: ViewActionType.SET_NAVIGATION, payload: false }),
    },
  ];

  const [seletedTab, setSelectedTab] = useState('all');

  useEffect(() => {
    dispatchView({
      type: ViewActionType.SET_NAVIGATION_TAB,
      payload: 'trans',
    });
    dispatchView({
      type: ViewActionType.SET_NAVIGATION,
      payload: true,
    });
  }, []);

  // Fetch all category types
  const fetchAllTransactionCategories = async (): Promise<
    AxiosResponse<IAPIResponse<ITransactionCategoryType[]>>
  > => {
    return await APICall.get('/transaction_category_types/', {}, currentUser.accessToken);
  };

  // Create a new action (Fetch all category types)
  const [fetchAllTransactionCategoryTypeAction, { loading, data, error }] = useAxiosAction(
    fetchAllTransactionCategories
  );

  // Fetch all category types onLoad
  useEffect(() => {
    fetchAllTransactionCategoryTypeAction();
    console.log('rendering...');
  }, []);

  /*
   * Track the loading state to either set all category types to the
   * storage or show an error message in the UI
   **/
  useEffect(() => {
    if (data) {
      dispatchTransCatgryTypes({
        type: TransCtgryTypeActionType.SET_TYPES,
        payload: data.data.data,
      });

      console.log(data)
    }

    if (error) {
      msg.error(error.response?.data.message);
      console.log(error)
    }
  }, [loading]);

  return (
    <div className="w-full  h-full  flex flex-col gap-4">
      {msgContext}
      {pathname.split('/')[pathname.split('/').length - 1] != 'new' &&
        !pathname.split('/').includes('categories') && (
          <>
            <div className="w-full px-3 flex items-center justify-center flex-col pt-4 gap-4 ">
              <span className=" font-semibold text-xl">Transactions</span>
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
                          <Link href={`${tab != 'all' ? '/transactions/' + tab : '/transactions'}`}>
                            {tab}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                }
              </div>
            </div>
            <div className="w-full flex px-3 items-center justify-between">
              <Link href={'/transactions/categories'}>
                <Button type="secondary">
                  <div className="flex w-full items-center justify-between text-sm capitalize gap-2">
                    See all categories
                  </div>
                </Button>
              </Link>
              {!type && (
                <Dropdown menu={{ items: transactionsCategoryItems }}>
                  <div>
                    <Button type="primary">
                      <div className="flex w-full items-center justify-between text-sm capitalize gap-2">
                        <BiPlus /> Category
                      </div>
                    </Button>
                  </div>
                </Dropdown>
              )}
            </div>
            <hr className=" bg-cgray1" />
          </>
        )}
      <div className="w-full h-full overflow-auto ">{children}</div>
    </div>
  );
})
