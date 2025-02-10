import DotField from "./ui/dots";

export default function Home() {
  return (
    <div className="grid flex-1 place-content-center bg-zinc-900">
      <h1 className="text-center text-7xl font-bold">
        Hello, I&apos;m Walker.
      </h1>
      <p className="text-center text-2xl">
        I&apos;m a full-stack software developer.
      </p>
      <DotField />
    </div>
  );
}
