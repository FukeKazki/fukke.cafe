import type { HeadProps, PageProps } from "gatsby"
import { graphql } from "gatsby"

import { ArticleTemplate } from "../../components/templates/article"

export default function ArticlePage({
  ...props
}: PageProps<Queries.ArticlePageQuery>) {
  return <ArticleTemplate {...props} />
}

export const Head = ({
  params,
  ...props
}: HeadProps<Queries.ArticlePageQuery>) => {
  const mdx = props.data.mdx
  const meta = props.data.site?.siteMetadata
  const siteUrl = meta?.siteUrl ?? ""
  const description = mdx?.excerpt ?? meta?.description ?? ""
  const siteName = meta?.title ?? "fukke.cafe"
  const twitter = meta?.social?.twitter ?? ""

  let title = ""
  switch (params.fields__category) {
    case "tech":
      title = mdx?.frontmatter?.title ?? ""
      break
    default:
      title = mdx?.fields?.name ?? ""
      break
  }

  const url = `${siteUrl}${props.location.pathname}`
  const image = `https://fukke-blog-og-image.vercel.app/${title}`

  return (
    <>
      <title>{title}</title>
      <html lang="ja" />
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta name="image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="article" />
      <meta property="og:title" content={title} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="twitter:site" content={twitter} />
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
    </>
  )
}

export const query = graphql`
  query ArticlePage($id: String) {
    site {
      siteMetadata {
        title
        siteUrl
        description
        author
        social {
          twitter
        }
      }
    }
    mdx(id: { eq: $id }) {
      ...MdxArticle
    }
  }
`
