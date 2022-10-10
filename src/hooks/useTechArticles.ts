import { graphql, useStaticQuery } from 'gatsby';

export const useTechArticles = () => {
  const { allMdx } = useStaticQuery<Queries.UseTechArticlesQuery>(graphql`
    query UseTechArticles {
      allMdx(
        filter: { fields: { category: { eq: "tech" } } }
        sort: { fields: fields___name, order: DESC }
      ) {
        edges {
          node {
            body
            excerpt
            frontmatter {
              title
              tags
              date
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
