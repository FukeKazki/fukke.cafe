##
- Node.js 25.9.0（`mise.toml` / `package.json` の `engines`）
- Gatsby v5
- pnpm 10（`package.json` の `packageManager` に準拠。`corepack enable` 後に `pnpm install`）
- MDX

## ローカル開発

`pnpm run dev` で起動する。[portless](https://github.com/portless) 経由のため、`https://tech.fukke.cafe.localhost/` で開ける（`http://localhost:8000` ではなくこちらを使う）。portless を介さず素の Gatsby を起動したい場合は `pnpm start`。
