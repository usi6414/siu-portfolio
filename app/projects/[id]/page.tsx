import { notFound } from "next/navigation"
import { getProject } from "@/lib/projects"
import Link from "next/link"

type Props = { params: Promise<{ id: string }> }

export default async function ProjectDetailPage({ params }: Props) {
  const { id } = await params
  const project = await getProject(id)

  if (!project) {
    notFound()
  }

  const techs = project.tech
    .split(",")
    .map((t) => t.trim())
    .filter((t) => t)

  return (
    <div className="mx-auto flex max-w-2xl flex-1 flex-col gap-8 px-8 py-16">
      <Link href="/projects" className="text-sm text-zinc-500 hover:underline">
        ← 목록으로
      </Link>

      <section className="flex flex-col gap-4 rounded-xl bg-amber-50 px-6 py-8 dark:bg-amber-950/30">
        <h1 className="border-l-4 border-amber-500 pl-3 text-2xl font-semibold text-black dark:text-zinc-50">
          {project.name}
        </h1>
        <p className="leading-7 text-zinc-700 dark:text-zinc-300">{project.detail}</p>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-lg font-medium text-black dark:text-zinc-50">사용 기술</h2>
        <ul className="flex flex-wrap gap-2 text-sm text-zinc-700 dark:text-zinc-300">
          {techs.map((t) => (
            <li
              key={t}
              className="rounded-md border border-black/[.08] px-3 py-1 dark:border-white/[.145]"
            >
              {t}
            </li>
          ))}
        </ul>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-lg font-medium text-black dark:text-zinc-50">배운 내용</h2>
        <ul className="flex flex-col gap-2">
          {project.learned.map((item) => (
            <li
              key={item}
              className="rounded-lg border border-black/[.08] px-4 py-3 text-zinc-700 dark:border-white/[.145] dark:text-zinc-300"
            >
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-lg font-medium text-black dark:text-zinc-50">느낀 점</h2>
        <p className="rounded-lg border border-l-4 border-black/[.08] border-l-amber-500 px-5 py-4 leading-7 text-zinc-700 dark:border-white/[.145] dark:border-l-amber-500 dark:text-zinc-300">
          {project.review}
        </p>
      </section>

      <section className="flex flex-col gap-3">
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-md bg-zinc-900 px-4 py-3 text-center text-sm font-medium text-white transition-colors hover:bg-zinc-700 dark:bg-zinc-100 dark:text-black dark:hover:bg-zinc-300"
        >
          GitHub에서 보기
        </a>
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md border border-amber-400 px-4 py-3 text-center text-sm font-medium text-amber-700 transition-colors hover:bg-amber-50 dark:text-amber-400 dark:hover:bg-amber-950/30"
          >
            배포 사이트 바로가기
          </a>
        )}
      </section>
    </div>
  )
}