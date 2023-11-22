'use client';

import Link from 'next/link';
import Button from '@/components/shared/button';
import { useState } from 'react';
import '../../app/globals.css';
import { FiAlignJustify } from 'react-icons/fi';
import { Montserrat } from 'next/font/google';
import { Dropdown, MenuProps } from 'antd';

const montserrat = Montserrat({ subsets: ['latin'] });

export default function Layout({ children }: { children: JSX.Element }) {
  const tabs = [
    { title: 'home', path: '/' },
    { title: 'features', path: '/features' },
    { title: 'about', path: '/about' },
  ];

  const items: MenuProps['items'] = [
    {
      key: '1',
      label: <Link href={'/ladding_page/'}>Home</Link>,
    },
    {
      key: '2',
      label: <Link href={'/ladding_page/features'}>Features</Link>,
    },
    {
      key: '3',
      label: <Link href={'/ladding_page/about'}>About</Link>,
    },
  ];

  const [selectedTab, setSelectedTab] = useState('home');

  return (
    <div className={`w-full h-full font-light ${montserrat.className}`}>
      <div className="w-full shadow h-[60px] flex items-center justify-between px-6">
        <ul className=" hidden md:flex items-center justify-center gap-6">
          {tabs.map(tab => (
            <Link key={tab.title} href={'/ladding_page/' + tab.path}>
              <li
                onClick={() => setSelectedTab(tab.title)}
                className={`capitalize ${selectedTab == tab.title && ' text-primary font-medium'}`}
              >
                {tab.title}
              </li>
            </Link>
          ))}
        </ul>
        <div className="md:hidden flex items-center justify-center">
          <Dropdown menu={{ items }}>
            <div className="flex text-4xl w-full items-center justify-between capitalize gap-2">
              <FiAlignJustify />
            </div>
          </Dropdown>
        </div>
        <div className=" z-[100]">
          <Link href={'/auth/login'}>
            <Button type="primary">Connexion</Button>
          </Link>
        </div>
      </div>
      <div className="w-full h-[calc(100%-120px)] p-3">{children}</div>
      <div className="h-[60px] bg-[#1D2B3A] text-white fixed bottom-0 z-20 w-full flex flex-row items-center justify-evenly">
        Copyright (c) 2023 CREDO23
      </div>
    </div>
  );
}
