'use client';

import { ReactNode } from 'react';
import { ConfigProvider } from 'antd';
import dynamic from 'next/dynamic';
import { Montserrat } from 'next/font/google';
import '../app/globals.css';
import { usePathname } from 'next/navigation';
import withAuth from '@/helpers/HOC/withAuth';


/**
 * This is where i put togeter all providers (state, style, etc)
 * 
 * - State providers are imported dynamically and not loaded in the server rendering
 * since they use the web browser's storage.
 */

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

const TransCtgryTypeProvider = dynamic(() => import('@/store/transactionCategoryType/provider'), {
  ssr: false,
});

const TransactionProvider = dynamic(() => import('@/store/transactions/provider'), {
  ssr: false,
});

const montserrat = Montserrat({ subsets: ['latin'] });

export default function Providers({ children }: { children: ReactNode }): JSX.Element {
  const pathname = usePathname();

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
            <TransCtgryTypeProvider>
              <TransCtgryProvider>
                <TransactionProvider>
                  {pathname.split('/')[1] == 'ladding_page' ? (
                    children
                  ) : (
                    <ViewProvider>{children}</ViewProvider>
                  )}
                </TransactionProvider>
              </TransCtgryProvider>
            </TransCtgryTypeProvider>
          </AuthProvider>
        </WebStorageProvider>
      </ConfigProvider>
    </body>
  );
}