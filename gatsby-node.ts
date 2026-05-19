import { resolve } from "path"

import type { GatsbyNode } from "gatsby"

type MdxFrontmatter = { title?: string; date?: string }
type MdxNodeWithFrontmatter = { frontmatter?: MdxFrontmatter | null }
type FileLikeNode = { sourceInstanceName?: string; name?: string }

export const onCreateNode: GatsbyNode["onCreateNode"] = ({
  node,
  actions,
  getNode,
}) => {
  const { createNodeField } = actions
  if (node.internal.type === `Mdx`) {
    if (!node.parent) return

    // idから親のノードを取得
    const parent = getNode(node.parent) as
      | (FileLikeNode & { id: string })
      | undefined
    if (!parent) return

    const frontmatter =
      (node as unknown as MdxNodeWithFrontmatter).frontmatter ?? {}
    const id = `${parent.sourceInstanceName ?? "?"}/${parent.name ?? "?"}`
    if (!frontmatter.title) {
      console.warn(`[mdx] missing frontmatter.title: ${id}`)
    }
    if (typeof frontmatter.date === "string") {
      const t = new Date(frontmatter.date).getTime()
      if (Number.isNaN(t)) {
        console.warn(
          `[mdx] invalid frontmatter.date "${frontmatter.date}": ${id}`,
        )
      }
    }

    // field属性に name: '20220906' を生成
    createNodeField({
      node,
      name: "name",
      value: parent.name,
    })
  }
}

export const createResolvers: GatsbyNode["createResolvers"] = ({
  createResolvers,
}) => {
  createResolvers({
    Mdx: {
      excerpt: {
        type: "String",
        args: {
          pruneLength: { type: "Int", defaultValue: 140 },
        },
        resolve: (
          source: { body?: string | null },
          args: { pruneLength: number },
        ) => {
          const body = source.body ?? ""
          const cleaned = body
            // fenced code blocks
            .replace(/```[\s\S]*?```/g, "")
            // ATX headings (# 〜 ######)
            .replace(/^[ \t]*#{1,6}[ \t].*$/gm, "")
            // Setext headings (underlined with === or ---)
            .replace(/^.+\n[=-]{2,}\s*$/gm, "")
            // images
            .replace(/!\[[^\]]*\]\([^)]*\)/g, "")
            // links: keep the text
            .replace(/\[([^\]]*)\]\([^)]*\)/g, "$1")
            // blockquote / list markers at line start
            .replace(/^[ \t]*[>\-*+][ \t]+/gm, "")
            // inline code: keep the text
            .replace(/`([^`]+)`/g, "$1")
            // emphasis markers
            .replace(/[*_~]/g, "")
            // collapse whitespace
            .replace(/\s+/g, " ")
            .trim()
          if (cleaned.length <= args.pruneLength) return cleaned
          return `${cleaned.slice(0, args.pruneLength).trimEnd()}…`
        },
      },
    },
  })
}

export const createPages: GatsbyNode["createPages"] = ({ actions }) => {
  const { createSlice } = actions
  createSlice({
    id: "header",
    component: resolve("src/components/shared/Header/index.tsx"),
  })
  createSlice({
    id: "footer",
    component: resolve("src/components/shared/Footer/index.tsx"),
  })
}

export const onCreateWebpackConfig: GatsbyNode["onCreateWebpackConfig"] = ({
  stage,
  actions,
  getConfig,
}) => {
  if (stage === "build-javascript") {
    actions.setWebpackConfig({
      devtool: false,
    })
  }

  // Gatsby 内蔵の ESLint webpack プラグインは eslint-config-react-app v6 を
  // 経由して eslint-plugin-flowtype@5 を読み込むため、ESLint 9 と非互換。
  // lint は pnpm run lint (flat config) 側に任せ、webpack からは外す。
  type WebpackPluginLike = { constructor: { name: string } }
  type WebpackConfigLike = { plugins?: WebpackPluginLike[] }
  const config = (getConfig as () => WebpackConfigLike | undefined)()
  if (config?.plugins) {
    actions.replaceWebpackConfig({
      ...config,
      plugins: config.plugins.filter(
        (plugin) => plugin.constructor.name !== "ESLintWebpackPlugin",
      ),
    })
  }
}
