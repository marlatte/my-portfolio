import React from 'react';

import { Header } from './Header';

type User = {
  name: string;
};

export const Page: React.FC = () => {
  const [user, setUser] = React.useState<User>();

  return (
    <article>
      <Header
        user={user}
        onLogin={() => setUser({ name: 'Jane Doe' })}
        onLogout={() => setUser(undefined)}
        onCreateAccount={() => setUser({ name: 'Jane Doe' })}
      />

      <section className="mx-auto flex max-w-xl flex-col gap-4 px-5 py-12 text-base leading-6 text-gray-200">
        <h2 className="text-3xl font-bold leading-none">Pages in Storybook</h2>
        <p>
          We recommend building UIs with a{' '}
          <a
            href="https://componentdriven.org"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2"
          >
            <strong>component-driven</strong>
          </a>{' '}
          process starting with atomic components and ending with pages.
        </p>
        <p>
          Render pages with mock data. This makes it easy to build and review
          page states without needing to navigate to them in your app. Here are
          some handy patterns for managing page data in Storybook:
        </p>
        <ul className="flex list-disc flex-col gap-2 pl-8">
          <li className="pl-2">
            Use a higher-level connected component. Storybook helps you compose
            such data from the &quot;args&quot; of child component stories
          </li>
          <li className="pl-2">
            Assemble data in the page component from your services. You can mock
            these services out using Storybook.
          </li>
        </ul>
        <p>
          Get a guided tutorial on component-driven development at{' '}
          <a
            href="https://storybook.js.org/tutorials/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Storybook tutorials
          </a>
          . Read more in the{' '}
          <a
            href="https://storybook.js.org/docs"
            target="_blank"
            rel="noopener noreferrer"
          >
            docs
          </a>
          .
        </p>
        <div className="tip-wrapper my-10">
          <span className="mr-3 inline-block rounded-lg bg-emerald-50 px-3 py-1 align-top text-xs font-bold leading-none text-emerald-700">
            Tip
          </span>{' '}
          Adjust the width of the canvas with the{' '}
          <span className="inline-flex items-center gap-1">
            <svg
              viewBox="0 0 12 12"
              xmlns="http://www.w3.org/2000/svg"
              className="inline-block size-3 fill-blue-500 align-top"
            >
              <g fillRule="evenodd">
                <path
                  d="M1.5 5.2h4.8c.3 0 .5.2.5.4v5.1c-.1.2-.3.3-.4.3H1.4a.5.5 0 01-.5-.4V5.7c0-.3.2-.5.5-.5zm0-2.1h6.9c.3 0 .5.2.5.4v7a.5.5 0 01-1 0V4H1.5a.5.5 0 010-1zm0-2.1h9c.3 0 .5.2.5.4v9.1a.5.5 0 01-1 0V2H1.5a.5.5 0 010-1zm4.3 5.2H2V10h3.8V6.2z"
                  id="a"
                />
              </g>
            </svg>
            Viewports
          </span>{' '}
          addon in the toolbar
        </div>
      </section>
    </article>
  );
};
