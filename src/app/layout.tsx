import type { Metadata } from 'next';
import './globals.css';
import { ReactNode } from 'react';
import Providers from '@/providers';
import { Montserrat } from 'next/font/google';

export const metadata: Metadata = {
  title: 'FinanzTrack',
  description: '',
};

const montserrat = Montserrat({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <Providers font={montserrat}>{children}</Providers>
    </html>
  );
}
