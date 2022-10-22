import { Link } from 'gatsby';
import { Fragment } from 'react';
import * as styles from './style';

export const Header = () => {
  return (
    <Fragment>
      <div css={styles.header}>
        <Link to='/'>
          <h3 css={styles.title}>ふっけめも</h3>
        </Link>

        <ul css={styles.navigation}>
          <li css={styles.item}>
            <div>
              <Link
                partiallyActive
                to='/tech'
                activeStyle={{ fontWeight: 'bold', color: 'var(--primary)' }}
              >
                <p>Tech</p>
              </Link>
            </div>
          </li>
          <li css={styles.item}>
            <div>
              <Link
                partiallyActive
                to='/daily'
                activeStyle={{ fontWeight: 'bold', color: 'var(--primary)' }}
              >
                <p>Daily</p>
              </Link>
            </div>
          </li>
          <li css={styles.item}>
            <div>
              <Link
                partiallyActive
                to='/portfolio'
                activeStyle={{ fontWeight: 'bold', color: 'var(--primary)' }}
              >
                <p>PortFolio</p>
              </Link>
            </div>
          </li>
        </ul>
      </div>
    </Fragment>
  );
};
