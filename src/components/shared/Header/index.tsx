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
      </div>
    </Fragment>
  );
};

export default Header;
