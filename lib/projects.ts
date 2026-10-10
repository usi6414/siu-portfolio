export type Project = {
  id: string
  name: string
  description: string
  detail: string
  tech: string
  link: string
}

const projects: Project[] = [
  {
    id: "1",
    name: "이번 학기에 배운 것들을 정리",
    description: "Next.js와 MongoDB를 연동한 게시판 실습",
    detail:
      "웹서버보안프로그래밍 수업에서 만든 게시판입니다. 글 목록과 상세 페이지, 글쓰기를 만들었고 데이터는 MongoDB에 저장했습니다.",
    tech: "Next.js, React, Mongoose, MongoDB, Tailwind CSS",
    link: "https://github.com/usi6414/my-app2",
  },
]

export async function getProjects(): Promise<Project[]> {
  return projects
}

export async function getProject(id: string): Promise<Project | undefined> {
  return projects.find((p) => p.id === id)
}