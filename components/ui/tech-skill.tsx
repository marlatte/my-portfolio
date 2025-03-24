import Image from 'next/image';
import Link from 'next/link';

export default function Skill({
  name,
  src,
  href,
  showName = true,
}: {
  name: string;
  src: string;
  href: string;
  showName?: boolean;
}) {
  return (
    <Link
      {...{ href }}
      target="_blank"
      className="flex size-24 flex-col items-center justify-center gap-1 rounded-full border-2 border-indigo-400 ring-neutral-100 ring-offset-3 ring-offset-neutral-800 transition outline-none hover:bg-indigo-600/10 focus:bg-indigo-600/10 focus:ring-2 sm:size-28 lg:size-36"
    >
      <Image
        alt={`${name} logo`}
        width={100}
        height={100}
        className="size-11 lg:size-16"
        {...{ src }}
      />
      {showName ? (
        <p className="hidden text-xs sm:block lg:text-base">{name}</p>
      ) : (
        <span className="sr-only">{name}</span>
      )}
    </Link>
  );
}
