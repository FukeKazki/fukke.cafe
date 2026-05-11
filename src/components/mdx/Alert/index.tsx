import { css } from "@emotion/react"
import type { ReactNode } from "react"

type Variant = "info" | "warn" | "error"

type Props = {
  variant?: Variant
  title?: string
  children: ReactNode
}

const palette: Record<
  Variant,
  { bg: string; border: string; text: string; label: string }
> = {
  info: {
    bg: "color-mix(in srgb, var(--accent) 6%, var(--bg))",
    border: "color-mix(in srgb, var(--accent) 28%, var(--rule))",
    text: "var(--fg)",
    label: "INFO",
  },
  warn: {
    bg: "color-mix(in srgb, #c97d3a 8%, var(--bg))",
    border: "color-mix(in srgb, #c97d3a 32%, var(--rule))",
    text: "var(--fg)",
    label: "WARN",
  },
  error: {
    bg: "color-mix(in srgb, #d04848 8%, var(--bg))",
    border: "color-mix(in srgb, #d04848 32%, var(--rule))",
    text: "var(--fg)",
    label: "ERROR",
  },
}

const wrap = (v: Variant) => {
  const p = palette[v]
  return css`
    margin: 20px 0;
    padding: 14px 16px;
    background: ${p.bg};
    border: 1px solid ${p.border};
    border-radius: var(--r-sm);
    color: ${p.text};
    font-size: 14px;
    line-height: 1.7;
    & > p {
      margin: 0;
    }
    & > p + p {
      margin-top: 8px;
    }
  `
}

const header = css`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 6px;
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: 0.06em;
  color: var(--fg-muted);
`

const tag = (v: Variant) => {
  const p = palette[v]
  return css`
    color: ${p.text};
    font-weight: 600;
  `
}

export const Alert = ({ variant = "info", title, children }: Props) => (
  <div css={wrap(variant)} role="note">
    <div css={header}>
      <span css={tag(variant)}>{palette[variant].label}</span>
      {title && <span>{title}</span>}
    </div>
    <div>{children}</div>
  </div>
)
