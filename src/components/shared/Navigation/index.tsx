import { Link } from 'gatsby';
import { Fragment } from 'react';
import * as styles from './styles';

export const Navigation = () => {
  return (
    <Fragment>
      <div css={styles.navigation}>
        <ul css={styles.list}>
          <li css={styles.item}>
            <Link
              partiallyActive
              to='/tech'
              css={styles.link}
              activeStyle={{ fontWeight: 'bold', color: 'var(--dark-gray-1)' }}
            >
              <p>技術ブログ</p>
            </Link>
          </li>
          {/* <li css={styles.item}>
            <p>ブログ</p>
          </li> */}
          <li css={styles.item}>
            <Link
              partiallyActive
              to='/daily'
              css={styles.link}
              activeStyle={{ fontWeight: 'bold', color: 'var(--dark-gray-1)' }}
            >
              <p>日報</p>
            </Link>
          </li>
          {/* <li css={styles.item}>
            <p>ポートフォリオ</p>
          </li> */}
        </ul>
      </div>
    </Fragment>
  );
};
