import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="mx-auto flex max-w-2xl flex-1 flex-col gap-6 px-8 py-16">
      <h1 className="text-2xl font-semibold text-black dark:text-zinc-50">소개</h1>

      <section className="flex flex-col gap-2">
        <h2 className="text-lg font-medium text-black dark:text-zinc-50">기본 정보</h2>
        <p className="text-zinc-700 dark:text-zinc-300">이름: 유시우</p>
        <p className="text-zinc-700 dark:text-zinc-300">학년: 대학교 2학년 (IT 전공)</p>
      </section>

      <section className="flex flex-col gap-2">
        <h2 className="text-lg font-medium text-black dark:text-zinc-50">배우고 있는 것</h2>
        <ul className="list-disc pl-5 text-zinc-700 dark:text-zinc-300">
          <li>HTML, CSS, JavaScript</li>
          <li>Next.js, React</li>
          <li>MongoDB (Mongoose)</li>
          <li>Git, GitHub, Vercel 배포</li>
          <li>C 언어 기반 자료구조와 알고리즘</li>
        </ul>
      </section>

      <section className="flex flex-col gap-2">
        <h2 className="text-lg font-medium text-black dark:text-zinc-50">연락처</h2>
        <p className="text-zinc-700 dark:text-zinc-300">
          GitHub:{" "}
          <a
            href="https://github.com/usi6414"
            className="underline underline-offset-4"
          >
            github.com/usi6414
          </a>
        </p>
        <p className="text-zinc-700 dark:text-zinc-300">
          블로그:{" "}
          <a
            href="https://blog.naver.com/yhjk5620"
            className="underline underline-offset-4"
          >
            blog.naver.com/yhjk5620
          </a>
        </p>
      </section>

      <Link href="/" className="text-sm text-zinc-500 hover:underline">
        ← Home으로 이동하기
      </Link>
    </div>
  );
}
