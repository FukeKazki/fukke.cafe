import { graphql, useStaticQuery } from 'gatsby';

export const useDailyArticles = () => {
  const { allMdx } = useStaticQuery<Queries.UseDailyArticlesQuery>(graphql`
    query UseDailyArticles {
      allMdx(
        filter: { fields: { category: { eq: "daily" } } }
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
