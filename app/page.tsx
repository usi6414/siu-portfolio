import Link from "next/link";
import { getGuestbooks } from "@/lib/guestbook";

export default async function Home() {

  const guestbooks = (await getGuestbooks()).slice(0, 3)

  return (
    <main className="mx-auto flex max-w-2xl flex-1 flex-col gap-8 px-8 py-16">
      <section className="flex flex-col gap-4 rounded-xl bg-amber-50 px-6 py-8 dark:bg-amber-950/30">
        <h1 className="text-3xl font-bold text-black dark:text-zinc-50">
          안녕하세요, 유시우입니다. 🤴
        </h1>
        <div className="h-1 w-12 rounded bg-amber-500" />
        <p className="leading-7 text-zinc-700 dark:text-zinc-300">
          웹프로그래밍을 배우면서 직접 만든 것들을 이 포트폴리오에 모았습니다.
        </p>
      </section>

      <section className="flex flex-col gap-2 rounded-lg border border-l-4 border-black/[.08] border-l-amber-500 px-5 py-4 dark:border-white/[.145] dark:border-l-amber-500">
        <p className="text-lg font-medium text-black dark:text-zinc-50">
          환영합니다.
        </p>
        <p className="text-sm leading-6 text-zinc-500 dark:text-zinc-400">
          편하게 둘러봐 주세요. 상단 메뉴에서 소개, 프로젝트, 방명록을 볼 수 있어요.
        </p>
        <p className="text-sm leading-6 text-zinc-500 dark:text-zinc-400">
          방명록에 하고 싶은 말도 남겨주세요~
        </p>
      </section>
            <section className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-medium text-black dark:text-zinc-50">최근 방명록</h2>
          <Link
            href="/guestbook"
            className="text-sm text-zinc-500 hover:underline dark:text-zinc-400"
          >
            더 보기 →
          </Link>
        </div>
        {guestbooks.length === 0 ? (
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            아직 방명록이 없어요. 첫 글을 남겨주세요!
          </p>
        ) : (
          <ul className="flex flex-col gap-3">
            {guestbooks.map((g) => (
              <li
                key={g.id}
                className="rounded-lg border border-black/[.08] px-5 py-4 shadow-sm dark:border-white/[.145]"
              >
                <p className="whitespace-pre-wrap text-black dark:text-zinc-50">{g.content}</p>
                <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
                  {g.author} · {g.createdAt}
                </p>
              </li>
            ))}
          </ul>
        )}
      </section>
    </main>
    
  );
}