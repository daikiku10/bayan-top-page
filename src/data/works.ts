import type { Work } from "@/types";

export const works: Work[] = [
  {
    id: "work-1",
    title: "サンプルプロジェクト 1",
    description:
      "Next.js と TypeScript を使って構築した Web アプリケーションです。",
    url: "https://example.com",
    repoUrl: "https://github.com/daiki-kudo/sample-project-1",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    id: "work-2",
    title: "サンプルプロジェクト 2",
    description: "NestJS と PostgreSQL を使った REST API サーバーです。",
    repoUrl: "https://github.com/daiki-kudo/sample-project-2",
    tags: ["NestJS", "PostgreSQL", "Docker"],
  },
  {
    id: "work-3",
    title: "サンプルプロジェクト 3",
    description:
      "React Native で開発したモバイルアプリケーションです。",
    repoUrl: "https://github.com/daiki-kudo/sample-project-3",
    tags: ["React Native", "TypeScript"],
  },
];
