import type { HeadProps } from "gatsby"
import { graphql } from "gatsby"
import { Fragment } from "react"

import { IndexTemplate } from "../components/templates/Index"

export default function IndexPage() {
  return <IndexTemplate />
}

export const Head = (props: HeadProps<Queries.IndexPageQuery>) => {
  const meta = props.data.site?.siteMetadata
  const siteUrl = meta?.siteUrl ?? ""
  const description = meta?.description ?? ""
  const image = meta?.image ?? ""
  const twitter = meta?.social?.twitter ?? ""
  const title = meta?.title ?? "fukke.cafe"
  const url = `${siteUrl}${props.location.pathname}`

  return (
    <Fragment>
      <title>{title}</title>
      <html lang="ja" />
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta name="image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={description} />
      <meta property="og:site_name" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="twitter:site" content={twitter} />
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
    </Fragment>
  )
}

export const query = graphql`
  query IndexPage {
    site {
      siteMetadata {
        title
        siteUrl
        description
        image
        social {
          twitter
        }
      }
    }
  }
`
