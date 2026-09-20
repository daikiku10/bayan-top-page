import type { Engagement } from "@/types";

export const engagements: Engagement[] = [
  {
    id: "1",
    title: "動画視聴プラットフォームの解析機能開発と改修",
    period: "2021年8月 〜 2023年12月",
    role: "フロントエンドエンジニア",
    description:
      "動画視聴プラットフォームにおける視聴データ解析機能の開発・改修にフロントエンドエンジニアとして参画。React・TypeScriptによる管理画面/解析ダッシュボードの実装を担当し、PHP・Go（Laravel・Echo）で構築されたバックエンドAPIと連携した機能提供を行った。",
    tags: ["TypeScript", "React", "PHP", "Go", "Laravel", "Echo"],
    architecture: {
      nodes: [
        { id: "client", label: "React 解析ダッシュボード", column: 0 },
        { id: "api-php", label: "Laravel API", column: 1, row: 0 },
        { id: "api-go", label: "Echo API", column: 1, row: 1 },
        { id: "db", label: "MySQL", column: 2, row: 0 },
        { id: "analytics", label: "解析データストア", detail: "視聴ログ集計", column: 2, row: 1 },
      ],
      edges: [
        { from: "client", to: "api-php" },
        { from: "client", to: "api-go" },
        { from: "api-php", to: "db" },
        { from: "api-go", to: "analytics" },
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
