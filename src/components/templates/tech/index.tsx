import { Link } from 'gatsby';
import { useTechArticles } from '../../../hooks/useTechArticles';
import { DetailLayout } from '../../layouts/Detail';

export const TechTemplate = () => {
  const articles = useTechArticles();
  return (
    <DetailLayout>
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
    </DetailLayout>
  );
};
