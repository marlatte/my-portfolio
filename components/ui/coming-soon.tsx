export default function ComingSoon({ pageName }: { pageName: string }) {
  return (
    <div className="grid flex-1 place-content-center bg-zinc-900 p-5 text-center">
      <p className="mb-5 text-5xl">&#128679;</p>
      <h1 className="mb-2 text-5xl">{pageName}</h1>
      <p className="text-3xl">Under Construction</p>
    </div>
  );
}
