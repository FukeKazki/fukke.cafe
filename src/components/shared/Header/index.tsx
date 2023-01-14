import { Link } from 'gatsby';
import { Fragment } from 'react';
import * as styles from './style';

const Header = () => {
  return (
    <Fragment>
      <div css={styles.header}>
        <Link to='/'>
          <h3 css={styles.title}>fukke.cafe</h3>
        </Link>
        <nav css={styles.navigation}>
          <ul css={styles.list}>
            <li css={styles.item}>
              <Link
                partiallyActive
                to='/tech'
                css={styles.link}
                activeStyle={{
                  fontWeight: 'bold',
                  color: 'var(--dark-gray-1)'
                }}
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
                activeStyle={{
                  fontWeight: 'bold',
                  color: 'var(--dark-gray-1)'
                }}
              >
                <p>日報</p>
              </Link>
            </li>
            <li css={styles.item}>
              <Link
                partiallyActive
                to='/other/plan'
                css={styles.link}
                activeStyle={{
                  fontWeight: 'bold',
                  color: 'var(--dark-gray-1)'
                }}
              >
                <p>目標</p>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </Fragment>
  );
};

export default Header;
