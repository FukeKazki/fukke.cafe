import { graphql, useStaticQuery } from 'gatsby';

export const useCategoriesArticles = () => {
  const { allMdx } = useStaticQuery<Queries.UseCategoriesArticlesQuery>(graphql`
    query UseCategoriesArticles {
      allMdx(filter: { fields: { category: { eq: "tech" } } }) {
        group(field: { frontmatter: { category: SELECT } }) {
          fieldValue
          group(field: { frontmatter: { subCategory: SELECT } }) {
            edges {
              node {
                frontmatter {
                  title
                  tags
                  date
                }
                fields {
                  category
                  name
                }
                excerpt
                body
                id
              }
            }
            fieldValue
          }
        }
      }
    }
  `);

  return allMdx.group;
};
