import Heading from '../ui/styled-heading';
import Skill from '../ui/tech-skill';
import TextLink from '../ui/text-link';

export default function About() {
  return (
    <section className="flex flex-col gap-5 px-6 py-14 xl:min-h-[90dvh]">
      <Heading level={2} id="about" className="mb-4 scroll-m-20">
        About
      </Heading>
      <div className="flex flex-1 flex-col-reverse items-center justify-evenly gap-x-10 gap-y-6 md:px-10 lg:flex-row">
        <div className="flex max-w-xl flex-col gap-4 text-lg md:text-2xl">
          <p>
            I&apos;m a professional web developer and public servant with broad
            experience across the startup, nonprofit, education, and private
            sectors. I built my first full-stack web app 1 year after learning
            to code.{' '}
            <TextLink href="/showcase">Check out my past work</TextLink>.
          </p>
          <p>
            While I work mostly in the JavaScript ecosystem (React, TypeScript,
            Jest, Node, etc.), I am looking to grow my Python capabilities. As a
            lifelong learner, I am always adding{' '}
            <TextLink href="/stack">tools to my tool belt</TextLink>.
          </p>
        </div>
        <div className="flex justify-center">
          <div className="flex items-center gap-1 lg:gap-5">
            <div className="flex flex-col gap-3 lg:gap-7">
              <Skill
                name="Node.js"
                src="logos/node-js.svg"
                href="https://nodejs.org/en"
              />
              <Skill
                name="Next.js"
                src="logos/next-js.svg"
                href="https://nextjs.org/"
              />
            </div>
            <div className="flex flex-col gap-3 lg:gap-7">
              <Skill
                name="TypeScript"
                src="logos/typescript.svg"
                href="https://www.typescriptlang.org/"
              />
              <Skill
                name="React"
                src="logos/react.svg"
                href="https://react.dev/"
              />
              <Skill
                name="PostgreSQL"
                src="logos/postgres.svg"
                href="https://www.postgresql.org/"
              />
            </div>
            <div className="flex flex-col gap-3 lg:gap-7">
              <Skill
                name="Figma"
                src="logos/figma.svg"
                href="https://www.figma.com/"
              />
              <Skill
                name="Jest"
                src="logos/jest.svg"
                href="https://jestjs.io/"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
