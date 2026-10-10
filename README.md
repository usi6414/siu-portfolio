# 유시우 포트폴리오 (웹서버보안프로그래밍)

Next.js + MongoDB(Mongoose)로 만든 개인 포트폴리오 홈페이지입니다.

## 실행 방법

1. `npm install`
2. 프로젝트 최상위 폴더에 `.env.local` 파일을 만들고 아래 한 줄을 넣습니다. (수업 때 쓴 MongoDB 주소와 동일)
   `MONGODB_URI=mongodb+srv://...`
3. `npm run dev` 후 http://localhost:3000 접속

## 페이지

- `/` 홈
- `/about` 소개
- `/projects`, `/projects/[id]` 프로젝트 목록과 상세
- `/guestbook`, `/guestbook/new` 방명록 목록과 글쓰기 (MongoDB 저장)

## 배포

GitHub에 push 후 Vercel에서 저장소를 가져오고, Environment Variables에 `MONGODB_URI`를 등록합니다.
