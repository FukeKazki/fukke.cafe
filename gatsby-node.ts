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

    // field属性に category: 'tech' などのソース名を生成
    createNodeField({
      node,
      name: "category",
      value: parent.sourceInstanceName,
    })

    // field属性に name: '20220906' を生成
    createNodeField({
      node,
      name: "name",
      value: parent.name,
    })
  }
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
