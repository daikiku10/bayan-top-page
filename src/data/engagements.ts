import type { Engagement } from "@/types";

export const engagements: Engagement[] = [
  {
    id: "1",
    title: "動画視聴プラットフォームの解析機能開発と改修",
    period: "2021年8月 〜 2023年12月",
    role: "フロントエンドエンジニア",
    description:
      "動画・ライブ配信を提供する動画視聴プラットフォームの解析機能開発および機能改修プロジェクト。視聴された動画・ライブの視聴履歴や解析結果をコンテンツ別・ユーザー別にグラフやリストで可視化する解析機能を新規開発し、リリース後はホーム画面のコンテンツ表示、関連コンテンツ表示、CSV出力、ドキュメントダウンロードなどの機能拡充・改修を継続的に行うプロジェクト。",
    tags: [
      { label: "フロントエンド", items: ["TypeScript", "React"] },
      { label: "バックエンド", items: ["PHP", "Laravel", "Go", "Echo"] },
    ],
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
    tags: [
      { label: "フロントエンド", items: ["React", "TypeScript"] },
      { label: "バックエンド", items: ["Node.js", "PostgreSQL"] },
    ],
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
