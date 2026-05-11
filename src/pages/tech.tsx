import type { HeadProps } from "gatsby"
import { graphql } from "gatsby"
import { Fragment } from "react"

import { TechTemplate } from "../components/templates/tech"

export default function TechPage() {
  return <TechTemplate />
}

export const Head = (props: HeadProps<Queries.TechPageQuery>) => {
  const meta = props.data.site?.siteMetadata
  const siteUrl = meta?.siteUrl ?? ""
  const description = meta?.description ?? ""
  const twitter = meta?.social?.twitter ?? ""
  const title = meta?.title ?? "fukke.cafe"
  const url = `${siteUrl}${props.location.pathname}`
  const image = `https://fukke-blog-og-image.vercel.app/技術ブログ`

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: title,
    url,
    description,
  }

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
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD は dangerouslySetInnerHTML が公式パターン
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </Fragment>
  )
}

export const query = graphql`
  query TechPage {
    site {
      siteMetadata {
        title
        siteUrl
        description
        social {
          twitter
        }
      }
    }
  }
`
