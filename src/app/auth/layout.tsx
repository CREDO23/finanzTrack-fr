import { ReactNode } from 'react';
import logo from '../../assets/logo/logo.png';
import Image from 'next/image';
import AppLayout from '@/components/layouts/appLayout';

export default function Layout({
  children,
}: {
  children: ReactNode;
}): JSX.Element {
  return (
      <div className="w-full h-full ">
        {children}
        <div className=" absolute bottom-0 right-0 flex items-end justify-end w-auto">
          <Image height={80} src={logo} alt="logo" />
        </div>
      </div>
  );
}
