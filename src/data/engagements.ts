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
    architecture: {
      nodes: [
        { id: "client", label: "ブラウザ", column: 0 },
        { id: "api", label: "NestJS API", detail: "REST", column: 1 },
        { id: "db", label: "PostgreSQL", column: 2, row: 0 },
        { id: "cache", label: "Redis", detail: "Cache", column: 2, row: 1 },
      ],
      edges: [
        { from: "client", to: "api" },
        { from: "api", to: "db" },
        { from: "api", to: "cache" },
      ],
    },
  },
  {
    id: "2",
    title: "社内業務システム新規開発",
    period: "2022年10月 〜 2023年3月",
    role: "フルスタックエンジニア",
    description:
      "営業部門向け社内ツールのフロントエンド・バックエンドを一貫して担当。要件定義から実装・リリースまでを少数精鋭チームで推進した。",
    tags: ["React", "TypeScript", "Node.js", "PostgreSQL"],
    architecture: {
      nodes: [
        { id: "client", label: "React SPA", column: 0 },
        { id: "backend", label: "Express API", column: 1 },
        { id: "db", label: "PostgreSQL", column: 2, row: 0 },
        { id: "notify", label: "Slack Webhook", detail: "通知", column: 2, row: 1 },
      ],
      edges: [
        { from: "client", to: "backend" },
        { from: "backend", to: "db" },
        { from: "backend", to: "notify" },
      ],
    },
  },
];
