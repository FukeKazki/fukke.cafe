import { Link } from 'gatsby';
import { Fragment } from 'react';
import * as styles from './styles';

export const Navigation = () => {
  return (
    <Fragment>
      <div css={styles.navigation}>
        <ul css={styles.list}>
          <li css={styles.item}>
            <Link to='/tech'>
              <p>技術</p>
            </Link>
          </li>
          <li css={styles.item}>
            <p>ブログ</p>
          </li>
          <li css={styles.item}>
            <Link to='/daily'>
              <p>日記</p>
            </Link>
          </li>
          <li css={styles.item}>
            <p>ポートフォリオ</p>
          </li>
        </ul>
      </div>
    </Fragment>
  );
};
