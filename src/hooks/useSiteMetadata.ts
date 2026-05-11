import { graphql, useStaticQuery } from "gatsby"

export const useSiteMetadata = () => {
  const data = useStaticQuery<Queries.SiteMetadataQuery>(graphql`
    query SiteMetadata {
      site {
        siteMetadata {
          title
          siteUrl
          description
          author
          image
          social {
            twitter
            github
          }
        }
      }
    }
  `)

  return data.site?.siteMetadata
}
