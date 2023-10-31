"use client"
import { ReactNode } from 'react';
import NavigationBar from '@/components/navigationBar';

export default function AppLayout({
  children,
  showNavigationBar = false,
}: {
  children: ReactNode;
  showNavigationBar?: Boolean;
}) {
  return (
    <div className="w-full h-full sm:w-96 relative">
      <div className={`w-full ${showNavigationBar ? 'h-[calc(100dvh-5rem)]' : 'h-full'}  flex justify-center`}>
        {children}
      </div>
      {showNavigationBar && <NavigationBar />}
    </div>
  );
}
