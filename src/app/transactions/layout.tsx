import { ReactNode } from 'react';
import AppLayout from '@/components/layouts/appLayout';

export default function Layout({
  children,
}: {
  children: ReactNode;
}): JSX.Element {
  return (
      <div className="w-full h-full ">
        {children}
      </div>
  );
}
