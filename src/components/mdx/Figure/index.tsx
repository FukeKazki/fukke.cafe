import { css } from "@emotion/react"
import type { ComponentPropsWithoutRef } from "react"

const figure = css`
  position: relative;
  display: block;
  margin: 1.8em 0;
  border-radius: var(--r-sm);
  overflow: hidden;
  border: 1px solid var(--rule);
  background: var(--bg-elev);
  line-height: 0;
`

const image = css`
  display: block;
  width: 100%;
  height: auto;
`

const altBadge = css`
  position: absolute;
  top: 10px;
  left: 10px;
  max-width: calc(100% - 20px);
  padding: 5px 10px;
  font-family: var(--font-mono);
  font-size: 10.5px;
  letter-spacing: var(--tracking-caps);
  text-transform: uppercase;
  color: var(--fg);
  background: color-mix(in oklab, var(--bg) 72%, transparent);
  backdrop-filter: blur(8px) saturate(140%);
  -webkit-backdrop-filter: blur(8px) saturate(140%);
  border: 1px solid var(--rule);
  border-radius: var(--r-sm);
  line-height: 1.3;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  pointer-events: none;
`

export const Figure = ({
  alt,
  src,
  ...rest
}: ComponentPropsWithoutRef<"img">) => {
  if (!src) return null
  return (
    <span css={figure}>
      <img css={image} src={src} alt={alt ?? ""} loading="lazy" {...rest} />
      {alt && <span css={altBadge}>{alt}</span>}
    </span>
  )
}
