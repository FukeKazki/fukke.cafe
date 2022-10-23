import { graphql, useStaticQuery } from 'gatsby';

export const useWebfrontendArticles = () => {
  const { allMdx } = useStaticQuery<Queries.UseWebfrontendArticlesQuery>(graphql`
    query UseWebfrontendArticles {
      allMdx(
        filter: { frontmatter: {category: {eq: "ウェブフロント"}}, fields: { category: { eq: "tech" } } }
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
            thumbnail {
              childImageSharp {
                gatsbyImageData(width: 360)
              }
            }
          }
        }
      }
    }
  `);

  return allMdx.edges.map(({ node }) => node);
};
