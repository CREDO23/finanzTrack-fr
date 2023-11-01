'use client';
import { ViewActionType } from '@/store/viewState/action';
import { useViewDispatcher } from '@/store/viewState/provider';
import Link from 'next/link';
import { CiEdit } from 'react-icons/ci';

export default function Profile(): JSX.Element {
  const dispatchView = useViewDispatcher();

  return (
    <div className="w-full font-light flex flex-col gap-5">
      <span
        onClick={() =>
          dispatchView({ type: ViewActionType.SET_NAVIGATION, payload: false })
        }
        className=" cursor-pointer text-primary text-2xl"
      >
        <Link href={'/me/profile/edit'}>
          <CiEdit />
        </Link>
      </span>

      <div className="w-full flex flex-col gap-3  ">
        <div className="w-full bg-white flex flex-col gap-1 h-16 rounded p-2">
          <span className=" text-cgray text-sm">Name:</span>
          <span className="">Thierry</span>
        </div>
        <div className="w-full  bg-white flex flex-col gap-1 h-16 rounded p-2">
          <span className=" text-cgray text-sm">Email:</span>
          <span className="">bakerathierry@gmail.com</span>
        </div>
      </div>
    </div>
  );
}
