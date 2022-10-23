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
            image {
              childImageSharp {
                gatsbyImageData(
                  width: 200
                  placeholder: BLURRED
                  formats: [AUTO, WEBP, AVIF]
                )
              }
            }
          }
        }
      }
    }
  `);

  return allMdx.edges.map(({ node }) => node);
};
