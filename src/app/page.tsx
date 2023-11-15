'use client';

import WelcomeSpinner from '@/components/spinners/welcome';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push('/ladding_page');
  }, []);

  return <div className='border h-full w-full flex items-center  justify-center'><WelcomeSpinner /></div>
}
