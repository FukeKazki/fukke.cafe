import { ComponentPropsWithRef, Fragment, ReactNode } from 'react';
import { Header } from '../../shared/Header';
import { Navigation } from '../../shared/Navigation';
import { SideMenu } from '../../shared/SideMenu';
import { TopBar } from '../../shared/TopBar';
import * as styles from './styles';

interface Props extends ComponentPropsWithRef<'div'> {
  children: ReactNode;
}

export const DetailLayout = ({ children, ...props }: Props) => {
  return (
    <Fragment>
      <header>
        <TopBar />
        <Header />
      </header>
      <nav css={styles.nav}>
        <Navigation />
      </nav>
      <main css={styles.main}>
        <div css={styles.sideMenu}>
          <div css={styles.scroll}>
            <SideMenu />
            <footer css={styles.footer}>
              <p>created by @fukke0906</p>
            </footer>
          </div>
        </div>
        <div css={styles.contents}>{children}</div>
      </main>
    </Fragment>
  );
};
