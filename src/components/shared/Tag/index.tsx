import { css } from '@emotion/react';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  active?: boolean;
};

const base = css`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 2px 8px;
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: 0.01em;
  border-radius: var(--r-sm);
  line-height: 1.6;
  white-space: nowrap;
  background: var(--tag-bg);
  color: var(--tag-fg);
  transition: background 160ms ease-out, color 160ms ease-out;
`;

const activeStyle = css`
  background: var(--accent);
  color: var(--accent-fg);
`;

export const Tag = ({ children, active = false }: Props) => (
  <span css={[base, active && activeStyle]}>{children}</span>
);
