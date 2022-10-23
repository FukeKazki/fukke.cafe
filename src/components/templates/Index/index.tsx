import { DetailLayout } from '../../layouts/Detail';
import * as styles from './styles';
import {
  GatsbyImage, getImage
} from 'gatsby-plugin-image';
import { useTechArticles } from '../../../hooks/useTechArticles';

export const IndexTemplate = () => {
  const article = useTechArticles()
  const top = article[0]
  console.log(top)

  const image = getImage(top.image)
  return (
    <DetailLayout>
      <div css={styles.container}>
        <h1 css={styles.title}>@fukke0906のプログラミング日記</h1>
        <div css={styles.description}>
          <p>技術ブログや日報を書きます。</p>
        </div>
        <GatsbyImage image={image} alt="あはあは"/>
      </div>
    </DetailLayout>
  );
};
