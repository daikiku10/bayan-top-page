import type { Engagement } from "@/types";

export const engagements: Engagement[] = [
  {
    id: "1",
    title: "ECサイトリニューアル",
    period: "2023年4月 〜 2024年3月",
    role: "バックエンドエンジニア",
    description:
      "既存ECサイトのAPI設計・実装を担当。レガシーなREST APIをリファクタリングし、パフォーマンス改善と保守性の向上を実現した。",
    tags: ["TypeScript", "NestJS", "PostgreSQL", "Docker"],
  },
  {
    id: "2",
    title: "社内業務システム新規開発",
    period: "2022年10月 〜 2023年3月",
    role: "フルスタックエンジニア",
    description:
      "営業部門向け社内ツールのフロントエンド・バックエンドを一貫して担当。要件定義から実装・リリースまでを少数精鋭チームで推進した。",
    tags: ["React", "TypeScript", "Node.js", "PostgreSQL"],
  },
];
