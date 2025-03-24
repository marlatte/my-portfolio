'use client';

import clsx from 'clsx';
import { useState } from 'react';
import { ChevronDown } from 'react-bootstrap-icons';
import TextLink from './text-link';

export default function Contents({ sections }: { sections: string[] }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleContents = () => setIsOpen((cur) => !cur);
  const closeContents = () => setIsOpen(false);

  return (
    <>
      <div
        className={clsx('transition-all lg:hidden', {
          'h-8': !isOpen,
        })}
      >
        <button
          type="button"
          onClick={toggleContents}
          className="flex cursor-pointer items-center gap-2 hover:text-white"
        >
          <h2 className="text-xl">Contents</h2>
          <ChevronDown
            className={clsx('size-4 transition duration-300', {
              'rotate-180': isOpen,
            })}
          />
        </button>
        <div
          className={clsx('mobile-dropdown flex flex-col gap-2', {
            open: isOpen,
          })}
        >
          {sections.map((title) => (
            <TextLink
              key={title}
              onClick={closeContents}
              href={`#${title.split(' ').join('')}`}
            >
              {title}
            </TextLink>
          ))}
        </div>
      </div>
      <div className="sticky top-16 hidden h-fit pl-4 lg:block">
        <h2 className="text-xl">Contents</h2>
        <div className="flex min-w-32 flex-col gap-2">
          {sections.map((title) => (
            <TextLink
              key={title}
              onClick={closeContents}
              href={`#${title.split(' ').join('')}`}
            >
              {title}
            </TextLink>
          ))}
        </div>
      </div>
    </>
  );
}
