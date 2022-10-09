import { MDXProvider } from '@mdx-js/react';
import { PageProps } from 'gatsby';
import { Fragment } from 'react';
import { Header } from '../../shared/Header';
import { Navigation } from '../../shared/Navigation';
import { SideMenu } from '../../shared/SideMenu';
import * as styles from './styles';

export const ArticleTemplate = ({
  data,
  children
}: PageProps<Queries.ArticlePageQuery>) => {
  const { mdx } = data;
  return (
    <Fragment>
      <header>
        <Header />
        <Navigation />
      </header>
      <main css={styles.main}>
        <div css={styles.sideMenu}>
          <SideMenu />
        </div>
        <div css={styles.body}>
          <MDXProvider>{children}</MDXProvider>
        </div>
      </main>
    </Fragment>
  );
};
