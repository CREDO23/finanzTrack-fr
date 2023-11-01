import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';
import { ReactNode } from 'react';
import Providers from '@/providers';
import NavBarProvider from '@/store/viewState/provider';
const montserrat = Montserrat({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'FinanzTrack',
  description: '',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <Providers>
          {children}
      </Providers>
    </html>
  );
}
