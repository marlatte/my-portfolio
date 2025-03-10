import { Montserrat } from 'next/font/google';
import '@/app/globals.css';
import Header from '../ui/header';

const montserrat = Montserrat({ subsets: ['latin'] });

export default function Root({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={`${montserrat.className} flex min-h-dvh flex-col antialiased`}
    >
      <Header />
      {children}
      <footer className="p-2 text-center">
        &copy; Walker Marlatt {new Date().getFullYear()}
      </footer>
    </div>
  );
}
