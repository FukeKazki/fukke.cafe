# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

このリポジトリでは AGENTS.md にも詳細なガイドがある。コンフリクトしたら AGENTS.md を優先する。

## プロジェクト

[tech.fukke.cafe](https://tech.fukke.cafe) — Gatsby 5 + React 19 + TypeScript + MDX による個人ブログ。スタイルは Emotion（`@emotion/react` / `@emotion/styled`）。

## ランタイム前提（重要）

- **Node.js 25.9.0** を `mise.toml` で固定。`package.json` の `engines.node` も `>=25.9.0`。
- **pnpm 10**（`packageManager` フィールド指定）。`corepack enable` 後に `pnpm install`。
- **pnpm overrides で `lmdb` と `msgpackr` を上書きしている**（`package.json` の `pnpm.overrides`）。これは Node 25 上で Gatsby の LMDB キャッシュを動作させるための必須対策で、外してはいけない。
- CI も同じ手順（`corepack enable` → `pnpm install --frozen-lockfile` → `pnpm run build`）。

## 主要コマンド

```bash
pnpm run dev          # 開発サーバー（portless 経由）。ローカルは https://tech.fukke.cafe.localhost/ で開く
pnpm start            # portless を介さず gatsby develop のみ起動（http://127.0.0.1:8000）
pnpm run build        # 本番ビルド
pnpm run serve        # ビルド成果物のローカル確認
pnpm run typecheck    # tsc --noEmit
pnpm run format       # biome format --write .
pnpm run check        # biome check --write .（フォーマット + import 整列）
pnpm run lint         # eslint .
pnpm run clean        # gatsby clean（キャッシュ不調時）
```

テストフレームワークは導入されていない。変更検証は `pnpm run typecheck` と `pnpm run build` で行う。

## アーキテクチャの肝

ファイル列挙では掴めない、複数ファイルを跨ぐ仕組みだけ書く。

### コンテンツ → ページ生成パイプライン

1. `gatsby-config.ts` が `articles/tech/` を `gatsby-source-filesystem` として登録し、`name: "tech"` を `sourceInstanceName` として保持する。公開対象は `tech` のみ。
2. `gatsby-node.ts` の `onCreateNode` が Mdx ノードに対し以下のフィールドを生成する：
   - `fields.category` ← 親 File ノードの `sourceInstanceName`（例: `tech`）
   - `fields.name` ← ファイル名（例: `20200103`）
3. ページは Gatsby のファイルベースルーティングで作られる：
   - `src/pages/{mdx.fields__category}/{mdx.fields__name}.tsx` がコレクションルートで、すべての MDX を `/tech/20200103` のような URL に展開する。
   - `src/pages/tech.tsx`, `index.tsx`, `404.tsx` は静的ページ。

`articles/` のディレクトリを増やしただけでは取り込まれない。**新しいカテゴリを追加するときは `gatsby-config.ts` の `gatsby-source-filesystem` 登録も増やす**必要がある。

### GraphQL 型生成

`gatsby-config.ts` で `graphqlTypegen: true` が有効。型は `src/gatsby-types.d.ts` に自動生成され、コード側では `Queries.ArticlePageQuery` 等として参照する。**クエリを変更したら `pnpm run develop` か `pnpm run build` を一度通して型を再生成する**こと。型エラーは大抵この再生成漏れ。

### Header の Slice

`gatsby-node.ts` の `createPages` が `createSlice({ id: 'header', component: 'src/components/shared/Header/index.tsx' })` を呼んでいる。Header は Gatsby Slice として共有されるため、`<Slice alias="header" />` で参照する。直接 import しないこと。

### ディレクトリ責務

| 領域 | 役割 |
|------|------|
| `src/pages/` | ルーティング。`{mdx.fields__*}` 形式の動的ルートを含む |
| `src/components/templates/` | ページテンプレート（`article`, `Index`, `tech`） |
| `src/components/layouts/` | レイアウトラッパ |
| `src/components/shared/` | 共有 UI（Header は Slice） |
| `src/hooks/` | `useStaticQuery` ベースの記事取得フック |
| `articles/<category>/*.mdx` | コンテンツ。frontmatter は `title`, `date`, `tags`, `category`, `subCategory` |

## デプロイ

Cloudflare Pages の Git 連携によりデプロイされる。`main` への push で本番、PR でプレビューが自動生成される。GitHub Actions 側でのデプロイ用ワークフローは存在しない。

## コーディング規約（プロジェクト固有）

- フォーマッタは **Biome**（`biome.jsonc` が [`@yoshinani/style-guide/biome`](https://github.com/yoshinani-dev/style-guide) を extend）。ダブルクォート、セミコロン asNeeded、`trailingComma: "all"`、2 スペースインデント。
- Lint は **ESLint flat config**（`eslint.config.mjs` が `@yoshinani/style-guide/eslint/react-internal` を読み込み）。型情報を使った lint なので tsconfig 経由で projectService が必要。
- TypeScript の base は `@yoshinani/style-guide/typescript/react-library` を extend。Gatsby との互換のため `module` / `moduleResolution` / `target` / `lib` / `noEmit` などを `tsconfig.json` でローカル上書きしている。
- import はファイル先頭にまとめる。インライン import は避ける。
- 既存の Emotion パターン（`styled` / `css` prop の使い分け）に合わせる。
- TypeScript の union / enum 分岐は網羅的に書く方針。
- 依頼された範囲だけ修正し、無関係なリファクタは持ち込まない。
