import { css } from '@emotion/react';
import { breakpoints } from '../../../styles/breakpoint';

export const container = css`
  max-width: 1080px;
  margin: 0 auto;
`;

export const head = css`
  padding: 32px 20px 20px;
  border-bottom: 1px solid var(--rule);
  @media (min-width: ${breakpoints.md}px) {
    padding: 32px 48px 20px;
  }
`;

export const eyebrow = css`
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: var(--tracking-caps);
  color: var(--fg-soft);
  text-transform: uppercase;
  margin-bottom: 8px;
`;

export const title = css`
  margin: 0;
  font-family: var(--font-serif);
  font-size: 28px;
  font-weight: 700;
  color: var(--fg);
  letter-spacing: -0.01em;
  @media (min-width: ${breakpoints.md}px) {
    font-size: 32px;
  }
`;

export const description = css`
  margin-top: 12px;
  font-size: 14.5px;
  color: var(--fg-muted);
  line-height: 1.85;
`;

export const filterRow = css`
  margin-top: 18px;
  display: flex;
  gap: 12px;
  align-items: center;
  flex-wrap: wrap;
`;

export const search = css`
  display: flex;
  align-items: center;
  gap: 8px;
  flex: 1;
  min-width: 240px;
  padding: 8px 12px;
  background: var(--bg-elev);
  border: 1px solid var(--rule);
  border-radius: var(--r-sm);
`;

export const searchInput = css`
  flex: 1;
  border: 0;
  outline: none;
  background: transparent;
  font-family: var(--font-mono);
  font-size: 12px;
  color: var(--fg);
  &::placeholder {
    color: var(--fg-soft);
  }
`;

export const pillRow = css`
  display: flex;
  gap: 4px;
  flex-wrap: wrap;
`;

export const pill = (active: boolean) => css`
  display: inline-flex;
  align-items: center;
  padding: 3px 10px;
  font-family: var(--font-sans);
  font-size: 12px;
  color: ${active ? 'var(--bg)' : 'var(--fg-muted)'};
  background: ${active ? 'var(--fg)' : 'transparent'};
  border: 1px solid ${active ? 'var(--fg)' : 'var(--rule)'};
  border-radius: var(--r-pill);
  cursor: pointer;
  white-space: nowrap;
  transition: all 160ms ease-out;
  &:hover {
    border-color: var(--accent);
    color: ${active ? 'var(--bg)' : 'var(--accent)'};
  }
`;

export const tagFilter = css`
  margin-top: 14px;
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  align-items: center;
`;

export const tagFilterLabel = css`
  font-family: var(--font-mono);
  font-size: 10px;
  color: var(--fg-soft);
  letter-spacing: 0.06em;
  margin-right: 4px;
`;

export const tagFilterMore = css`
  font-family: var(--font-mono);
  font-size: 11px;
  color: var(--fg-soft);
`;

export const body = css`
  padding: 24px 20px 48px;
  @media (min-width: ${breakpoints.md}px) {
    padding: 24px 48px 64px;
  }
`;

export const meta = css`
  margin-bottom: 14px;
  font-family: var(--font-mono);
  font-size: 11px;
  color: var(--fg-soft);
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 8px;
`;

export const metaStrong = css`
  color: var(--fg);
`;

export const grid = css`
  display: grid;
  grid-template-columns: 1fr;
  gap: 14px;
  @media (min-width: ${breakpoints.sm}px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const empty = css`
  padding: 48px 0;
  text-align: center;
  font-family: var(--font-mono);
  font-size: 13px;
  color: var(--fg-soft);
`;
