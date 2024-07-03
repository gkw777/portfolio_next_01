import { Footer, Navbar } from '@/components';
import classNames from 'classnames';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.scss';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'NextJS Portfolio 01',
  description: 'NextJS을 이용한 자동차 검색'
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang='en'>
      <body className={classNames('relative', inter.className)}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
