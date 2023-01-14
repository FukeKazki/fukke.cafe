import { Slice } from 'gatsby';
import {
  ComponentPropsWithRef,
  Fragment,
  ReactNode,
  UIEventHandler,
  useEffect,
  useRef
} from 'react';
import { SideMenu } from '../../shared/SideMenu';
import { TopBar } from '../../shared/TopBar';
import * as styles from './styles';

interface Props extends ComponentPropsWithRef<'div'> {
  children: ReactNode;
}

export const DetailLayout = ({ children, ...props }: Props) => {
  const scrollMenu = useRef<HTMLDivElement>(null);

  const onScroll: UIEventHandler<HTMLDivElement> = e => {
    sessionStorage.setItem(
      'side-menu-scroll',
      e.currentTarget.scrollTop.toString()
    );
  };

  useEffect(() => {
    const scrollTop = sessionStorage.getItem('side-menu-scroll');
    scrollMenu.current?.scrollTo(0, Number(scrollTop));
  }, []);

  return (
    <Fragment>
      <header>
        <TopBar />
        <Slice alias='header' />
      </header>
      <main css={styles.main}>
        <div css={styles.sideMenu}>
          <div css={styles.scroll} onScroll={onScroll} ref={scrollMenu}>
            <SideMenu />
            <footer css={styles.footer}>
              <p>
                created by{' '}
                <a href='https://twitter.com/fukke0906' target='__blank'>
                  @fukke0906
                </a>
              </p>
            </footer>
          </div>
        </div>
        <div css={styles.contents}>{children}</div>
      </main>
    </Fragment>
  );
};
