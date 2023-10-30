'use client';
import AppLayout from '@/components/layouts/appLayout';
import { ReactNode } from 'react';

export default function Layout({
  children,
}: {
  children: ReactNode;
}): JSX.Element {
  return (
    <AppLayout showNavigationBar={true}>
      <div className="w-full h-full bg-cgray1">
        <div className="p-4 flex flex-col gap-4">
          <div className="w-full flex gap-4">
            <div className=" text-xl font-semibold border-2 w-16 h-16 rounded-full flex items-center justify-center bg-white border-primary">
              T
            </div>
            <div className=" grow flex items-center justify-between">
              <div className="flex flex-col text-sm justify-center h-full w-full">
                <span className=" text-sm">Username:</span>
                <span className=" text-lg">Thierry</span>
              </div>
            </div>
          </div>
          {children}
        </div>
      </div>
    </AppLayout>
  );
}
