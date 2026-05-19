import { Link } from "gatsby"

import * as styles from "./style"

const activeStyle = {
  color: "var(--fg)",
  textDecoration: "underline",
  textUnderlineOffset: "4px",
  textDecorationThickness: "1px",
  textDecorationColor: "var(--accent)",
} as const

const Header = () => {
  return (
    <div css={styles.header}>
      <Link to="/" css={styles.logo} aria-label="tech.fukke.cafe">
        <span css={styles.logoMain}>tech</span>
        <span css={styles.logoSub}>.fukke.cafe</span>
      </Link>
      <nav css={styles.nav}>
        <ul css={styles.list}>
          <li css={styles.item}>
            <Link to="/" css={styles.link} activeStyle={activeStyle}>
              Home
            </Link>
          </li>
          <li css={styles.item}>
            <Link
              partiallyActive
              to="/list"
              css={styles.link}
              activeStyle={activeStyle}
            >
              List
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Header
