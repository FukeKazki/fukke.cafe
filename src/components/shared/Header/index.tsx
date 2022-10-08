import { Fragment } from 'react';
import * as styles from './style';

export const Header = () => {
  return (
    <Fragment>
      <div css={styles.header}>
        <h3 css={styles.title}>プログラミング日記</h3>
      </div>
    </Fragment>
  );
};
