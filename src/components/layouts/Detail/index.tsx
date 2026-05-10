import { Slice } from 'gatsby';
import { ComponentPropsWithRef, Fragment, ReactNode } from 'react';
import { Footer } from '../../shared/Footer';
import * as styles from './styles';

interface Props extends ComponentPropsWithRef<'div'> {
  children: ReactNode;
}

export const DetailLayout = ({ children }: Props) => {
  return (
    <Fragment>
      <Slice alias='header' />
      <main css={styles.main}>{children}</main>
      <Footer />
    </Fragment>
  );
};
