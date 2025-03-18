import clsx from 'clsx';

function Styled({ children }: { children: React.ReactNode }) {
  return (
    <span className="relative inline-block px-3 before:absolute before:-inset-1 before:block before:-skew-y-3 before:bg-indigo-700">
      <span className="relative text-white">{children}</span>
    </span>
  );
}

export default function Heading({
  level,
  id,
  className,
  children,
}: {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  id?: string;
  className?: string;
  children: React.ReactNode;
}) {
  const headings = {
    1: (
      <h1
        {...{ id }}
        className={clsx('text-center text-4xl font-medium', className)}
      >
        <Styled>{children}</Styled>
      </h1>
    ),
    2: (
      <h2
        {...{ id }}
        className={clsx('text-center text-4xl font-medium', className)}
      >
        <Styled>{children}</Styled>
      </h2>
    ),
    3: (
      <h3
        {...{ id }}
        className={clsx('text-center text-4xl font-medium', className)}
      >
        <Styled>{children}</Styled>
      </h3>
    ),
    4: (
      <h4
        {...{ id }}
        className={clsx('text-center text-4xl font-medium', className)}
      >
        <Styled>{children}</Styled>
      </h4>
    ),
    5: (
      <h5
        {...{ id }}
        className={clsx('text-center text-4xl font-medium', className)}
      >
        <Styled>{children}</Styled>
      </h5>
    ),
    6: (
      <h6
        {...{ id }}
        className={clsx('text-center text-4xl font-medium', className)}
      >
        <Styled>{children}</Styled>
      </h6>
    ),
  };

  return headings[level];
}
