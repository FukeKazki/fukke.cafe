import { graphql } from "gatsby"

export const MdxArticleFragment = graphql`
  fragment MdxArticle on Mdx {
    id
    body
    excerpt
    frontmatter {
      title
      tags
      date
    }
    fields {
      name
    }
    tableOfContents
  }
`
