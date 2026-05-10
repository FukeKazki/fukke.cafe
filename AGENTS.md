# AGENTS.md — AI エージェント向けリポジトリガイド

この文書は、このリポジトリで作業するコーディングエージェント向けの要点です。詳細は `README.md` とソースを参照してください。

## プロジェクト概要

- **サイト**: [fukke.cafe](https://fukke.cafe) — 個人ブログ／技術記事サイト。
- **スタック**: Gatsby 5、React 19、TypeScript、MDX、スタイルは Emotion（`@emotion/react` / `@emotion/styled`）。
- **ランタイム**: Node.js **25.9.0 以上**（`mise.toml` と `engines.node` を参照）。
- **パッケージマネージャ**: `package.json` の `packageManager`（pnpm 10）に従う。**CI** は `corepack enable` → `pnpm install --frozen-lockfile` → `pnpm run build`。
- **pnpm overrides**: Node 25 上で Gatsby の LMDB キャッシュが動作するよう、`lmdb` と `msgpackr` を `package.json` の `pnpm.overrides` で指定している。

## ディレクトリの要点

| 領域 | 説明 |
|------|------|
| `src/pages/` | ページとファイルベースルーティング（動的ルート含む）。 |
| `src/components/` | レイアウト・テンプレート・共有 UI。 |
| `src/hooks/` | 記事取得などのデータフック。 |
| `articles/` | MDX コンテンツ。公開対象は `tech` のみ（`gatsby-config.ts` の `gatsby-source-filesystem` と対応）。 |
| `images/` | 画像アセット。 |
| `gatsby-config.ts` | プラグイン・コンテンツパス設定。 |
| `gatsby-node.ts` | ビルド時の Node API（フィールド生成など）。 |

GraphQL の型は `graphqlTypegen: true` により生成される。クエリを変えたあとは開発サーバーまたはビルドで型を更新する。

## よく使うコマンド

プロジェクトルートで実行する。

```bash
pnpm install          # 依存関係のインストール
pnpm run develop      # 開発サーバー（別名: pnpm start）
pnpm run build        # 本番ビルド
pnpm run serve        # ビルド結果のローカル確認
pnpm run typecheck    # TypeScript（tsc --noEmit）
pnpm run format       # Biome（リポジトリ全体）
pnpm run check        # Biome check（フォーマット + import 整列）
pnpm run lint         # ESLint（@yoshinani/style-guide/eslint/react-internal）
pnpm run clean        # Gatsby キャッシュ削除（不調時）
```

## デプロイと CI

- デプロイ先は **Cloudflare Pages**。Git 連携により `main` への push で本番、PR でプレビューが自動デプロイされる。
- Node **25.9.0**、ビルドは `pnpm run build`、公開ディレクトリは `public/`。

ローカルでビルドが通ることをマージ前に確認すると安全である。

## エージェント向け作業指針

1. **変更範囲**: 依頼された問題だけを直す。無関係なリファクタやファイル追加は避ける。
2. **スタイル**: 既存コンポーネント・Emotion の書き方・ファイル配置に合わせる。インポートはファイル先頭にまとめる（インライン import は避ける）。
3. **TypeScript**: union / enum の分岐は網羅的に扱うプロジェクト方針に沿う。
4. **コンテンツ**: `articles/` の MDX をいじる場合は frontmatter や既存記事の形式を踏襲する。
5. **検証**: 変更後は可能なら `pnpm run typecheck` と `pnpm run build` を実行して確認する。

## 関連ファイル

- `README.md` — 短いスタックメモ。
- `.cursor/rules/` — Cursor 用ルールを置く場合はここ（プロジェクトにルールが無い場合もある）。
