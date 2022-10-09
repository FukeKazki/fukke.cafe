import { graphql, useStaticQuery } from 'gatsby';

export const useArticles = () => {
  const { allMdx } = useStaticQuery<Queries.UseArticlesQuery>(graphql`
    query UseArticles {
      allMdx {
        edges {
          node {
            frontmatter {
              title
            }
          }
        }
      }
    }
  `);

  return allMdx.edges.map(({ node }) => node.frontmatter?.title);
};
