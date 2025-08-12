import type {Metadata} from 'next';
import './globals.css';
import {cn} from '@/lib/utils';
import Header from '@/components/header';
import Footer from '@/components/footer';
import {Toaster} from '@/components/ui/toaster';

export const metadata: Metadata = {
  title: 'Web3 Wizard | Professional Websites for Nigerian Businesses',
  description: 'I build affordable, mobile-friendly websites that help Nigerian small businesses get more customers online. Get your free quote today.',
  icons: {
    icon: '/icon.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;500;700;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={cn('min-h-screen bg-background font-body antialiased flex flex-col')}>
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
