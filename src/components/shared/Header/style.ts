import { css } from "@emotion/react"

import { breakpoints } from "../../../styles/breakpoint"

export const header = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 20px;
  border-bottom: 1px solid var(--rule);
  background: var(--bg);
  @media (min-width: ${breakpoints.md}px) {
    padding: 20px 32px;
  }
`

export const logo = css`
  display: inline-flex;
  align-items: baseline;
  gap: 4px;
  cursor: pointer;
  border: 0;
`

export const logoMain = css`
  font-family: var(--font-serif);
  font-weight: 600;
  font-size: 18px;
  color: var(--fg);
  letter-spacing: -0.02em;
`

export const logoSub = css`
  font-family: var(--font-mono);
  font-size: 12px;
  color: var(--fg-soft);
`

export const nav = css`
  display: flex;
  align-items: center;
  gap: 4px;
`

export const list = css`
  display: flex;
  align-items: center;
  gap: 0;
`

export const item = css``

export const link = css`
  display: inline-block;
  padding: 6px 10px;
  font-family: var(--font-mono);
  font-size: 12px;
  color: var(--fg-muted);
  text-decoration: none;
  border: 0;
  transition: color 160ms ease-out;
  &:hover {
    color: var(--accent);
  }
`

export const divider = css`
  width: 1px;
  height: 14px;
  background: var(--rule);
  margin: 0 6px;
`
