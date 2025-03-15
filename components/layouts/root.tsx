import { Montserrat } from 'next/font/google';
import '@/app/globals.css';
import Header from '../ui/header';

const montserrat = Montserrat({ subsets: ['latin'] });

export default function Root({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={`${montserrat.className} relative flex min-h-dvh flex-col scroll-smooth bg-neutral-900 text-neutral-200 antialiased`}
    >
      <Header />
      <div className="mt-14 flex flex-1 flex-col">{children}</div>
      <footer className="bg-neutral-950 p-2 text-center">
        &copy; Walker Marlatt 2025
      </footer>
    </div>
  );
}
