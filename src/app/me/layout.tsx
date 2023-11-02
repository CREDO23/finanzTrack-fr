'use client';
import AppLayout from '@/components/layouts/appLayout';
import { ReactNode } from 'react';
import { useAuth, useAuthDispatcher } from '@/store/auth/hooks';
import { AuthActionType } from '@/store/auth/actions';

export default function Layout({
  children,
}: {
  children: ReactNode;
}): JSX.Element {
  const currentUser = useAuth();
  const authDispatcher = useAuthDispatcher()

  return (
      <div className="w-full h-full bg-cgray1">
        <div className="p-4 flex flex-col gap-4 h-full ">
          <div className="w-full justify-end flex gap-4">
            <div>

            </div>
            <div onClick={() => authDispatcher({type : AuthActionType.SET_USER, payload : {name : 'Roger'}})} className=" text-xl font-semibold border-2 w-16 h-16 rounded-full flex items-center justify-center bg-white border-primary">
              {currentUser?.user?.name?.substring(0, 1)}
            </div>
          </div>
          {children}
        </div>
      </div>
  );
}
