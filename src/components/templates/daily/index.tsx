import { Link } from 'gatsby';
import { Fragment } from 'react';
import { useDailyArticles } from '../../../hooks/useDailyArticles';
import { Header } from '../../shared/Header';
import { Navigation } from '../../shared/Navigation';
import { SideMenu } from '../../shared/SideMenu';
import * as styles from './styles';

export const DailyTemplate = () => {
  const articles = useDailyArticles();
  return (
    <Fragment>
      <header>
        <Header />
      </header>
      <nav>
        <Navigation />
      </nav>
      <main css={styles.main}>
        <div css={styles.sideMenu}>
          <SideMenu />
        </div>
        <div css={styles.body}>
          <ul>
            {articles.map(article => {
              return (
                <li key={article.id}>
                  <Link to={`/daily/${article.fields?.name}`}>
                    <p>{article.frontmatter?.title}</p>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </main>
    </Fragment>
  );
};
