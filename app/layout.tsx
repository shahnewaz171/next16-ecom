import './globals.css';

import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { NuqsAdapter } from 'nuqs/adapters/next/app';
import { BoundaryProvider } from '@/components/core/BoundaryProvider';
import NotificationProvider from '@/components/core/NotificationProvider';
import { ThemeProvider } from '@/components/core/ThemeProvider';
import ThemeScript from '@/components/core/ThemeScript';
import WebVitals from '@/components/core/WebVitals';
import Footer from '@/components/layouts/Footer';
import Navbar from '@/components/layouts/Navbar';
import BoundaryToggle from '@/features/boundary/BoundaryToggle';
import { CartProvider } from '@/store/context/CartContext';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin']
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: 'Next 16 E-Commerce - Modern Shopping Experience',
  description:
    'Discover amazing products with our Next.js 16 powered e-commerce platform featuring partial pre-rendering and advanced caching'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-scroll-behavior="smooth" suppressHydrationWarning>
      <head>
        <ThemeScript />
      </head>

      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider>
          <NuqsAdapter>
            <NotificationProvider>
              <BoundaryProvider>
                <CartProvider>
                  <div className="min-h-screen flex flex-col pb-20">
                    {/* navbar */}
                    <Navbar />

                    <main className="grow container mx-auto p-4">{children}</main>

                    <Footer>
                      <BoundaryToggle />
                    </Footer>
                  </div>
                </CartProvider>
              </BoundaryProvider>
            </NotificationProvider>
          </NuqsAdapter>
        </ThemeProvider>

        <WebVitals />
      </body>
    </html>
  );
}
