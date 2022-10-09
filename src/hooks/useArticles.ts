import { graphql, useStaticQuery } from 'gatsby';

export const useArticles = () => {
  const { allMdx } = useStaticQuery<Queries.UseArticlesQuery>(graphql`
    query UseArticles {
      allMdx {
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
