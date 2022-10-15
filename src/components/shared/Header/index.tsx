import { Link } from 'gatsby';
import { Fragment } from 'react';
import * as styles from './style';

export const Header = () => {
  return (
    <Fragment>
      <div css={styles.header}>
        <Link to='/'>
          <h3 css={styles.title}>プログラミング日記</h3>
        </Link>
      </div>
    </Fragment>
  );
};
