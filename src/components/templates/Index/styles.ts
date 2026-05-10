import { css } from '@emotion/react';
import { breakpoints } from '../../../styles/breakpoint';

export const container = css`
  max-width: 1080px;
  margin: 0 auto;
`;

export const hero = css`
  padding: 40px 20px 32px;
  border-bottom: 1px solid var(--rule);
  display: grid;
  grid-template-columns: 1fr;
  gap: 32px;
  @media (min-width: ${breakpoints.md}px) {
    padding: 56px 48px 40px;
    grid-template-columns: 1fr 280px;
    gap: 48px;
  }
`;

export const eyebrow = css`
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: var(--tracking-caps);
  color: var(--fg-soft);
  text-transform: uppercase;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  margin-bottom: 14px;
`;

export const eyebrowDot = css`
  color: var(--accent);
`;

export const title = css`
  margin: 0;
  font-family: var(--font-serif);
  font-weight: 700;
  font-size: 28px;
  line-height: 1.35;
  letter-spacing: -0.015em;
  color: var(--fg);
  max-width: 640px;
  @media (min-width: ${breakpoints.md}px) {
    font-size: 38px;
  }
`;

export const bio = css`
  margin: 20px 0 0;
  max-width: 560px;
  font-size: 15.5px;
  line-height: 1.85;
  color: var(--fg-muted);
`;

export const ctaRow = css`
  margin-top: 24px;
  display: flex;
  gap: 8px;
  align-items: center;
  flex-wrap: wrap;
`;

export const ctaPrimary = css`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 16px;
  background: var(--fg);
  font-family: var(--font-mono);
  font-size: 12px;
  border-radius: var(--r-sm);
  border: 0;
  text-decoration: none;
  transition: background 160ms ease-out;
  &,
  &:visited {
    color: var(--bg);
  }
  &:hover,
  &:visited:hover {
    background: var(--accent);
    color: var(--accent-fg);
  }
`;

export const ctaSecondary = css`
  padding: 10px 14px;
  font-family: var(--font-mono);
  font-size: 12px;
  color: var(--fg-muted);
  border: 1px solid var(--rule);
  border-radius: var(--r-sm);
  text-decoration: none;
  transition: border-color 160ms ease-out, color 160ms ease-out;
  &:hover {
    color: var(--accent);
    border-color: var(--accent);
  }
`;

export const nowCard = css`
  background: var(--bg-elev);
  border: 1px solid var(--rule);
  border-radius: var(--r-md);
  padding: 18px;
`;

export const nowList = css`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const nowItem = css`
  display: flex;
  gap: 8px;
  font-size: 13px;
  line-height: 1.7;
  color: var(--fg-muted);
`;

export const nowDash = css`
  color: var(--accent);
  font-family: var(--font-mono);
  flex: 0 0 auto;
`;

export const dottedDivider = css`
  background-image: linear-gradient(to right, var(--rule) 50%, transparent 50%);
  background-size: 6px 1px;
  background-repeat: repeat-x;
  height: 1px;
  margin: 16px 0;
`;

export const statRow = css`
  display: grid;
  grid-template-columns: 1fr;
  gap: 12px;
`;

export const statValue = css`
  font-family: var(--font-mono);
  font-size: 24px;
  line-height: 1.1;
  color: var(--fg);
  letter-spacing: -0.01em;
`;

export const statLabel = css`
  margin-top: 4px;
  font-family: var(--font-mono);
  font-size: 10px;
  letter-spacing: var(--tracking-caps);
  text-transform: uppercase;
  color: var(--fg-soft);
`;

export const section = css`
  padding: 40px 20px;
  border-bottom: 1px solid var(--rule);
  @media (min-width: ${breakpoints.md}px) {
    padding: 40px 48px;
  }
`;

export const sectionHeader = css`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const seeAll = css`
  font-family: var(--font-mono);
  font-size: 11px;
  color: var(--fg-muted);
  border: 0;
  text-decoration: none;
  &:hover {
    color: var(--accent);
  }
`;

export const grid3 = css`
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
  @media (min-width: ${breakpoints.sm}px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: ${breakpoints.md}px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export const tagsWrap = css`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`;
