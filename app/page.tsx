import Link from "next/link";

export default function Home() {
  return (
    <main className="mx-auto flex max-w-2xl flex-1 flex-col gap-6 px-8 py-16">
      <h1 className="text-3xl font-bold text-black dark:text-zinc-50">
        안녕하세요, 유시우입니다. 🤴
      </h1>
      
<p className="text-lg font-medium text-black dark:text-zinc-50">
  제 포트폴리오에 오신 것을 환영합니다~
</p>
<p className="leading-7 text-zinc-700 dark:text-zinc-300">
        웹프로그래밍을 배우면서 직접 만든 것들을 이 포트폴리오에 모았습니다.</p>
        <section className="flex flex-col gap-2  dark:border-white/[.145]">
        
        <p className="text-sm leading-6 text-zinc-500 dark:text-zinc-400">
          편하게 둘러봐 주세요. 상단 메뉴에서 소개,프로젝트,방명록을 볼 수 있어요.
        </p>
        <p className="text-sm leading-6 text-zinc-500 dark:text-zinc-400">
          방명록에 하고 싶은 말도 남겨주세요!
        </p>
      </section>
    </main>
  );
}
