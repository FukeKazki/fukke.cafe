import { css } from "@emotion/react"

import { breakpoints } from "../../../styles/breakpoint"

export const wrapper = css`
  max-width: 1240px;
  margin: 0 auto;
  padding: 32px 20px 64px;
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 32px;
  @media (min-width: ${breakpoints.md}px) {
    padding: 48px 32px 80px;
    grid-template-columns: minmax(0, 1fr) 220px;
    column-gap: 48px;
  }
`

export const body = css`
  min-width: 0;
  max-width: 720px;
  margin: 0 auto;
  width: 100%;
`

export const headerMeta = css`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 16px;
  flex-wrap: wrap;
`

export const metaText = css`
  font-family: var(--font-mono);
  font-size: 11px;
  color: var(--fg-soft);
`

export const title = css`
  margin: 0;
  font-family: var(--font-serif);
  font-weight: 700;
  font-size: 26px;
  line-height: 1.4;
  letter-spacing: -0.01em;
  color: var(--fg);
  @media (min-width: ${breakpoints.md}px) {
    font-size: 34px;
  }
`

export const excerpt = css`
  margin-top: 14px;
  font-size: 15px;
  color: var(--fg-muted);
  line-height: 1.85;
`

export const headerRule = css`
  margin: 20px 0;
  border-top: 1px solid var(--rule);
`

export const text = css`
  color: var(--fg);
`

export const mdx = {
  h1: css`
    margin: 2em 0 0.6em;
    font-family: var(--font-serif);
    font-weight: 700;
    font-size: 24px;
    line-height: 1.4;
    color: var(--fg);
    letter-spacing: -0.01em;
  `,
  h2: css`
    margin: 2em 0 0.6em;
    font-family: var(--font-serif);
    font-weight: 700;
    font-size: 22px;
    line-height: 1.4;
    color: var(--fg);
    letter-spacing: -0.01em;
  `,
  h3: css`
    margin: 1.6em 0 0.5em;
    font-family: var(--font-serif);
    font-weight: 600;
    font-size: 18px;
    line-height: 1.45;
    color: var(--fg);
  `,
  p: css`
    margin: 0 0 1.3em;
    font-family: var(--font-serif);
    font-size: 16px;
    line-height: 1.95;
    color: var(--fg);
  `,
  ul: css`
    margin: 0 0 1.3em;
    padding-left: 22px;
    color: var(--fg);
    font-size: 16px;
    line-height: 1.85;
  `,
  li: css`
    list-style: disc;
    margin-bottom: 0.4em;
  `,
  a: css`
    color: var(--link);
    border-bottom: 1px solid
      color-mix(in oklab, var(--link) 30%, transparent);
    transition: color 160ms ease-out, border-color 160ms ease-out;
    &:hover {
      color: var(--accent);
      border-bottom-color: var(--accent);
    }
  `,
  blockquote: css`
    margin: 1.4em 0;
    padding: 8px 18px;
    border-left: 3px solid var(--accent);
    color: var(--fg-muted);
    font-style: italic;
    font-size: 15px;
  `,
}

export const sub = css`
  display: none;
  @media (min-width: ${breakpoints.md}px) {
    display: block;
  }
`

export const subContainer = css`
  position: sticky;
  top: 24px;
`

export const tocEyebrow = css`
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: var(--tracking-caps);
  color: var(--fg-soft);
  text-transform: uppercase;
  margin-bottom: 12px;
`

export const tocList = css`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
`

export const tocItem = (active: boolean, passed: boolean) => css`
  display: flex;
  align-items: stretch;
  gap: 10px;
  min-height: 26px;
  position: relative;
  &::before {
    content: '';
    position: absolute;
    left: 5px;
    top: 0;
    bottom: 0;
    width: 2px;
    background: ${passed || active ? "var(--accent)" : "var(--rule)"};
  }
`

export const tocDot = css`
  position: absolute;
  left: 1px;
  top: 8px;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--accent);
  box-shadow: 0 0 0 3px var(--bg);
`

export const tocLink = (active: boolean) => css`
  display: block;
  padding: 4px 0 4px 16px;
  font-family: var(--font-mono);
  font-size: 11.5px;
  color: ${active ? "var(--fg)" : "var(--fg-soft)"};
  font-weight: ${active ? 600 : 400};
  flex: 1;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-decoration: none;
  border: 0;
  transition: color 160ms ease-out;
  &:hover {
    color: var(--accent);
  }
`

export const recommend = css`
  margin-top: 64px;
  padding-top: 32px;
  border-top: 1px solid var(--rule);
`

export const recommendTitle = css`
  margin: 0 0 18px;
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: var(--tracking-caps);
  color: var(--fg-soft);
  text-transform: uppercase;
`

export const recommendList = css`
  margin: 0;
  padding: 0;
  list-style: none;
  display: grid;
  grid-template-columns: 1fr;
  gap: 14px;
  @media (min-width: ${breakpoints.sm}px) {
    grid-template-columns: 1fr 1fr;
  }
`

export const share = css`
  margin-top: 40px;
  display: flex;
  flex-direction: row-reverse;
`

export const twitter = css`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 8px 12px;
  border: 1px solid var(--rule);
  border-radius: var(--r-sm);
  font-family: var(--font-mono);
  font-size: 11px;
  color: var(--fg-muted);
  transition: all 160ms ease-out;
  background: transparent;
  cursor: pointer;
  text-decoration: none;
  &:hover {
    border-color: var(--accent);
    color: var(--accent);
    svg {
      fill: var(--accent);
    }
  }
  svg {
    fill: var(--fg-muted);
    width: 16px;
    height: 16px;
  }
`

export const mobileToc = css`
  @media (min-width: ${breakpoints.md}px) {
    display: none;
  }
  position: fixed;
  bottom: 16px;
  left: 14px;
  right: 14px;
  z-index: 50;
`
