import { Link } from 'gatsby';
import { useDailyArticles } from '../../../hooks/useDailyArticles';
import { DetailLayout } from '../../layouts/Detail';

export const DailyTemplate = () => {
  const articles = useDailyArticles();
  return (
    <DetailLayout>
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
    </DetailLayout>
  );
};
