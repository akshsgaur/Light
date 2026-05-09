import Link from "next/link";

export function EmptyState({ title, text, href, action }: { title: string; text: string; href?: string; action?: string }) {
  return (
    <div className="card rounded-[2rem] p-8 text-center">
      <h2 className="text-2xl font-semibold">{title}</h2>
      <p className="mx-auto mt-3 max-w-xl text-secondary">{text}</p>
      {href && action ? (
        <Link href={href} className="mt-6 inline-flex rounded-full bg-teal px-5 py-3 text-sm font-semibold text-white">
          {action}
        </Link>
      ) : null}
    </div>
  );
}
