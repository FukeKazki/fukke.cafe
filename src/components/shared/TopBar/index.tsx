import { Link } from 'gatsby';
import * as styles from './style';

export const TopBar = () => {
  return (
    <div css={styles.topBar}>
      <Link to={`/tech/20220731`}>最新記事・WASM入門</Link>
    </div>
  );
};
