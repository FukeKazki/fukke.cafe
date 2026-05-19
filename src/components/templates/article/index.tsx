import { MDXProvider } from "@mdx-js/react"
import type { PageProps } from "gatsby"
import { Link } from "gatsby"
import { useState } from "react"

import { useRecommendArticles } from "../../../hooks/useRecommendArticles"
import { CounterButton } from "../../examples/CounterButton"
import { DetailLayout } from "../../layouts/Detail"
import { Alert } from "../../mdx/Alert"
import { Callout } from "../../mdx/Callout"
import { Figure } from "../../mdx/Figure"
import { PostCard } from "../../shared/PostCard"
import { TableOfContents } from "../../shared/TableOfContents"
import { Tag } from "../../shared/Tag"
import { TwitterIcon } from "../../shared/icons/TwitterIcon"

import { IntersectionHeader } from "./components/IntersectionHeader"
import * as styles from "./styles"

const shortcodes = { CounterButton, Alert, Callout }

const formatDate = (v: string | null | undefined): string => {
  if (!v) return ""
  return `${v.substring(0, 4)}-${v.substring(4, 6)}-${v.substring(6, 8)}`
}

export const ArticleTemplate = ({
  data,
  children,
  ...props
}: PageProps<Queries.ArticlePageQuery>) => {
  const { mdx } = data
  const tags = (mdx?.frontmatter?.tags ?? []).filter((t): t is string =>
    Boolean(t),
  )
  const recommendArticles = useRecommendArticles({
    tags,
    id: mdx?.id ?? "",
  })
  const title = mdx?.frontmatter?.title ?? mdx?.fields?.name

  const toc = mdx?.tableOfContents?.items as
    | { title: string; url: string }[]
    | undefined

  const [currentContent, setCurrentContent] = useState<string>(
    toc?.[0]?.title ?? "",
  )

  const inView = (inView: boolean, headingTitle?: string) => {
    if (inView && headingTitle) {
      setCurrentContent(headingTitle)
    }
  }

  const activeTocIndex = toc?.findIndex((v) => v.title === currentContent) ?? 0

  return (
    <DetailLayout>
      <div css={styles.wrapper}>
        <article css={styles.body}>
          <header>
            <div css={styles.headerMeta}>
              {tags.map((t) => (
                <Tag key={t}>#{t}</Tag>
              ))}
              <span css={styles.metaText}>{formatDate(mdx?.fields?.name)}</span>
            </div>
            <h1 css={styles.title}>{title}</h1>
            {mdx?.excerpt && <p css={styles.excerpt}>{mdx.excerpt}</p>}
            <div css={styles.headerRule} />
          </header>

          <MDXProvider
            css={styles.text}
            components={{
              h1: (hprops) => (
                <IntersectionHeader
                  {...hprops}
                  css={styles.mdx.h1}
                  inViewCallback={inView}
                />
              ),
              h2: (hprops) => (
                <IntersectionHeader
                  {...hprops}
                  css={styles.mdx.h2}
                  inViewCallback={inView}
                />
              ),
              h3: (hprops) => <h3 {...hprops} css={styles.mdx.h3} />,
              p: (pprops) => <p {...pprops} css={styles.mdx.p} />,
              ul: (uprops) => <ul {...uprops} css={styles.mdx.ul} />,
              li: (lprops) => <li {...lprops} css={styles.mdx.li} />,
              a: (aprops) => (
                <a
                  {...aprops}
                  css={styles.mdx.a}
                  target="_blank"
                  rel="noreferrer"
                />
              ),
              blockquote: (bprops) => (
                <blockquote {...bprops} css={styles.mdx.blockquote} />
              ),
              img: (iprops) => <Figure {...iprops} />,
              ...shortcodes,
            }}
          >
            {children}
          </MDXProvider>

          <div css={styles.share}>
            <a
              href={`https://x.com/intent/post?text=${encodeURIComponent(title ?? "")}&url=${encodeURIComponent(props.location.href)}`}
              target="_blank"
              rel="noreferrer"
              css={styles.twitter}
            >
              <TwitterIcon />
              Share on X
            </a>
          </div>

          {recommendArticles.length > 0 && (
            <div css={styles.recommend}>
              <h3 css={styles.recommendTitle}>Related writing</h3>
              <ul css={styles.recommendList}>
                {recommendArticles.slice(0, 4).map((article) => (
                  <li key={article.id}>
                    <PostCard
                      to={`/${article.fields?.name ?? ""}`}
                      title={article.frontmatter?.title ?? ""}
                      excerpt={article.excerpt ?? ""}
                      date={formatDate(article.fields?.name)}
                      tags={(article.frontmatter?.tags ?? []).filter(
                        (t): t is string => Boolean(t),
                      )}
                    />
                  </li>
                ))}
              </ul>
            </div>
          )}
        </article>

        <aside css={styles.sub}>
          <div css={styles.subContainer}>
            <div css={styles.tocEyebrow}>On this page</div>
            {toc && toc.length > 0 ? (
              <ol css={styles.tocList}>
                {toc.map((item, i) => {
                  const active = i === activeTocIndex
                  const passed = i < activeTocIndex
                  return (
                    <li
                      key={`${item.title}-${i}`}
                      css={styles.tocItem(active, passed)}
                    >
                      {active && <span css={styles.tocDot} />}
                      <Link to={item.url} css={styles.tocLink(active)}>
                        {item.title}
                      </Link>
                    </li>
                  )
                })}
              </ol>
            ) : (
              <p css={styles.metaText}>目次なし</p>
            )}
          </div>
        </aside>
      </div>

      {toc && toc.length > 0 && (
        <TableOfContents
          toc={toc}
          css={styles.mobileToc}
          current={{
            title: currentContent,
            index: activeTocIndex,
          }}
        />
      )}
    </DetailLayout>
  )
}
