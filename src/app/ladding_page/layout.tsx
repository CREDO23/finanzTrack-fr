'use client';

import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import Button from '@/components/shared/button';
import { useState } from 'react';
import '../../app/globals.css';

import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ subsets: ['latin'] });

export default function Layout({ children }: { children: JSX.Element }) {
  const tabs = [
    { title: 'home', path: '/' },
    { title: 'features', path: '/features' },
    { title: 'about', path: '/about' },
  ];

  const [selectedTab, setSelectedTab] = useState('home');

  return (
    <div className={`w-full h-full font-light ${montserrat.className}`}>
      <div className="w-full shadow h-[60px] flex items-center justify-between px-6">
        <ul className="flex items-center justify-center gap-6">
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
        <div className=" z-[100]">
          <Link href={'/auth/login'}>
            <Button type="primary">Connexion</Button>
          </Link>
        </div>
      </div>
      <div className="w-full h-[calc(100%-120px)] p-3">{children}</div>
      <div className="h-[60px] bg-[#1D2B3A] text-white fixed bottom-0 z-20 w-full flex flex-row items-center justify-evenly">
        © 2023 Finanz Track. All Rights Reserved.
      </div>
    </div>
  );
}
