import { resolve } from "path"

import type { GatsbyNode } from "gatsby"

export const onCreateNode: GatsbyNode["onCreateNode"] = ({
  node,
  actions,
  getNode,
}) => {
  const { createNodeField } = actions
  if (node.internal.type === `Mdx`) {
    if (!node.parent) return

    // idから親のノードを取得
    const parent = getNode(node.parent)
    if (!parent) return

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
}

export const onCreateWebpackConfig: GatsbyNode["onCreateWebpackConfig"] = ({
  stage,
  actions,
}) => {
  if (stage === "build-javascript") {
    actions.setWebpackConfig({
      devtool: false,
    })
  }
}
