import { DetailLayout } from '../../layouts/Detail';
import * as styles from './styles';
import {
  GatsbyImage, getImage, ImageDataLike
} from 'gatsby-plugin-image';
import { useTechArticles } from '../../../hooks/useTechArticles';
import { Link } from 'gatsby';
import { useWebfrontendArticles } from '../../../hooks/useWebfrontendArticles';

export const IndexTemplate = () => {
  const [top, ...articles] = useTechArticles()
  const topImage = getImage(top.thumbnail?.childImageSharp?.gatsbyImageData ?? null)

  const webfrontArticles = useWebfrontendArticles()

  return (
    <DetailLayout>
      <div css={styles.container}>
        <div>
          {topImage && (
            <Link to={`/tech/${top.fields?.name}`}>
              <GatsbyImage objectFit='cover' css={styles.topArticle} image={topImage} alt="あはあは"/>
            </Link>
          )}
        </div>
        <section>
          <h3>ウェブフロント</h3>
          <ul>
            {webfrontArticles.slice(0, 5).map(article => {
              const image = getImage(article.thumbnail?.childImageSharp?.gatsbyImageData ?? null)
              return (
                <li key={article.id}>
                  {image && <GatsbyImage objectFit='cover' css={styles.topArticle} image={image} alt='ui'/>}
                  <p>{article.frontmatter?.title}</p>
                </li>
              )
            })}
          </ul>
        </section>
      </div>
    </DetailLayout>
  );
};
