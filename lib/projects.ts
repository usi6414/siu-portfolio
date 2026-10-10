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
    name: "웹프로그래밍 기말 포트폴리오",
    description: "HTML, CSS, JavaScript로 만든 첫 개인 포트폴리오 사이트",
    detail:
      "웹프로그래밍 수업에서 HTML, CSS, JavaScript를 파일별로 나누어 작성했습니다. GitHub에 올리고 Vercel로 배포했습니다.",
    tech: "HTML, CSS, JavaScript, Git/GitHub, Vercel",
    link: "https://github.com/usi6414/final-portfolio",
  },
  {
    id: "2",
    name: "공지사항 게시판",
    description: "Next.js와 MongoDB를 연동한 게시판 실습",
    detail:
      "웹서버보안프로그래밍 수업에서 만든 게시판입니다. 글 목록과 상세 페이지, 글쓰기를 만들었고 데이터는 MongoDB에 저장했습니다.",
    tech: "Next.js, React, Mongoose, MongoDB, Tailwind CSS",
    link: "https://github.com/usi6414/my-app2",
  },
  {
    id: "3",
    name: "보안자료구조 실습",
    description: "큐, 트리, 그래프 알고리즘 구현 연습",
    detail:
      "원형 큐, 트리 순회, 그래프 탐색(DFS/BFS), 최소 신장 트리(Kruskal, Prim), 최단 경로(Dijkstra)를 C 스타일 코드로 공부했습니다.",
    tech: "C, 자료구조, 알고리즘",
    link: "https://github.com/usi6414",
  },
]

export async function getProjects(): Promise<Project[]> {
  return projects
}

export async function getProject(id: string): Promise<Project | undefined> {
  return projects.find((p) => p.id === id)
}
