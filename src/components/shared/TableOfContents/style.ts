import { css, keyframes } from '@emotion/react';

const open = keyframes`
  0% { opacity: 0; transform: translateY(8px); }
  100% { opacity: 1; transform: translateY(0); }
`;

const close = keyframes`
  0% { opacity: 1; }
  100% { opacity: 0; }
`;

export const container = css`
  display: grid;
  gap: 8px;
  [data-reach-disclosure-panel][data-state='open'] {
    animation: ${open} 0.25s ease-out;
  }
  [data-reach-disclosure-panel][data-state='collapsed'] {
    animation: ${close} 0.25s ease-out;
  }
`;

export const list = css`
  display: grid;
  gap: 4px;
  max-height: calc(100vh - 200px);
  overflow-y: auto;
  background: var(--bg-elev);
  border: 1px solid var(--rule);
  border-radius: var(--r-md);
  padding: 8px;
`;

export const first = css``;
export const end = css``;

export const content = css`
  background: var(--bg);
  padding: 12px 14px;
  display: flex;
  border-radius: var(--r-sm);
  border: 1px solid var(--rule-soft);
  justify-content: space-between;
  align-items: center;
  font-family: var(--font-mono);
  font-size: 12px;
  color: var(--fg);
  text-decoration: none;
  border-width: 1px;
  &:hover {
    border-color: var(--accent);
  }
`;

export const bottom = css`
  position: relative;
  background: var(--bg-elev);
  border: 1px solid var(--rule);
  cursor: pointer;
  box-shadow: var(--shadow-md);
  ::after {
    content: '';
    width: 16px;
    height: 3px;
    position: absolute;
    background: var(--accent);
    bottom: 0;
    left: 16px;
    border-radius: 2px 2px 0 0;
  }
`;

export const index = css`
  margin-right: 12px;
  color: var(--accent);
  font-weight: 600;
  font-family: var(--font-mono);
`;

export const text = css`
  font-size: 12px;
  font-weight: 500;
  font-family: var(--font-mono);
  display: inline-flex;
  align-items: center;
`;

export const toggle = css`
  display: grid;
  place-items: center;
  background: var(--accent);
  color: var(--accent-fg);
  width: 22px;
  height: 22px;
  border-radius: 50%;
`;
