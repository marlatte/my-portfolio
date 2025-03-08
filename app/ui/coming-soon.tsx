export default function ComingSoon({ pageName }: { pageName: string }) {
  return (
    <div className="grid flex-1 place-content-center bg-zinc-900 p-1 text-center">
      <h1 className="text-5xl">{pageName}</h1>
      <p className="text-3xl">Coming Soon</p>
    </div>
  );
}
