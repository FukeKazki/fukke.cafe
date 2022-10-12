import { MDXProvider } from '@mdx-js/react';
import { Link, PageProps } from 'gatsby';
import { Fragment } from 'react';
import { DetailLayout } from '../../layouts/Detail';
import * as styles from './styles';

export const convertString = (v: string | null | undefined): string => {
  if (!v) return '';
  return `${v.substring(0, 4)}/${v.substring(4, 6)}/${v.substring(6, 8)}`;
};

export const ArticleTemplate = ({
  data,
  children
}: PageProps<Queries.ArticlePageQuery>) => {
  const { mdx } = data;
  return (
    <DetailLayout>
      <div css={styles.contents}>
        <div css={styles.body}>
          {mdx?.fields?.category === 'daily' && (
            <h1 css={styles.title}>{convertString(mdx.fields.name)}の日報</h1>
          )}
          {mdx?.fields?.category === 'tech' && (
            <h1 css={styles.title}>{mdx?.frontmatter?.title}</h1>
          )}
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
    </DetailLayout>
  );
};
