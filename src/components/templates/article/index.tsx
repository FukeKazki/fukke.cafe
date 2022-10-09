import { MDXProvider } from '@mdx-js/react';
import { Link, PageProps } from 'gatsby';
import { Fragment } from 'react';
import { DetailLayout } from '../../layouts/Detail';
import * as styles from './styles';

export const ArticleTemplate = ({
  data,
  children
}: PageProps<Queries.ArticlePageQuery>) => {
  const { mdx } = data;
  return (
    <DetailLayout>
      <div css={styles.contents}>
        <div css={styles.body}>
          <h1 css={styles.title}>{mdx?.frontmatter?.title}</h1>
          <MDXProvider
            components={{
              h2: props => <h2 {...props} css={styles.mdx.h2} />,
              p: props => <div {...props} css={styles.mdx.p} />
            }}
          >
            {children}
          </MDXProvider>
        </div>

        <div css={styles.sub}>
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
    </DetailLayout>
  );
};
