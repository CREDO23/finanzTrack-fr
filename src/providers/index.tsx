'use client';

import { ReactNode } from 'react';
import { ConfigProvider } from 'antd';
import AuthProvider from '@/store/auth/provider';
import dynamic from 'next/dynamic';
import { Montserrat } from 'next/font/google';
import '../app/globals.css';

const WebStorageProvider = dynamic(() => import('@/store/browser/provider'), {
  ssr: false,
});

const ViewProvider = dynamic(() => import('@/store/viewState/provider'), {
  ssr: false,
});
const montserrat = Montserrat({ subsets: ['latin'] });

export default function Providers({
  children,
}: {
  children: ReactNode;
}): JSX.Element {
  return (
    <body
      className={`${montserrat.className} min-h-[100vdh] h-[100dvh] flex items-center justify-center flex-col  overflow-hidden `}
    >
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: '#7F3DFF',
            colorError: '#FE4D4F',
          },
        }}
      >
        <WebStorageProvider>
          <AuthProvider>
            <ViewProvider>{children}</ViewProvider>
          </AuthProvider>
        </WebStorageProvider>
      </ConfigProvider>
    </body>
  );
}
