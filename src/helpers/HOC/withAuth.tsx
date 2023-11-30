'use client';

import { useAuth } from '@/store/auth/hooks';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function withAuth<T extends JSX.IntrinsicAttributes>(
  WrappedComponent: React.ComponentType<T>
) {
  return function WithAuth (props: T) {
    const currentUser = useAuth();
    const router = useRouter();

    useEffect(() => {
      if (!currentUser.accessToken || !currentUser.user) {
        router.push('/auth/login');
      }
    }, []);

    if (currentUser.accessToken && currentUser.user) {
      return <WrappedComponent {...props} />;
    }
  };
}