'use client';
import { TbReport } from 'react-icons/tb';
import { GrTransaction } from 'react-icons/gr';
import { BsPlusCircleFill } from 'react-icons/bs';
import { CiUser, CiHome } from 'react-icons/ci';
import { BiSolidArrowFromBottom, BiSolidArrowFromTop } from 'react-icons/bi';
import { ReactNode, useState } from 'react';
import { useView, useViewDispatcher } from '@/store/viewState/hooks';
import { ViewActionType } from '@/store/viewState/action';
import Link from 'next/link';

export default function NavigationBar(): JSX.Element {
  const viewState = useView();
  const dispatchView = useViewDispatcher();

  const items: {
    label: 'home' | 'repports' | 'trans' | 'me' | 'add';
    icon: ReactNode;
    path: string;
  }[] = [
    {
      label: 'home',
      icon: <CiHome />,
      path: '/home',
    },
    {
      label: 'repports',
      icon: <TbReport />,
      path: '/reports',
    },
    {
      label: 'add',
      icon: <BsPlusCircleFill />,
      path: '',
    },
    {
      label: 'trans',
      icon: <GrTransaction />,
      path: '/transactions',
    },
    {
      label: 'me',
      icon: <CiUser />,
      path: '/me',
    },
  ];

  const [showActions, setshowActions] = useState(false);

  const handleshowActions = () => setshowActions(prevA => !prevA);

  return (
    <div className="w-full h-[5rem] py-2 px-4">
      <ul className="w-full h-full flex items-center justify-between  bg-white">
        {items.map((item, key) => {
          if (item.label == 'add') {
            return (
              <li
                onClick={() =>
                  dispatchView({
                    type: ViewActionType.SET_IN_ACTION,
                    payload: !viewState?.inAction,
                  })
                }
                className="cursor-pointer mx-4  relative "
                key={item.label}
              >
                <Link href={'/transactions/incomes/new'}>
                  <span
                    onClick={() => {
                      handleshowActions();
                    }}
                    className={`text-2xl rounded-full flex items-center justify-center bg-cgreen text-white absolute  ${
                      showActions ? '-top-24 left-20  opacity-100' : 'top-1/2 left-1/2 opacity-0'
                    } transition-all  -translate-x-1/2 -translate-y-1/2  w-16 h-16`}
                  >
                    <BiSolidArrowFromTop />
                  </span>
                </Link>
                <Link href={'/transactions/expenses/new'}>
                  <span
                    onClick={() => {
                      handleshowActions();
                    }}
                    className={`text-2xl rounded-full flex items-center justify-center bg-cred text-white absolute ${
                      showActions ? '-top-24 -left-20 opacity-100' : 'top-1/2 left-1/2 opacity-0'
                    } transition-all  -translate-x-1/2 -translate-y-1/2  w-16 h-16`}
                  >
                    <BiSolidArrowFromBottom />
                  </span>
                </Link>
                <span
                  onClick={handleshowActions}
                  className=" text-primary absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-4xl"
                >
                  {item.icon}
                </span>
              </li>
            );
          } else {
            return (
              <Link key={item.label} className="" href={item.path}>
                <li
                  onClick={() =>
                    dispatchView({ type: ViewActionType.SET_NAVIGATION_TAB, payload: item.label })
                  }
                  key={item.label}
                  className={`flex capitalize  flex-col w-14 p-2 ${
                    viewState.tab == item.label && 'bg-primary/10 '
                  }  rounded-xl cursor-pointer items-center justify-center`}
                >
                  <>
                    <span className=" text-2xl">{item.icon}</span>
                    <span className=" text-xs">{item.label}</span>
                  </>
                </li>
              </Link>
            );
          }
        })}
      </ul>
    </div>
  );
}
