'use client';

import Link from 'next/link';
import { useState } from 'react';
import {
  Asterisk,
  CodeSlash,
  List,
  MusicNoteBeamed,
  Send,
  XLg,
} from 'react-bootstrap-icons';

export default function Header() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const paths = [
    {
      href: '/showcase',
      text: 'Showcase',
      icon: <Asterisk className="text-neutral-400" />,
    },
    {
      href: '/stack',
      text: 'Tech Stack',
      icon: <CodeSlash className="text-neutral-400" />,
    },
    {
      href: '/music',
      text: 'Music',
      icon: <MusicNoteBeamed className="text-neutral-400" />,
    },
    {
      href: '/contact',
      text: 'Contact',
      icon: <Send className="text-neutral-400" />,
    },
  ];

  return (
    <header className="z-20 flex justify-between px-4 py-2 md:items-center">
      <Link
        className="font-mono text-3xl font-bold hover:text-emerald-200 md:mr-7"
        href="/"
      >
        Walker Marlatt
      </Link>
      <div className="hidden gap-6 text-lg lg:flex">
        {paths.map((item) => {
          return (
            <Link
              className="flex items-center gap-1.5 hover:text-emerald-200"
              key={item.href}
              href={item.href}
            >
              {item.icon}
              {item.text}
            </Link>
          );
        })}
      </div>
      <div className="flex flex-col items-end lg:hidden">
        <button type="button" onClick={() => setMenuIsOpen((cur) => !cur)}>
          {menuIsOpen ? (
            <XLg className="size-8" />
          ) : (
            <List className="size-8" />
          )}
        </button>
        {menuIsOpen && (
          <div className="absolute right-0 top-12 flex w-full flex-col items-end gap-y-3 bg-neutral-950 px-5 py-2 text-lg">
            {paths.map((item) => {
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center gap-2"
                >
                  {item.text}
                  {item.icon}
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </header>
  );
}
