import { Link } from 'gatsby';
import { useDailyArticles } from '../../../hooks/useDailyArticles';
import { DetailLayout } from '../../layouts/Detail';
import { convertString } from '../article';
import * as styles from './styles';

export const DailyTemplate = () => {
  const articles = useDailyArticles();
  return (
    <DetailLayout>
      <div css={styles.container}>
        <h1 css={styles.title}>日報一覧</h1>
        <div css={styles.description}>
          <p>毎日、YWK(やったこと、わかったこと、こまったこと)を投稿します。</p>
          <p>日報の中からまとまった知識を技術ブログにしていく予定です。</p>
        </div>

        <ul css={styles.list}>
          {articles.map(article => {
            return (
              <li key={article.id}>
                <Link to={`/daily/${article.fields?.name}`}>
                  <article css={styles.article}>
                    <p>{convertString(article.fields?.name)}</p>
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
