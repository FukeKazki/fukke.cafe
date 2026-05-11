import type { HeadProps, PageProps } from "gatsby"
import { graphql } from "gatsby"

import { ArticleTemplate } from "../../components/templates/article"

const formatPublishedDate = (
  date: string | null | undefined,
  name: string | null | undefined,
): string | undefined => {
  if (date) return date
  if (name && /^\d{8}$/.test(name)) {
    return `${name.slice(0, 4)}-${name.slice(4, 6)}-${name.slice(6, 8)}`
  }
  return undefined
}

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

  const datePublished = formatPublishedDate(
    mdx?.frontmatter?.date,
    mdx?.fields?.name,
  )

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description,
    image,
    mainEntityOfPage: url,
    url,
    ...(datePublished && {
      datePublished,
      dateModified: datePublished,
    }),
    author: {
      "@type": "Person",
      name: meta?.author ?? "FukeKazki",
    },
    publisher: {
      "@type": "Organization",
      name: siteName,
    },
  }

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
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD は dangerouslySetInnerHTML が公式パターン
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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
