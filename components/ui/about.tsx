import Image from 'next/image';
import Link from 'next/link';

function Skill({
  name,
  src,
  href,
}: {
  name: string;
  src: string;
  href: string;
}) {
  return (
    <Link
      {...{ href }}
      className="flex size-24 flex-col items-center justify-center gap-1 rounded-full border-2 border-indigo-400 transition hover:bg-indigo-600/10 sm:size-28 lg:size-36"
    >
      <Image
        alt={`${name} logo`}
        width={100}
        height={100}
        className="size-11 lg:size-16"
        {...{ src }}
      />
      <p className="hidden text-xs sm:block lg:text-base">{name}</p>
    </Link>
  );
}

export default function About() {
  return (
    <section className="flex flex-col gap-5 px-5 py-10">
      <h2 id="about" className="mb-3 text-center text-4xl">
        <span className="relative inline-block px-3 before:absolute before:-inset-1 before:block before:-skew-y-3 before:bg-indigo-700">
          <span className="relative text-white">About</span>
        </span>
      </h2>
      <div className="flex flex-col items-center justify-evenly gap-10 md:flex-row">
        <div className="flex max-w-xl flex-col gap-4 text-lg md:text-2xl">
          <p>
            I&apos;m a professional web developer and public servant with broad
            experience across the startup, nonprofit, education, and private
            sectors. I built my first full-stack web app 1 year after learning
            to code. As a lifelong learner, I am always adding{' '}
            <Link
              href="/stack"
              className="text-sky-500 underline underline-offset-2 hover:text-sky-600"
            >
              tools to my tool belt
            </Link>
            .
          </p>
          <p>
            While I work mostly in the JavaScript ecosystem (think React,
            TypeScript, Jest, Node, etc.), I am looking to grow my Python
            capabilities.
          </p>
        </div>
        <div className="flex justify-center">
          <div className="flex items-center gap-1 lg:gap-5">
            <div className="flex flex-col gap-3 lg:gap-7">
              <Skill
                name="Node.js"
                src="/node-js-logo.svg"
                href="https://nodejs.org/en"
              />
              <Skill
                name="Next.js"
                src="/next-js-logo.svg"
                href="https://nextjs.org/"
              />
            </div>
            <div className="flex flex-col gap-3 lg:gap-7">
              <Skill
                name="TypeScript"
                src="/typescript-logo.svg"
                href="https://www.typescriptlang.org/"
              />
              <Skill
                name="React"
                src="/react-logo.svg"
                href="https://react.dev/"
              />
              <Skill
                name="PostgreSQL"
                src="/postgres-logo.svg"
                href="https://www.postgresql.org/"
              />
            </div>
            <div className="flex flex-col gap-3 lg:gap-7">
              <Skill
                name="Figma"
                src="/figma-logo.svg"
                href="https://www.figma.com/"
              />
              <Skill
                name="Jest"
                src="/jest-logo.svg"
                href="https://jestjs.io/"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
