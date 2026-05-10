import { Link } from 'gatsby';
import { Fragment } from 'react';
import * as styles from './style';

const activeStyle = {
  color: 'var(--fg)',
  textDecoration: 'underline',
  textUnderlineOffset: '4px',
  textDecorationThickness: '1px',
  textDecorationColor: 'var(--accent)'
} as const;

const Header = () => {
  return (
    <Fragment>
      <div css={styles.header}>
        <Link to='/' css={styles.logo} aria-label='fukke.cafe'>
          <span css={styles.logoMain}>fukke</span>
          <span css={styles.logoSub}>.cafe</span>
        </Link>
        <nav css={styles.nav}>
          <ul css={styles.list}>
            <li css={styles.item}>
              <Link to='/' css={styles.link} activeStyle={activeStyle}>
                Home
              </Link>
            </li>
            <li css={styles.item}>
              <Link
                partiallyActive
                to='/tech'
                css={styles.link}
                activeStyle={activeStyle}
              >
                Tech
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </Fragment>
  );
};

export default Header;
