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

  return (
    <div className="mx-auto flex max-w-2xl flex-1 flex-col gap-4 px-8 py-16">
      <Link href="/projects" className="text-sm text-zinc-500 hover:underline">
        ← 목록으로
      </Link>
      <h1 className="text-2xl font-semibold text-black dark:text-zinc-50  border-l-4 border-amber-500 pl-3">{project.name}</h1>
      <p className="text-sm text-zinc-500 dark:text-zinc-400">사용 기술: {project.tech}</p>
      <p className="leading-7 text-zinc-700 dark:text-zinc-300">{project.detail}</p>
            <section className="flex flex-col gap-2">
        <h2 className="text-lg font-medium text-black dark:text-zinc-50">배운 내용</h2>
        <ul className="list-disc pl-5 leading-7 text-zinc-700 dark:text-zinc-300">
          {project.learned.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="flex flex-col gap-2">
        <h2 className="text-lg font-medium text-black dark:text-zinc-50">느낀 점</h2>
        <p className="leading-7 text-zinc-700 dark:text-zinc-300">{project.review}</p>
      </section>
      <a
        href={project.link}
        className="text-sm font-medium text-zinc-950 underline underline-offset-4 dark:text-zinc-50"
      >
        GitHub에서 보기
      </a>
    </div>
  )
}
