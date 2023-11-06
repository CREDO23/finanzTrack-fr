'use client';
import { GoPencil } from 'react-icons/go';
import { BiSolidUserAccount, BiLogOut } from 'react-icons/bi';
import { IoSettingsOutline } from 'react-icons/io5';
import { CiUser } from 'react-icons/ci';
import Link from 'next/link';

export default function Me(): JSX.Element {
  const options = [
    {
      title: 'Profil',
      icon: <CiUser />,
      path: '/profile',
    },
    {
      title: 'Account',
      icon: <BiSolidUserAccount />,
      path: '/account',
    },
    {
      title: 'Settings',
      icon: <IoSettingsOutline />,
      path: '/settings',
    },
    {
      title: 'Log out',
      icon: <BiLogOut />,
      path: '/',
    },
  ];

  return (
    <ul className=" rounded-xl overflow-hidden divide-y">
      {options.map(el => (
        <Link href={`/me${el.path}`}>
          <li
            key={el.title}
            className="flex items-center gap-2 p-3 bg-white hover:bg-primary/5 cursor-pointer "
          >
            <span className=" w-10 h-10 rounded-lg flex items-center justify-center text-xl text-primary bg-primary/10">
              {el.icon}
            </span>
            <span className=" text-sm">{el.title}</span>
          </li>
        </Link>
      ))}
    </ul>
  );
}
