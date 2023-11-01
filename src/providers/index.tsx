'use client';

import { ReactNode } from 'react';
import { ConfigProvider } from 'antd';
import AuthProvider from '@/store/auth/provider';
import ViewProvider from '@/store/viewState/provider';

export default function Providers({
  children,
}: {
  children: ReactNode;
}): JSX.Element {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#7F3DFF',
          colorError: '#FE4D4F',
        },
      }}
    >
      <AuthProvider>
        <ViewProvider>{children}</ViewProvider>
      </AuthProvider>
    </ConfigProvider>
  );
}
