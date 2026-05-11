import { graphql, useStaticQuery } from "gatsby"

export const useTechArticles = () => {
  const { allMdx } = useStaticQuery<Queries.UseTechArticlesQuery>(graphql`
    query UseTechArticles {
      allMdx(
        filter: { fields: { category: { eq: "tech" } } }
        sort: { fields: { name: DESC } }
      ) {
        edges {
          node {
            ...MdxArticle
          }
        }
      }
    }
  `)

  return allMdx.edges.map(({ node }) => node)
}
