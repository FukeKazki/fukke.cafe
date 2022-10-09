import { Link } from 'gatsby';
import { Fragment } from 'react';
import { useTechArticles } from '../../../hooks/useTechArticles';
import { Header } from '../../shared/Header';
import { Navigation } from '../../shared/Navigation';
import { SideMenu } from '../../shared/SideMenu';
import * as styles from './styles';

export const TechTemplate = () => {
  const articles = useTechArticles();
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
                  <Link to={`/tech/${article.fields?.name}`}>
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
