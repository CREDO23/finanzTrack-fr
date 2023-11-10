'use client';

import { ReactNode } from 'react';
import { ConfigProvider } from 'antd';
import dynamic from 'next/dynamic';
import { Montserrat } from 'next/font/google';
import '../app/globals.css';
import { usePathname } from 'next/navigation';
import { NextFont } from 'next/dist/compiled/@next/font';

const WebStorageProvider = dynamic(() => import('@/store/browser/provider'), {
  ssr: false,
});

const AuthProvider = dynamic(() => import('@/store/auth/provider'), { ssr: false });

const ViewProvider = dynamic(() => import('@/store/viewState/provider'), {
  ssr: false,
});

const TransCtgryProvider = dynamic(() => import('@/store/transactionCategory/provider'), {
  ssr: false,
});

const montserrat = Montserrat({ subsets: ['latin'] });

export default function Providers({ children, font }: { children: ReactNode, font : NextFont }): JSX.Element {

  const pathname = usePathname()

  return (
    <body
      className={`${font.className} min-h-[100vdh] h-[100dvh] flex items-center justify-center flex-col  overflow-hidden `}
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
            {/* <TransCtgryProvider> */}
            {pathname.split('/')[1] == 'ladding_page' ? children :  <ViewProvider>{children}</ViewProvider>}
             
            {/* </TransCtgryProvider> */}
          </AuthProvider>
        </WebStorageProvider>
      </ConfigProvider>
    </body>
  );
}
