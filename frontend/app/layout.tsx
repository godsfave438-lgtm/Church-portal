import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';

export const metadata: Metadata = {
  title: 'St. Michael Anglican Church Amatta',
  description: 'A modern church website and management system.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
