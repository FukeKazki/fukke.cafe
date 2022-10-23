import type { GatsbyNode } from "gatsby";
import { createRemoteFileNode } from "gatsby-source-filesystem"

type NodeWithThumbnail = {
  frontmatter: {
    thumbnail: string
  }
}

const hasThumbnail = (node: any): node is NodeWithThumbnail => {
  return node?.frontmatter?.thumbnail
}

export const onCreateNode: GatsbyNode["onCreateNode"]  = async ({ node, actions, getNode, createNodeId, getCache }) => {
  const { createNodeField, createNode } = actions
  if (node.internal.type === `Mdx`) {
    if (!node.parent) return;

    // idから親のノードを取得
    const parent = getNode(node.parent)
    if (!parent) return;

    // field属性に category: 'daily' | 'tech' を生成
    createNodeField({
      node,
      name: 'category',
      value: parent.sourceInstanceName
    })

    // field属性に name: '20220906' を生成
    createNodeField({
      node,
      name: 'name',
      value: parent.name
    })

    // frontmatterで指定されているURLから画像ノードを生成する
    if (hasThumbnail(node)) {
      const thumbnail = node.frontmatter.thumbnail
      const fileNode = await createRemoteFileNode({
        url: thumbnail,
        parentNodeId: parent.id,
        createNode,
        createNodeId,
        getCache
      })
      if (fileNode) {
        node.image___NODE = fileNode.id
      }
    }
  }
}
