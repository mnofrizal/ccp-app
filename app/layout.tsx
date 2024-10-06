import './globals.css';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import BottomNavbar from '@/components/BottomNavbar';
import { ThemeProvider } from '@/components/ThemeProvider';

const poppins = Poppins({ 
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Energy App',
  description: 'Next.js 14 Energy App with shadcn/ui',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.className} flex flex-col min-h-screen bg-background text-foreground`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <main className="flex-grow">{children}</main>
          <BottomNavbar />
        </ThemeProvider>
      </body>
    </html>
  );
}