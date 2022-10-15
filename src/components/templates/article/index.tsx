import { MDXProvider } from '@mdx-js/react';
import { Link, PageProps } from 'gatsby';
import { Fragment } from 'react';
import { useRecommendArticles } from '../../../hooks/useRecommendArticles';
import { DetailLayout } from '../../layouts/Detail';
import { TwitterIcon } from '../../shared/icons/TwitterIcon';
import * as styles from './styles';

export const convertString = (v: string | null | undefined): string => {
  if (!v) return '';
  return `${v.substring(0, 4)}/${v.substring(4, 6)}/${v.substring(6, 8)}`;
};

export const ArticleTemplate = ({
  data,
  children,
  ...props
}: PageProps<Queries.ArticlePageQuery>) => {
  const { mdx } = data;
  const recommendArticles = useRecommendArticles({
    category: mdx?.frontmatter?.category ?? 'その他',
    id: mdx?.id ?? ''
  });
  const title = mdx?.fields?.category === 'tech' ? mdx?.frontmatter?.title : `${convertString(mdx?.fields?.name)}の日報`
  return (
    <DetailLayout>
      <div css={styles.contents}>
        <div css={styles.body}>
          <h1 css={styles.title}>{title}</h1>
          <MDXProvider
            css={styles.text}
            components={{
              h1: props => <h2 {...props} css={styles.mdx.h1} />,
              h2: props => <h2 {...props} css={styles.mdx.h2} />,
              h3: props => <h2 {...props} css={styles.mdx.h3} />,
              p: props => <div {...props} css={styles.mdx.p} />,
              ul: props => <ul {...props} css={styles.mdx.ul} />,
              li: props => <li {...props} css={styles.mdx.li} />,
              a: props => <a {...props} css={styles.mdx.a} target="__blank" />
            }}
          >
            {children}
          </MDXProvider>
          {/* シェア */}
          <div css={styles.share}>
            <a href={`http://twitter.com/share?url=${props.location.href}&text=${title}`} target="__blank">
              <span css={styles.twitter}><TwitterIcon/>ツイート</span>
            </a>
          </div>
          {/* 下部 */}
          <div css={styles.recommend}>
            <h3 css={styles.recommendTitle}>その他の記事</h3>
            <ul css={styles.recommendList}>
              {recommendArticles.map(article => (
                <li key={article.id}>
                  <Link to={`/tech/${article.fields?.name}`}>
                    <div css={styles.recommendArticle}>
                      <p>{convertString(article.fields?.name)}</p>
                      <p>{article.frontmatter?.title}</p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div css={styles.sub}>
          <div css={styles.subContainer}>
            <p css={styles.publishDate}>
              公開日 {convertString(mdx?.fields?.name)}
            </p>

            {(mdx?.tableOfContents?.items as [
              { title: string; url: string }
            ]) && (
              <Fragment>
                <p css={styles.mokuji}>目次</p>
                <ul css={styles.toc}>
                  {(
                    mdx?.tableOfContents?.items as [
                      { title: string; url: string }
                    ]
                  ).map((item, index) => (
                    <li key={`${item.title}-${index}`}>
                      <Link to={item.url}>{item.title}</Link>
                    </li>
                  ))}
                </ul>
              </Fragment>
            )}
          </div>
        </div>
      </div>
      <div css={styles.footer}>
        <p>Thanks you for reading.</p>
      </div>
    </DetailLayout>
  );
};
