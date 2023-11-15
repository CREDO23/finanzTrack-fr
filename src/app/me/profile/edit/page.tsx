'use client';
import Button from '@/components/shared/button';
import Input from '@/components/shared/input';
import Switch from '@/components/shared/switch';
import { useEffect, useState } from 'react';
import { useViewDispatcher } from '@/store/viewState/hooks';
import { ViewActionType } from '@/store/viewState/action';
import Link from 'next/link';

export default function Profile(): JSX.Element {
  const [password, setPassword] = useState(false);

  const dispatchView = useViewDispatcher();

  useEffect(() => {
    dispatchView({ type: ViewActionType.SET_NAVIGATION, payload: false });
    dispatchView({ type: ViewActionType.SET_ARROW_BACK, payload: true });
  },[])

  return (
    <div className="w-full font-light flex flex-col justify-between h-full ">
      <div className="w-full flex flex-col  gap-4">
        <div className="w-full flex flex-col gap-3  ">
          <div className="w-full bg-white flex flex-col gap-1 h-20 rounded p-2">
            <span className=" text-sm">Name:</span>
            <Input bordered={false} placeholder="Enter your name" />
          </div>
          <div className="w-full  bg-white flex flex-col gap-1 h-20 rounded p-2">
            <span className=" text-sm">Email:</span>
            <Input bordered={false} placeholder="Enter your email" />
          </div>
        </div>
        <div className="w-full flex flex-col gap-3">
          <div className="w-full flex items-center justify-between">
            <p className=" font-medium">Change password</p>{' '}
            <Switch
              onChange={() => setPassword(prev => !prev)}
              value={password}
            />
          </div>
          {password && (
            <div className="w-full flex flex-col gap-3  ">
              <div className="w-full bg-white flex flex-col gap-1 h-16 rounded p-2">
                <span className="  text-sm">Old password:</span>
                <Input bordered={false} placeholder="Enter the old password" />
              </div>
              <div className="w-full  bg-white flex flex-col gap-1 h-16 rounded p-2">
                <span className="  text-sm">New password:</span>
                <Input bordered={false} placeholder="Enter your new password" />
              </div>
            </div>
          )}
        </div>
      </div>
      <Button
        onClick={() =>
          dispatchView({ type: ViewActionType.SET_NAVIGATION, payload: true })
        }
        size="big"
        type="primary"
      >
        <Link className="w-full" href={'/me/profile'}>
          <span className="w-full"> Save modifications</span>
        </Link>
      </Button>
    </div>
  );
}
