import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';

export default function ShowcaseEntry({
  title,
  subtitle,
  href,
  image,
  children,
}: {
  title: string;
  subtitle: string;
  href: string;
  image?: { src: string; alt: string };
  children: React.ReactNode;
}) {
  return (
    <div
      id={title.split(' ').join('')}
      className={clsx(
        'flex scroll-m-20 flex-col-reverse gap-5 rounded-lg bg-neutral-800 p-4 sm:p-7 xl:odd:flex-row xl:even:flex-row-reverse',
      )}
    >
      <div className="flex-1">
        <h2 className="text-3xl font-medium">
          <Link
            {...{ href }}
            target="_blank"
            className="underline decoration-1 underline-offset-4 hover:text-neutral-300"
          >
            {title}
          </Link>
        </h2>
        <p className="mb-2 text-lg font-medium">{subtitle}</p>
        {children}
      </div>
      {!!image && (
        <Link
          {...{ href }}
          target="_blank"
          className="block self-center shadow-md shadow-neutral-950 transition hover:brightness-110 hover:contrast-75 xl:self-start"
        >
          <Image
            alt={image.alt}
            src={image.src}
            width={400}
            height={300}
            className="h-auto w-xl rounded-lg border-2 border-neutral-300"
          />
        </Link>
      )}
    </div>
  );
}
