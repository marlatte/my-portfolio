import Heading from '@/components/ui/styled-heading';
import Skill from '@/components/ui/tech-skill';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tech Stack',
};

export default function Stack() {
  // TODO: Split into comforts, familiarities, and future plans
  const logos = [
    {
      name: 'TypeScript',
      logo: 'typescript.svg',
      href: 'https://www.typescriptlang.org/',
    },
    {
      name: 'JavaScript',
      logo: 'javascript.svg',
      href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    },
    { name: 'Python', logo: 'python.svg', href: 'https://www.python.org/' },
    { name: 'Node.js', logo: 'node-js.svg', href: 'https://nodejs.org' },
    { name: 'React', logo: 'react.svg', href: 'https://react.dev' },
    { name: 'Next.js', logo: 'next-js.svg', href: 'https://nextjs.org/' },
    {
      name: 'React Router',
      logo: 'react-router.svg',
      href: 'https://reactrouter.com/',
    },
    {
      name: 'Storybook',
      logo: 'storybook.svg',
      href: 'https://storybook.js.org/',
    },
    { name: 'Figma', logo: 'figma.svg', href: 'https://www.figma.com/' },
    { name: 'Webpack', logo: 'webpack.svg', href: 'https://webpack.js.org/' },
    { name: 'Vite', logo: 'vite.svg', href: 'https://vite.dev/' },
    { name: 'Vitest', logo: 'vitest.svg', href: 'https://vitest.dev/' },
    { name: 'Jest', logo: 'jest.svg', href: 'https://jestjs.io/' },
    { name: 'Git', logo: 'git.svg', href: 'https://git-scm.com/' },
    { name: 'GitHub', logo: 'github.svg', href: 'https://github.com' },
    {
      name: 'Azure Devops',
      logo: 'devops.svg',
      href: 'https://azure.microsoft.com/en-us/products/devops',
    },
    {
      name: 'VS Code',
      logo: 'vs-code.svg',
      href: 'https://code.visualstudio.com/',
    },
    {
      name: 'PostgreSQL',
      logo: 'postgres.svg',
      href: 'https://www.postgresql.org/',
    },
    {
      name: 'HTML',
      logo: 'html.svg',
      href: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
    },
    {
      name: 'CSS',
      logo: 'css.svg',
      href: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
    },
    {
      name: 'TailwindCSS',
      logo: 'tailwind.svg',
      href: 'https://tailwindcss.com/',
    },
    { name: 'Vercel', logo: 'vercel.svg', href: 'https://vercel.com/home' },
    { name: 'Netlify', logo: 'netlify.svg', href: 'https://www.netlify.com/' },
  ];
  return (
    <div className="flex flex-col items-center gap-7 px-4 py-7">
      <Heading level={1} className="pt-5">
        Tech Stack
      </Heading>
      <p className="max-w-4xl text-center text-xl text-pretty">
        The tools I&apos;m most familiar with.
      </p>
      <div className="flex max-w-[1554px] flex-wrap justify-center gap-7">
        {logos.map(({ name, logo, href }) => (
          <div
            className="flex min-w-28 flex-col items-center border-amber-600"
            key={name}
          >
            <Skill
              showName={false}
              {...{ href }}
              {...{ name }}
              src={`/logos/${logo}`}
            />
            <p className="pt-2">{name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

/*
  figma
  jest
  next
  node
  postgres
  react
  typescript
  javascript
  react router
  storybook
  webpack
  vite
  vitest
  vercel
  html
  css
  tailwind
  git
  github
  azure devops
  vscode
  python


*/
