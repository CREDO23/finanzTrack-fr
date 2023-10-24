"use client"
import { GoPencil } from 'react-icons/go';
import { BiSolidUserAccount, BiLogOut } from 'react-icons/bi';
import { IoSettingsOutline } from 'react-icons/io5';
import { CiUser } from 'react-icons/ci';

export default function Me(): JSX.Element {
  const options = [
    {
      title: 'Profil',
      icon: <CiUser />,
    },
    {
      title: 'Account',
      icon: <BiSolidUserAccount />,
    },
    {
      title: 'Settings',
      icon: <IoSettingsOutline />,
    },
    {
      title: 'Log out',
      icon: <BiLogOut />,
    },
  ];

  return (
      <ul className=" rounded-xl overflow-hidden divide-y">
        {options.map(el => (
          <li
            key={el.title}
            className="flex items-center gap-2 p-3 bg-white hover:bg-primary/5 cursor-pointer "
          >
            <span className=" w-10 h-10 rounded-lg flex items-center justify-center text-xl text-primary bg-primary/10">
              {el.icon}
            </span>{' '}
            <span className=" text-sm">{el.title}</span>
          </li>
        ))}
      </ul>
  );
}
