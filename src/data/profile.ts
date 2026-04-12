import type { Profile } from "@/types";

export const profile: Profile = {
  name: "工藤 大暉",
  nameEn: "Daiki Kudo",
  tagline: "Software Engineer",
  bio: "ソフトウェアエンジニアとして、Webアプリケーションの開発に取り組んでいます。ユーザーにとって使いやすく、保守性の高いプロダクトを作ることを大切にしています。",
  skills: [
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "NestJS",
    "PostgreSQL",
    "Docker",
    "Git",
  ],
  socialLinks: [
    {
      label: "GitHub",
      url: "https://github.com/daiki-kudo",
      icon: "github",
    },
    // {
    //   label: "Twitter",
    //   url: "https://twitter.com/daiki_kudo",
    //   icon: "twitter",
    // },
  ],
};
