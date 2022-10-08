import type { HeadFC } from 'gatsby';
import { Fragment } from 'react';
import { Header } from '../components/shared/Header';
import { Navigation } from '../components/shared/Navigation';
import { SideMenu } from '../components/shared/SideMenu';

export default function IndexPage() {
  return (
    <Fragment>
      <header>
        <Header />
      </header>
      <nav>
        <Navigation />
      </nav>
      <main>
        <SideMenu/>
      </main>
    </Fragment>
  );
}

export const Head: HeadFC = () => <title>プログラミング日記</title>;
