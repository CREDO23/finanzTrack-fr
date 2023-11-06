'use client';
import { ReactNode } from 'react';
import { useAuth, useAuthDispatcher } from '@/store/auth/hooks';
import { AuthActionType } from '@/store/auth/actions';
import { IoChevronBack } from 'react-icons/io5';
import { useView, useViewDispatcher } from '@/store/viewState/hooks';
import { ViewActionType } from '@/store/viewState/action';
import { useRouter } from 'next/navigation';

export default function Layout({ children }: { children: ReactNode }): JSX.Element {
  const currentUser = useAuth();
  const authDispatcher = useAuthDispatcher();
  const dispatchView = useViewDispatcher();
  const viewState = useView();

  const router = useRouter();

  return (
    <div className="w-full h-full bg-cgray1">
      <div className="p-4 flex flex-col gap-4 h-full ">
        <div className="w-full justify-between flex gap-4">
          <div className="flex items-center justify-center text-primary text-3xl">
            {!viewState.showNavBar && (
              <span
                className=" cursor-pointer"
                onClick={() => {
                  dispatchView({ type: ViewActionType.SET_NAVIGATION, payload: true });
                  router.back();
                }}
              >
                <IoChevronBack />
              </span>
            )}
          </div>
          <div
            onClick={() => {
              authDispatcher({ type: AuthActionType.SET_USER, payload: { name: 'Roger' } });
            }}
            className=" text-xl font-semibold border w-16 h-16 rounded-full flex items-center justify-center bg-white border-primary"
          >
            {currentUser?.user?.name?.substring(0, 1)}
          </div>
        </div>
        {children}
      </div>
    </div>
  );
}
