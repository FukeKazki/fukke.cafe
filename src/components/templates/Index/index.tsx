import { DetailLayout } from '../../layouts/Detail';
import * as styles from './styles';

export const IndexTemplate = () => {
  return (
    <DetailLayout>
      <div css={styles.container}>
        <h1 css={styles.title}>@fukke0906のプログラミング日記</h1>
        <div css={styles.description}>
          <p>技術ブログや日報を書きます。</p>
        </div>
      </div>
    </DetailLayout>
  );
};
