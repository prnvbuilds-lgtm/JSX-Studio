import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'JXP Guide — Journaling Experiences | Boutique Travel & Hospitality',
  description:
    'Discover curated dining, living, events, and travel experiences. Partner with JXP Guide to elevate your hospitality brand.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen flex flex-col bg-[#0D0D0D] text-white selection:bg-[#B3231C] selection:text-white">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
