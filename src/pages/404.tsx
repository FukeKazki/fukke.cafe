import { css } from "@emotion/react"
import type { HeadFC } from "gatsby"
import { Link } from "gatsby"
import { Fragment } from "react"

import { DetailLayout } from "../components/layouts/Detail"

const wrap = css`
  max-width: 720px;
  margin: 0 auto;
  padding: 80px 20px;
  text-align: center;
`

const code = css`
  font-family: var(--font-mono);
  font-weight: 500;
  font-size: 110px;
  line-height: 1;
  color: var(--accent);
  letter-spacing: -0.02em;
`

const heading = css`
  margin: 24px 0 0;
  font-family: var(--font-serif);
  font-weight: 700;
  font-size: 26px;
  color: var(--fg);
`

const shell = css`
  margin: 24px auto 0;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 10px 16px;
  background: var(--bg-elev);
  border: 1px solid var(--rule);
  border-radius: var(--r-sm);
  font-family: var(--font-mono);
  font-size: 12px;
  color: var(--fg-muted);
`

const shellPrompt = css`
  color: var(--accent);
`

const actions = css`
  margin-top: 32px;
  display: flex;
  gap: 8px;
  justify-content: center;
  flex-wrap: wrap;
`

const primary = css`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 16px;
  background: var(--fg);
  color: var(--bg);
  font-family: var(--font-mono);
  font-size: 12px;
  border-radius: var(--r-sm);
  text-decoration: none;
  border: 0;
  transition: background 160ms ease-out;
  &:hover {
    background: var(--accent);
    color: var(--accent-fg);
  }
`

const secondary = css`
  padding: 10px 14px;
  font-family: var(--font-mono);
  font-size: 12px;
  color: var(--fg-muted);
  border: 1px solid var(--rule);
  border-radius: var(--r-sm);
  text-decoration: none;
  transition: color 160ms ease-out, border-color 160ms ease-out;
  &:hover {
    color: var(--accent);
    border-color: var(--accent);
  }
`

const NotFoundPage = () => {
  return (
    <DetailLayout>
      <div css={wrap}>
        <div css={code}>404</div>
        <h1 css={heading}>このページは見つかりません</h1>
        <div css={shell}>
          <span css={shellPrompt}>$</span>
          <span>cd ~ &amp;&amp; ls posts/</span>
        </div>
        <div css={actions}>
          <Link to="/" css={primary}>
            ← トップへ戻る
          </Link>
          <Link to="/list" css={secondary}>
            記事一覧
          </Link>
        </div>
      </div>
    </DetailLayout>
  )
}

export default NotFoundPage

export const Head: HeadFC = () => (
  <Fragment>
    <title>Not found — tech.fukke.cafe</title>
    <html lang="ja" />
  </Fragment>
)
