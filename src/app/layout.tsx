import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { NavBar } from '@/components';
import { UserWrapper } from '@/context/UserContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Test App',
  description: 'Ing. Emanuel Torres',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <UserWrapper>
          <NavBar />
          <div className="container">{children}</div>
        </UserWrapper>
      </body>
    </html>
  );
}

