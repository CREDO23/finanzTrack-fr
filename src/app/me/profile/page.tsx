'use client';
import { useRouter } from 'next/navigation';
import { CiEdit } from 'react-icons/ci';

export default function Profile(): JSX.Element {
  const router = useRouter();

  return (
    <div className="w-full p-3 font-light flex flex-col gap-4">
      <span
        onClick={() => router.push('/me/profile/edit')}
        className=" text-primary text-2xl self-end"
      >
        <CiEdit />
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
