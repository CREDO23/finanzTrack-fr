import { ReactNode } from 'react';
import logo from '../../assets/logo/logo.png';
import Image from 'next/image';

export default function Layout({
  children,
}: {
  children: ReactNode;
}): JSX.Element {
  return (
    <div className="w-full min-h-[100dvh] flex justify-center relative">
      {children}
      <div className=" absolute bottom-0 w-full flex items-center justify-center sm:right-0 sm:w-auto">
        <Image height={100} src={logo} alt="logo" />
      </div>
    </div>
  );
}
