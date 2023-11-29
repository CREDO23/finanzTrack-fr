'use client';

import { useAuth } from '@/store/auth/hooks';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function withAuth(Component: React.FunctionComponent<any>) {
  return function (props: React.ReactPropTypes) {
    const currentUser = useAuth();
    const router = useRouter();

    useEffect(() => {
      if (!currentUser.accessToken || !currentUser.user) {
        router.push('/auth/login');
      }
    }, []);

    if (currentUser.accessToken && currentUser.user) {
      return <Component {...props} />;
    }
  };
}
