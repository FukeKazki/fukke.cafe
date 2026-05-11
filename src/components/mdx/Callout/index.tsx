import { css } from "@emotion/react"
import type { ReactNode } from "react"

type Props = {
  emoji?: string
  children: ReactNode
}

const wrap = css`
  margin: 20px 0;
  padding: 16px 18px;
  background: var(--bg-elev);
  border: 1px solid var(--rule);
  border-left: 3px solid var(--accent);
  border-radius: var(--r-sm);
  display: flex;
  gap: 14px;
  align-items: flex-start;
  & > div > p {
    margin: 0;
  }
  & > div > p + p {
    margin-top: 8px;
  }
`

const icon = css`
  flex: 0 0 auto;
  font-size: 20px;
  line-height: 1.4;
`

export const Callout = ({ emoji = "💡", children }: Props) => (
  <aside css={wrap}>
    <span css={icon} aria-hidden>
      {emoji}
    </span>
    <div>{children}</div>
  </aside>
)
