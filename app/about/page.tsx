import Link from "next/link";

const skills = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "MongoDB (Mongoose)",
  "Auth.js",,
  
];

const contacts = [
  { 
    label: "GitHub",
    text: "GitHub 구경가기",
    href: "https://github.com/usi6414",
    
  },
  {
    label: "블로그",
    text: "블로그 구경가기",
    href: "https://blog.naver.com/yhjk5620",
  },
];

export default function AboutPage() {
  return (
    <div className="mx-auto flex max-w-2xl flex-1 flex-col gap-8 px-8 py-16">
      <h1 className="border-l-4 border-amber-500 pl-3 text-2xl font-semibold text-black dark:text-zinc-50">
        소개
      </h1>

      <section className="flex flex-col gap-3">
        <h2 className="text-lg font-medium text-black dark:text-zinc-50">기본 정보</h2>
        <div className="flex flex-col gap-2 rounded-lg border border-black/[.08] px-5 py-4 dark:border-white/[.145]">
          <p className="text-zinc-700 dark:text-zinc-300">
            <span className="mr-3 text-sm text-zinc-500 dark:text-zinc-400">이름</span>
            유시우
          </p>
          <p className="text-zinc-700 dark:text-zinc-300">
            <span className="mr-3 text-sm text-zinc-500 dark:text-zinc-400">학년</span>
            대학교 2학년
          </p>
        </div>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-lg font-medium text-black dark:text-zinc-50">배우고 있는 것</h2>
        <ul className="flex flex-wrap gap-2 text-sm text-zinc-700 dark:text-zinc-300">
          {skills.map((s) => (
            <li
              key={s}
              className="rounded-md border border-black/[.08] px-3 py-1 transition-colors hover:border-amber-300 hover:bg-amber-50 dark:border-white/[.145] dark:hover:bg-amber-950/30"
            >
              {s}
            </li>
          ))}
        </ul>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-lg font-medium text-black dark:text-zinc-50">연락처</h2>
        <ul className="flex flex-col gap-3">
          {contacts.map((c) => (
            <li key={c.label}>
              <a
                href={c.href}
                className="block rounded-lg border border-black/[.08] px-5 py-4 transition-colors hover:border-amber-300 hover:bg-amber-50 hover:shadow-sm dark:border-white/[.145] dark:hover:bg-amber-950/30"
              >
                <p className="font-medium text-black dark:text-zinc-50">{c.text}</p>
              </a>
            </li>
          ))}
        </ul>
      </section>

      <Link href="/" className="text-sm text-zinc-500 hover:underline">
        ← Home으로 이동하기
      </Link>
    </div>
  );
}