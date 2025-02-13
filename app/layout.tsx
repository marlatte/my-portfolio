import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';
import Header from './ui/header';

const montserrat = Montserrat({ subsets: ['latin'] });

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
        className={`${montserrat.className} flex min-h-dvh flex-col antialiased`}
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
