import Link from 'next/link';

export default function TextLink({
  href,
  children,
  external = false,
}: {
  href: string;
  children: React.ReactNode;
  external?: boolean;
}) {
  return (
    <Link
      {...{ href }}
      target={external ? '_blank' : '_self'}
      className="text-sky-300 underline underline-offset-2 hover:text-sky-400"
    >
      {children}
    </Link>
  );
}
