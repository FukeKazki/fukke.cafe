// @ts-nocheck
import reactInternal from "@yoshinani/style-guide/eslint/react-internal"

const eslintConfig = [
  {
    ignores: [
      ".cache/**",
      "public/**",
      "node_modules/**",
      "apm_modules/**",
      "bin/**",
      "eslint.config.mjs",
      "src/gatsby-types.d.ts",
    ],
  },
  ...reactInternal,
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: {
      // Emotion の css prop は JSX runtime で注入される. react プラグインからは未知に見えるため許可する.
      "react/no-unknown-property": ["error", { ignore: ["css"] }],
      // style-guide は @emotion/* を Tailwind 移行対象として警告するが, 本プロジェクトは Emotion を採用方針として継続するため無効化する.
      "no-restricted-imports": "off",
    },
  },
]

export default eslintConfig
