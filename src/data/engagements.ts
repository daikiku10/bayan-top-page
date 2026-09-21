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
      { label: "データベース", items: ["MySQL", "Redis"] },
      { label: "インフラ", items: ["GCP", "ArgoCD"] },
    ],
    responsibilities: [
      {
        label: "フロントエンド",
        items: [
          "新規画面を6画面実装",
          "可読性を意識したコーディング（命名、説明変数、必要箇所へのコメント、早期リターンなど）",
        ],
      },
      {
        label: "バックエンド",
        items: [
          "既存API改修 5件（うちRead API 2件は仮実装から本実装への書き換え）",
          "新規API実装 2件（Create, Read, Update処理）",
          "関連コンテンツの表示機能、任意コンテンツの設定・表示機能の実装",
        ],
      },
    ],
    challenges: [
      {
        label: "フロントエンド",
        items: [
          "デザインに忠実なCSS実装に苦労した",
          "グラフ表示などの要望を満たすには既存ライブラリをそのまま使うのではなくカスタマイズが必要で、デザインに合わせ込む実装に工夫を要した",
        ],
      },
      {
        label: "バックエンド",
        items: [
          "Go特有の命名の省略（略語）の読み解きに時間を要した",
          "PHP・Goともに未経験からのキャッチアップに苦労。業務時間外の学習や開発しながらの習得が必要な中、公式ドキュメントを読み込むことと既存コードから学ぶことを意識して取り組んだ",
        ],
      },
    ],
    architecture: {
      nodes: [
        { id: "client", label: "React フロントエンド", column: 0 },
        { id: "api-php", label: "Laravel API", detail: "解析機能", column: 1, row: 0 },
        { id: "api-go", label: "Echo API", detail: "その他機能（コンテンツ表示・CSV出力等）", column: 1, row: 1 },
        { id: "db", label: "MySQL", column: 2, row: 0 },
        { id: "cache", label: "Redis", detail: "セッション管理", column: 2, row: 1 },
      ],
      edges: [
        { from: "client", to: "api-php" },
        { from: "client", to: "api-go" },
        { from: "api-php", to: "db" },
        { from: "api-go", to: "db" },
        { from: "api-php", to: "cache" },
        { from: "api-go", to: "cache" },
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
