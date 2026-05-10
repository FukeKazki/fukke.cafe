import { graphql, useStaticQuery } from 'gatsby';

export const useTechArticles = () => {
  const { allMdx } = useStaticQuery<Queries.UseTechArticlesQuery>(graphql`
    query UseTechArticles {
      allMdx(
        filter: { fields: { category: { eq: "tech" } } }
        sort: { fields: { name: DESC } }
      ) {
        edges {
          node {
            body
            excerpt
            frontmatter {
              title
              tags
              date
              category
              subCategory
            }
            id
            tableOfContents
            fields {
              category
              name
            }
          }
        }
      }
    }
  `);

  return allMdx.edges.map(({ node }) => node);
};
