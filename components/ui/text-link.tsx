import Link from 'next/link';
import { MouseEventHandler } from 'react';

export default function TextLink({
  href,
  children,
  external = false,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  external?: boolean;
  onClick?: MouseEventHandler;
}) {
  return (
    <Link
      {...{ href, onClick }}
      target={external ? '_blank' : '_self'}
      className="text-sky-300 underline underline-offset-2 hover:text-sky-400"
    >
      {children}
    </Link>
  );
}
