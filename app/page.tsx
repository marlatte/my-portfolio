import DotField from './ui/dots';

export default function Home() {
  return (
    <div className="grid flex-1 place-content-center bg-zinc-900">
      <DotField />
      <div className="z-10 px-5 text-center [text-shadow:1px_1px_5px_black;]">
        <h1 className="text-4xl md:text-5xl lg:text-6xl">
          Hello, I&apos;m{' '}
          <span className="font-medium text-emerald-500">Walker</span>.
        </h1>
        <p className="text-2xl md:text-3xl lg:text-4xl">
          I&apos;m a full-stack software developer.
        </p>
      </div>
    </div>
  );
}
