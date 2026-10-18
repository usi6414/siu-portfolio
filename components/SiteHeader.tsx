import Link from "next/link"

export function SiteHeader() {
  return (
    <header className="border-b border-black/[.08] shadow-sm dark:border-white/[.145]">
      <div className="mx-auto flex max-w-2xl items-center justify-between px-8 py-4">
        <Link href="/" className="text-sm font-semibold text-amber-600 dark:text-amber-400">
          유시우 포트폴리오
        </Link>
        <nav className="flex items-center gap-4 text-sm text-zinc-600 dark:text-zinc-400">
          <Link href="/about" className="hover:text-amber-600 dark:hover:text-amber-400">
            소개
          </Link>
          <Link href="/projects" className="hover:text-amber-600 dark:hover:text-amber-400">
            프로젝트
          </Link>
          <Link href="/guestbook" className="hover:text-amber-600 dark:hover:text-amber-400">
            방명록
          </Link>
          <Link
            href="/guestbook/new"
            className="rounded-md border border-black/[.08] px-3 py-1.5 hover:border-amber-400 hover:text-amber-600 dark:border-white/[.145] dark:hover:text-amber-400"
          >
            글쓰기
          </Link>
        </nav>
      </div>
    </header>
  )
}