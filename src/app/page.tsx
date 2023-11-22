'use client';

import WelcomeSpinner from '@/components/spinners/welcome';
import { useAuth } from '@/store/auth/hooks';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Home() {
  const router = useRouter();
  const currentUser = useAuth();

  useEffect(() => {
    if (currentUser.accessToken && currentUser.user) {
      router.push('/home');
    } else {
      router.push('/ladding_page');
    }
  }, []);

  return (
    <div className="border h-full w-full flex items-center  justify-center">
      <WelcomeSpinner />
    </div>
  );
}
