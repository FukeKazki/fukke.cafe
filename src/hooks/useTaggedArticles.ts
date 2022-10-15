import { graphql, useStaticQuery } from 'gatsby';

export const useTaggedArticles = () => {
  const { allMdx } = useStaticQuery<Queries.UseTaggedArticlesQuery>(graphql`
    query UseTaggedArticles {
      allMdx {
        group(field: frontmatter___category) {
          nodes {
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
          fieldValue
        }
      }
    }
  `);

  return allMdx.group;
};
