'use client';
import { TbReport } from 'react-icons/tb';
import { BsPlusCircleFill } from 'react-icons/bs';
import { GoGoal } from 'react-icons/go';
import { CiUser, CiHome } from 'react-icons/ci';
import { BiSolidArrowFromBottom, BiSolidArrowFromTop } from 'react-icons/bi';
import { useState } from 'react';

export default function NavigationBar(): JSX.Element {
  const items = [
    {
      label: 'Home',
      icon: <CiHome />,
    },
    {
      label: 'Reports',
      icon: <TbReport />,
    },
    {
      label: 'Add',
      icon: <BsPlusCircleFill />,
    },
    {
      label: 'Goals',
      icon: <GoGoal />,
    },
    {
      label: 'Me',
      icon: <CiUser />,
    },
  ];

  const [showActions, setshowActions] = useState(false);

  const handleshowActions = () => setshowActions(prevA => !prevA);

  return (
    <div className="w-full h-[5rem] py-2 px-4">
      <ul className="w-full h-full flex items-center justify-between bg-white">
        {items.map((item, key) => {
          if (item.label == 'Add') {
            return (
              <li className="cursor-pointer border relative " key={item.label}>
                <span
                  className={`text-2xl rounded-full flex items-center justify-center bg-cgreen/10 text-cgreen absolute  ${
                    showActions ? '-top-24 left-20  opacity-100' : 'top-1/2 left-1/2 opacity-0'
                  } transition-all  -translate-x-1/2 -translate-y-1/2  w-16 h-16`}
                >
                  <BiSolidArrowFromTop />
                </span>
                <span
                  className={`text-2xl rounded-full flex items-center justify-center bg-cred/10 text-cred absolute ${
                    showActions ? '-top-24 -left-20 opacity-100' : 'top-1/2 left-1/2 opacity-0'
                  } transition-all  -translate-x-1/2 -translate-y-1/2  w-16 h-16`}
                >
                  <BiSolidArrowFromBottom />
                </span>
                <span
                  onClick={handleshowActions}
                  className=" text-primary absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl"
                >
                  {item.icon}
                </span>
              </li>
            );
          } else {
            return (
              <li
                key={item.label}
                className="flex flex-col cursor-pointer items-center justify-center"
              >
                <span className=" text-3xl">{item.icon}</span>
                <span className=" text-xs">{item.label}</span>
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
}
