import { Fragment, ReactNode } from "react"
import { Header } from "../../shared/Header"
import { Navigation } from "../../shared/Navigation"
import { SideMenu } from "../../shared/SideMenu"
import { TopBar } from "../../shared/TopBar"
import * as styles from './styles'

type Props = {
  children: ReactNode
}

export const DetailLayout = ({ children }: Props) => {
  return (
    <Fragment>
      <header>
        <TopBar/>
        <Header />
        <nav css={styles.nav}>
          <Navigation />
        </nav>
      </header>
      <main css={styles.main}>
        <div css={styles.sideMenu}>
          <SideMenu />
        </div>
        <div css={styles.body}>
          {children}
        </div>
      </main>
    </Fragment>
  )
}