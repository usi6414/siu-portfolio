import Link from "next/link";

export default function Home() {
  return (
    <main className="mx-auto flex max-w-2xl flex-1 flex-col gap-6 px-8 py-16">
      <h1 className="text-3xl font-bold text-black dark:text-zinc-50">
        안녕하세요, 유시우입니다.
      </h1>
      <p className="leading-7 text-zinc-700 dark:text-zinc-300">
        IT 분야를 공부하고 있는 대학교 2학년입니다. 웹프로그래밍과 자료구조를
        배우면서 직접 만든 것들을 이 포트폴리오에 모았습니다.
      </p>

      <div className="flex flex-col gap-2">
        <Link
          href="/about"
          className="font-medium text-zinc-950 underline underline-offset-4 dark:text-zinc-50"
        >
          /about 소개 보러가기
        </Link>
        <Link
          href="/projects"
          className="font-medium text-zinc-950 underline underline-offset-4 dark:text-zinc-50"
        >
          /projects 프로젝트 보러가기
        </Link>
        <Link
          href="/guestbook"
          className="font-medium text-zinc-950 underline underline-offset-4 dark:text-zinc-50"
        >
          /guestbook 방명록 남기기
        </Link>
      </div>
    </main>
  );
}
