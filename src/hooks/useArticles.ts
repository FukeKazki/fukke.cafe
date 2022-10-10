import { graphql, useStaticQuery } from 'gatsby';

export const useArticles = () => {
  const { allMdx } = useStaticQuery<Queries.UseArticlesQuery>(graphql`
    query UseArticles {
      allMdx(sort: { fields: fields___name, order: DESC }) {
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
