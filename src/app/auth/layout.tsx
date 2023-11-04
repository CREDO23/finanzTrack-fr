/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import { ReactNode, useEffect } from 'react';
import logo from '../../assets/logo/logo.png';
import Image from 'next/image';
import { useViewDispatcher } from '@/store/viewState/hooks';
import { ViewActionType } from '@/store/viewState/action';

export default function Layout({
  children,
}: {
  children: ReactNode;
}): JSX.Element {
  const dispatchView = useViewDispatcher();
  useEffect(() => {
    dispatchView({
      type: ViewActionType.SET_NAVIGATION,
      payload: false,
    });
  }, []);

  return (
    <div className="w-full h-full ">
      {children}
      <div className=" absolute bottom-0 right-0 flex items-end justify-end w-auto">
        <Image height={80} src={logo} alt="logo" />
      </div>
    </div>
  );
}
