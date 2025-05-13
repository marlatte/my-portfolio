import { cn } from '@/lib/utils';
import Link from 'next/link';
import { MouseEventHandler } from 'react';

export default function TextLink({
  href,
  children,
  external = false,
  onClick,
  className,
}: {
  href: string;
  children: React.ReactNode;
  external?: boolean;
  onClick?: MouseEventHandler;
  className?: string;
}) {
  return (
    <Link
      {...{ href, onClick }}
      target={external ? '_blank' : '_self'}
      className={cn(
        'text-sky-300 underline underline-offset-2 hover:text-sky-400',
        className,
      )}
    >
      {children}
    </Link>
  );
}
