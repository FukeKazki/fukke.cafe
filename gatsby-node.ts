import type { GatsbyNode } from "gatsby";
import path from "path";

export const onCreateNode: GatsbyNode["onCreateNode"]  = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
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
  }
}

export const createPages: GatsbyNode["createPages"] = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const result = await graphql(`
    query FetchAllMdx {
      allMdx {
        nodes {
          id
          fields {
            name
            category
          }
          internal {
            contentFilePath
          }
        }
      }
    }
  `)

  console.log({result})

  if (result.errors) {
    reporter.panicOnBuild('Error loading MDX result', result.errors)
  }

  // Create blog post pages.
  const posts = result.data?.allMdx.nodes

  const template = path.resolve('./src/templates/article/index.tsx');

  // you'll call `createPage` for each result
  posts.forEach(node => {
    createPage({
      // As mentioned above you could also query something else like frontmatter.title above and use a helper function
      // like slugify to create a slug
      path: `${node.fields.category}/${node.fields.name}`,
      // Provide the path to the MDX content file so webpack can pick it up and transform it into JSX
      component: `${template}?__contentFilePath=${node.internal.contentFilePath}`,
      // You can use the values in this context in
      // our page layout component
      context: { id: node.id },
    })
  })
}