'use client';

import Loader from '@/components/spinners/loader';
import { useAuth } from '@/store/auth/hooks';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function withAuth<T>(WrappedComponent: React.FunctionComponent<any | T>) {
  const WithAuth: React.ComponentType<T> = (props: T) => {
    const currentUser = useAuth();
    const router = useRouter();

    useEffect(() => {
      if (!currentUser.accessToken || !currentUser.user) {
        router.push('/auth/login');
      }
    });

    if (currentUser.accessToken && currentUser.user) {
      return <WrappedComponent {...props} />;
    } else {
      <Loader />;
    }
  };

  WithAuth.displayName = WrappedComponent.displayName;

  return WithAuth;
}
