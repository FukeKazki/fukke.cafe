import { Link } from 'gatsby';
import { useTechArticles } from '../../../hooks/useTechArticles';
import { DetailLayout } from '../../layouts/Detail';
import { convertString } from '../article';
import * as styles from './styles';

export const TechTemplate = () => {
  const articles = useTechArticles();
  return (
    <DetailLayout>
      <div css={styles.container}>
        <h1 css={styles.title}>技術ブログ一覧</h1>
        <div css={styles.description}>
          <p>経験から生まれた知識です。</p>
        </div>

        <ul css={styles.list}>
          {articles.map(article => {
            return (
              <li key={article.id}>
                <Link to={`/tech/${article.fields?.name}`}>
                  <article css={styles.article}>
                    <p>{convertString(article.fields?.name)}</p>
                    <p>{article.frontmatter?.title}</p>
                    <p>{article.excerpt}</p>
                  </article>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </DetailLayout>
  );
};
