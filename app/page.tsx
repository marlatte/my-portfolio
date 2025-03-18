import { ArrowDownShort } from 'react-bootstrap-icons';
import DotField from '../components/ui/dots';
import Link from 'next/link';
import About from '@/components/sections/about';

export default function Home() {
  return (
    <main className="flex-1">
      <section className="relative flex h-dvh flex-col justify-stretch bg-neutral-900">
        <DotField />
        <div className="absolute bottom-0 z-20 h-32 w-full bg-linear-to-t from-neutral-900 to-transparent" />
        <div className="flex-1" />
        <div className="z-10 px-5 text-center [text-shadow:1px_1px_5px_var(--color-neutral-950);]">
          <h1 className="text-4xl md:text-5xl lg:text-6xl">
            Hello, I&apos;m{' '}
            <span className="font-medium text-emerald-500">Walker</span>.
          </h1>
          <p className="mt-2 text-2xl md:text-3xl lg:text-4xl">
            I&apos;m a full-stack web developer.
          </p>
        </div>
        <div className="flex flex-1 items-start justify-center">
          <Link
            href="#about"
            className="cta mt-12 flex items-center gap-4 rounded-xl bg-indigo-950/60 px-4 py-2 font-medium text-indigo-300 ring-2 ring-indigo-600 backdrop-blur-[2px]"
          >
            <p className="text-xl">Learn more</p>
            <ArrowDownShort className="size-8" />
          </Link>
        </div>
      </section>
      <About />
    </main>
  );
}
