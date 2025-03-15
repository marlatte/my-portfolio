'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { useState } from 'react';
import {
  Asterisk,
  CodeSlash,
  Github,
  Linkedin,
  List,
  MusicNoteBeamed,
  Send,
  XLg,
} from 'react-bootstrap-icons';

function Socials() {
  return (
    <div className="ml-4 flex items-center gap-4">
      <Link
        target="_blank"
        href="https://github.com/marlatte"
        className="text-neutral-400 hover:text-neutral-300"
      >
        <span className="sr-only">Github</span>
        <Github className="size-6" />
      </Link>
      <Link
        target="_blank"
        href="https://linkedin.com/in/walkermarlatt"
        className="text-neutral-400 hover:text-neutral-300"
      >
        <span className="sr-only">LinkedIn</span>
        <Linkedin className="size-6" />
      </Link>
    </div>
  );
}

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
    <header className="fixed z-30 flex h-14 w-full items-center justify-between bg-neutral-950 px-5 py-2">
      <Link
        className="font-mono text-2xl font-bold hover:text-emerald-200 lg:text-3xl"
        href="/"
      >
        Walker Marlatt
      </Link>
      <div className="hidden items-center gap-6 text-lg lg:flex">
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
        <Socials />
      </div>
      <div className="flex lg:hidden">
        <button
          type="button"
          onClick={() => setMenuIsOpen((cur) => !cur)}
          className="relative active:text-indigo-300"
        >
          <span className="sr-only">Menu</span>
          <XLg
            className={clsx('absolute size-8 scale-0 transition', {
              'scale-100': menuIsOpen,
            })}
          />
          <List
            className={clsx('size-8 transition', {
              'scale-0': menuIsOpen,
            })}
          />
        </button>
        <div
          className={clsx(
            'mobile-dropdown absolute top-12 right-0 flex w-full flex-col items-end gap-y-3 bg-neutral-950 px-5 pt-2 pb-4 text-lg',
            { open: menuIsOpen },
          )}
        >
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
          <div className="mr-7">
            <Socials />
          </div>
        </div>
      </div>
    </header>
  );
}
