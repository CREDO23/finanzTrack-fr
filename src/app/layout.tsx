import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';
import { ConfigProvider } from 'antd';
import { ReactNode } from 'react';
import AuthContext, { defaultUserContext } from '@/store/providers/authProvider';

const montserrat = Montserrat({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'FinanzTrack',
  description: '',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: '#7F3DFF',
            colorError: '#FE4D4F',
          },
        }}
      >
          <body
            className={`${montserrat.className} h-screen flex items-center justify-center overflow-hidden `}
          >
            {children}
          </body>
      </ConfigProvider>
    </html>
  );
}
