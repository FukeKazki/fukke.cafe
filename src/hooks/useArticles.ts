import { graphql, useStaticQuery } from "gatsby"

export const useArticles = () => {
  const { allMdx } = useStaticQuery<Queries.UseArticlesQuery>(graphql`
    query UseArticles {
      allMdx(sort: { fields: { name: DESC } }) {
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
