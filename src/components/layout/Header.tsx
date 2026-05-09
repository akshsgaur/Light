import Link from "next/link";

export function Header() {
  return (
    <header className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-6">
      <Link href="/" className="flex items-center gap-3">
        <span className="grid h-10 w-10 place-items-center rounded-2xl bg-teal text-lg font-semibold text-white">L</span>
        <span>
          <span className="block text-lg font-semibold tracking-tight">Light</span>
          <span className="block text-xs text-secondary">Trial matching with context</span>
        </span>
      </Link>
      <nav className="hidden items-center gap-5 text-sm text-secondary md:flex">
        <Link href="/profile">Profile</Link>
        <Link href="/matches">Matches</Link>
        <Link href="/saved">Saved</Link>
      </nav>
    </header>
  );
}
