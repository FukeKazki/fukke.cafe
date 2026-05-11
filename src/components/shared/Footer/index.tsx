import { css } from "@emotion/react"

import { useSiteMetadata } from "../../../hooks/useSiteMetadata"
import { breakpoints } from "../../../styles/breakpoint"

const footer = css`
  padding: 32px 20px;
  border-top: 1px solid var(--rule);
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 24px;
  flex-wrap: wrap;
  color: var(--fg-soft);
  font-family: var(--font-mono);
  font-size: 11px;
  background: var(--bg);
  @media (min-width: ${breakpoints.md}px) {
    padding: 32px 48px;
  }
`

const metaText = css`
  color: var(--fg-muted);
`

const tagline = css`
  margin-top: 4px;
`

const links = css`
  display: flex;
  gap: 14px;
  align-items: center;
`

const link = css`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  color: var(--fg-muted);
  border: 0;
  text-decoration: none;
  transition: color 160ms ease-out;
  &:hover {
    color: var(--accent);
  }
`

const Footer = () => {
  const meta = useSiteMetadata()
  const author = meta?.author ?? "FukeKazki"
  const github = meta?.social?.github ?? "https://github.com/FukeKazki"
  const twitterHandle = (meta?.social?.twitter ?? "@fukke0906").replace(/^@/, "")

  return (
    <footer css={footer}>
      <div>
        <div css={metaText}>© 2021–{new Date().getFullYear()} {author}</div>
        <div css={tagline}>
          fukke.cafe — field notes from a working engineer.
        </div>
      </div>
      <div css={links}>
        <a href={github} target="_blank" rel="noreferrer" css={link}>
          GitHub
        </a>
        <a
          href={`https://twitter.com/${twitterHandle}`}
          target="_blank"
          rel="noreferrer"
          css={link}
        >
          Twitter
        </a>
      </div>
    </footer>
  )
}

export default Footer
