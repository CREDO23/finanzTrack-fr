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
    <AppLayout showNavigationBar={true}>
      <div className="w-full h-full ">
        {children}
      </div>
    </AppLayout>
  );
}
