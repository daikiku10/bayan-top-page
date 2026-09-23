import type { Engagement } from "@/types";

export const engagements: Engagement[] = [
  {
    id: "4",
    title: "情報システム部門向けSaaS管理ツール開発プロジェクト",
    period: "2025年3月 〜 2026年10月",
    role: "プロダクトエンジニア",
    description:
      "企業の情報システム部門向けに、SaaS利用状況の可視化とアカウント管理業務の効率化を実現するSaaS管理プロダクトの新機能開発プロジェクト。社内で利用されるSaaSツールの増加に伴うアカウント管理やシャドーIT（未把握のツール使用）によるセキュリティリスク対応の負荷増大という課題を背景に、営業担当が顧客ヒアリングを通じて収集した要望をもとに機能仕様を検討・設計し、新機能の実装を行う。",
    tags: [
      { label: "フロントエンド", items: ["TypeScript", "React"] },
      { label: "バックエンド", items: ["TypeScript", "NestJS"] },
      { label: "データベース", items: ["MongoDB"] },
      { label: "インフラ", items: ["GCP", "Cloudflare"] },
    ],
    responsibilities: [
      {
        label: "",
        items: [
          "起票されたチケットの顧客要望をもとに、要件の確認・ヒアリングから設計・実装・テストまでを一気通貫で担当",
          "チーム内のレビュー対応",
          "問い合わせ対応",
        ],
      },
    ],
    challenges: [
      {
        label: "",
        items: [
          "顧客要望が必ずしも正しいとは限らない点。要望を鵜呑みにしてしまうと的外れな実装になってしまうこともあるため、なぜ顧客がその要望を出しているのか、真の目的は何かを理解することが大事だと学んだ",
          "各SaaSとの連携処理で、APIが公開されていない場合はスクレイピングで対応する点。トライアル環境への申し込みや環境準備を行い、HTML構造を確認しながら実装を進める必要があり、AIに任せることができない部分だったため自身で実装した",
          "公開APIがあってもドキュメントと実際のレスポンスが異なることがあるため、一つひとつ実際に試しながら実装を進めた",
          "問い合わせ対応や上流工程から関わる機会が増え、エンジニア以外の職種とのコミュニケーションが増えたことで、良い意味で対応の姿勢を変えるよう意識した",
        ],
      },
    ],
    architecture: {
      nodes: [
        { id: "client", label: "Client", column: 0 },
        { id: "cloudflare", label: "Web", detail: "React", column: 1 },
        { id: "core", label: "Core API", detail: "NestJS (GCP)", column: 2 },
        { id: "mongodb", label: "MongoDB", detail: "GCP", column: 3, row: 0 },
        { id: "redis", label: "Redis", detail: "GCP", column: 3, row: 1 },
      ],
      edges: [
        { from: "client", to: "cloudflare" },
        { from: "cloudflare", to: "core" },
        { from: "core", to: "mongodb" },
        { from: "core", to: "redis" },
      ],
      groups: [
        { label: "Cloudflare", nodeIds: ["cloudflare"] },
        { label: "GCP", nodeIds: ["core", "mongodb", "redis"] },
      ],
    },
  },
  {
    id: "3",
    title: "理系学生向け就職サイトのリプレイス",
    period: "2024年1月 〜 2025年2月",
    role: "フルスタックエンジニア",
    description:
      "理系学生向け就職支援サイトを、企業側・学生側・社内管理側の3つのシステムを維持しながらリプレイスするプロジェクト。スクラム開発（2週間スプリント）で進行した。",
    tags: [
      { label: "フロントエンド", items: ["TypeScript", "Next.js", "React"] },
      { label: "バックエンド", items: ["Go", "Gin"] },
      { label: "データベース", items: ["Amazon Aurora (MySQL)"] },
      { label: "インフラ", items: ["AWS"] },
    ],
    responsibilities: [
      {
        label: "",
        items: [
          "メインはバックエンドの実装",
          "スプリント内で次スプリントに行うフロントエンド側のタスクの作成・見積もりを担当",
          "スプリントの状況に応じてフロントエンドの実装も担当",
          "バックエンド・フロントエンドのレビュー対応",
        ],
      },
    ],
    challenges: [
      {
        label: "",
        items: [
          "学生側フロントエンドの仕様は固定のまま、BFFとの繋ぎ込みを実装する必要があり、学生側が受け取るデータを一つひとつ確認しながら必要なもの・不要なものを見極めるのに苦労した",
          "フロントエンド・バックエンド双方を理解している人材が求められたが、両方対応できるメンバーが数人しかいなかったため、自身が担当した",
        ],
      },
    ],
    architecture: {
      container: "AWS",
      nodes: [
        { id: "client", label: "Client", column: 0 },
        { id: "amplify", label: "Amplify", detail: "Next.js（App Router / Pages Router）", column: 1 },
        { id: "api-gw-public", label: "API Gateway", detail: "Public", column: 2, row: 0 },
        { id: "cognito", label: "Cognito", detail: "ユーザープール", column: 2, row: 1 },
        { id: "s3", label: "S3", detail: "画像・添付ファイル", column: 2, row: 2 },
        { id: "lambda", label: "Lambda", detail: "BFF (Go, Gin)", column: 3 },
        { id: "api-gw-private", label: "API Gateway", detail: "Private", column: 4 },
        { id: "lambda-ms", label: "Lambda", detail: "micro services (Go, Gin)", column: 5 },
        { id: "rds", label: "Amazon Aurora", detail: "MySQL", column: 6, row: 0 },
        { id: "ses", label: "SES", detail: "メール送信", column: 6, row: 1 },
      ],
      edges: [
        { from: "client", to: "amplify" },
        { from: "amplify", to: "api-gw-public" },
        { from: "amplify", to: "cognito" },
        { from: "amplify", to: "s3" },
        { from: "ses", to: "client" },
        { from: "api-gw-public", to: "lambda" },
        { from: "lambda", to: "api-gw-private" },
        { from: "api-gw-private", to: "lambda-ms" },
        { from: "lambda-ms", to: "rds" },
        { from: "cognito", to: "lambda-ms" },
        { from: "lambda-ms", to: "ses" },
      ],
    },
  },
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
      container: "GCP",
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
];
