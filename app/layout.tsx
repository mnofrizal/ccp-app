import './globals.css';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import BottomNavbar from '@/components/BottomNavbar';

const poppins = Poppins({ 
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Mobile App',
  description: 'Next.js 14 Mobile App with shadcn/ui',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className} flex flex-col min-h-screen bg-custom-light`}>
        <main className="flex-grow">{children}</main>
        <BottomNavbar />
      </body>
    </html>
  );
}