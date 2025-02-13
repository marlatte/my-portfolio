import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from './ui/header';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Walker's Work",
  description: 'Portfolio for Walker Marlatt',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} flex min-h-dvh flex-col antialiased`}
      >
        <Header />
        {children}
        <footer className="p-2 text-center">
          &copy; Walker Marlatt {new Date().getFullYear()}
        </footer>
      </body>
    </html>
  );
}
