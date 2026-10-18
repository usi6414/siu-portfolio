import { getGuestbooks } from "@/lib/guestbook";
import Link from "next/link";

export default async function GuestbookPage() {
  const guestbooks = await getGuestbooks()

  return (
    <div className="mx-auto max-w-2xl flex-1 px-8 py-16">
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-black dark:text-zinc-50  border-l-4 border-amber-500 pl-3">방명록</h1>
        <Link
          href="/guestbook/new"
          className="text-sm font-medium text-zinc-950 underline underline-offset-4 dark:text-zinc-50"
        >
          + 새 글 작성
        </Link>
      </div>
      <ul className="flex flex-col gap-4">
        {guestbooks.map((g) => (
          <li
            key={g.id}
            className="rounded-lg border border-black/[.08] px-5 py-4 dark:border-white/[.145]  shadow-sm"
          >
            <p className="whitespace-pre-wrap text-black dark:text-zinc-50">{g.content}</p>
            <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
              {g.author} · {g.createdAt}
            </p>
          </li>
        ))}
      </ul>
      <Link href="/" className="mt-8 inline-block text-sm text-zinc-500 hover:underline">
        ← Home으로 이동하기
      </Link>
    </div>
  )
}
