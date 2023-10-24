import { TbReport } from 'react-icons/tb';
import { BsPlusCircleFill } from 'react-icons/bs';
import { GoGoal } from 'react-icons/go';
import { CiUser, CiHome } from 'react-icons/ci';
import {BiSolidArrowFromBottom, BiSolidArrowFromTop} from 'react-icons/bi'


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

  return (
    <div className="w-full h-[5rem] py-2 px-4">
      <ul className="w-full h-full flex items-center justify-between bg-white">
        {items.map((item, key) => {
          if (item.label == 'Add') {
            return (
              <li className="mx-2 cursor-pointer text-primary" key={item.label}>
                <span className=" text-6xl">{item.icon}</span>
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
