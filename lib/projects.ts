export type Project = {
  id: string
  name: string
  description: string
  detail: string
  tech: string
  link: string
  learned: string[]
  review: string
    likes: number
      demo?: string
}

const projects: Project[] = [
  {
    id: "1",
    name: "공지사항 게시판 작성 및 등록",
    description: "Next.js와 MongoDB를 연동한 게시판 실습",
    detail:
      "웹서버보안프로그래밍 수업에서 만든 게시판입니다. 글 목록과 상세 페이지, 글쓰기를 만들었고 데이터는 MongoDB에 저장했습니다.",
    tech: "Next.js, React, MongoDB, ",
    link: "https://github.com/usi6414/my-app2",
        demo: "https://my-app2-six-psi.vercel.app", 
    learned: [
      "서버에서 MongoDB 데이터를 불러와 글 목록을 보여주는 방법",
      "[id] 폴더로 글마다 상세 페이지를 만드는 동적 라우트",
      "서버 액션으로 폼에서 입력한 글을 DB에 저장하고 목록으로 돌아가는 흐름",
      "loading.tsx와 error.tsx로 로딩 중, 오류 상황을 화면에 보여주는 방법",
      
    ],
    review:
      "화면에 보이는 글이 실제로 DB에서 불러온 데이터라는 걸 처음 직접 확인해서 신기했습니다. 글쓰기 한 번에 저장과 이동까지 이어지는 흐름을 이해하는 데 도움이 됐습니다.",
          likes: 0,
  },
    {
    id: "2",
    name: "회원가입·로그인 기능",
    description: "auth.js와 MongoDB로 만든 회원가입과 로그인 실습",
    detail:
      "웹서버보안프로그래밍 수업에서 회원가입, 로그인, 로그아웃을 구현했습니다. 비밀번호는 bcrypt로 암호화(해시)해서 MongoDB에 저장하고, 로그인할 때는 입력한 비밀번호를 같은 방식으로 비교해 확인합니다. 이메일 중복 가입과 8자 미만 비밀번호는 막았습니다.",
    tech: "Next.js, Auth.js(next-auth), bcryptjs, Mongoose, MongoDB",
    link: "https://github.com/usi6414/my-app2",
        demo: "https://my-app2-six-psi.vercel.app",     
    learned: [
      "비밀번호를 그대로 저장하지 않고 bcrypt로 암호화(해시)해서 저장하는 방법",
      "로그인할 때 입력한 비밀번호를 해시와 비교해 확인하는 과정",
      "이메일 중복 가입과 8자 미만 비밀번호를 서버에서 막는 방법",
      "로그인 상태를 유지하고 로그아웃으로 끝내는 흐름",
    ],
    review:
      "비밀번호를 DB에 그대로 저장하면 위험하다는 걸 알고 있었는데, 실제로 암호화해서 저장해 보니 보안이 왜 중요한지 실감했습니다.",
          likes: 0,
  },

    {
    id: "3",
    name: "개인 포트폴리오 홈페이지",
    description: "Next.js와 MongoDB로 만든 나의 포트폴리오 사이트",
    detail:
      "소개, 프로젝트 목록, 방명록으로 구성한 개인 홈페이지입니다. 방명록 글은 MongoDB에 저장하고 Vercel로 배포했습니다.",
    tech: "Next.js, React, Mongoose, MongoDB, Tailwind CSS, Vercel",
    link: "https://github.com/usi6414/siu-portfolio",
        demo: "https://my-app2-six-psi.vercel.app",     
    learned: [
      "수업 때 만든 구조를 응용해 소개, 프로젝트, 방명록 페이지를 직접 구성하기",
      "방명록 글자 수를 서버에서 검사해 너무 긴 입력을 막는 방법",
      "GitHub에 올리고 Vercel에 배포하면서 DB 주소를 환경변수로 따로 등록하는 과정",
      "수정 후 push하면 배포 사이트가 자동으로 갱신되는 흐름",
    ],
    review:
      "수업에서 배운 것을 한 사이트로 묶어 직접 배포까지 해보니 각 기능이 어떻게 이어지는지 이해됐습니다. 비밀번호 같은 주소는 코드에 넣지 않고 환경변수로 관리해야 하는 이유도 알게 됐습니다.",
          likes: 0,
  },
]

export async function getProjects(): Promise<Project[]> {
  return projects
}

export async function getProject(id: string): Promise<Project | undefined> {
  return projects.find((p) => p.id === id)
}

export async function likeProject(id: string): Promise<number> {
  const project = projects.find((p) => p.id === id)
  if (!project) return 0
  project.likes += 1
  return project.likes
}