import { getProjects } from "@/lib/projects"
import { LikeButton } from "@/components/LikeButton"
import Link from "next/link"

export default async function ProjectsPage() {
  const projects = await getProjects()

  return (
    <div className="mx-auto max-w-2xl flex-1 px-8 py-16">
      <h1 className="mb-8 border-l-4 border-amber-500 pl-3 text-2xl font-semibold text-black dark:text-zinc-50">
        프로젝트
      </h1>
      <ul className="flex flex-col gap-4">
        {projects.map((p) => (
          <li key={p.id} className="flex items-center gap-3">
            <Link
              href={`/projects/${p.id}`}
              className="block flex-1 rounded-lg border border-black/[.08] px-5 py-4 transition-colors hover:border-amber-300 hover:shadow-sm dark:border-white/[.145] dark:hover:bg-white/[.05]"
            >
              <p className="font-medium text-black dark:text-zinc-50">{p.name}</p>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">{p.description}</p>
            </Link>
            <LikeButton id={p.id} initialLikes={p.likes} />
          </li>
        ))}
      </ul>
      <Link href="/" className="mt-8 inline-block text-sm text-zinc-500 hover:underline">
        ← Home으로 이동하기
      </Link>
    </div>
  )
}