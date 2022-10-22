import { css } from '@emotion/react';
import { breakpoints } from '../../../styles/breakpoint';

export const header = css`
  display: flex;
  height: 44px;
  align-items: center;
  padding: 0 8px;
  justify-content: space-between;
`;

export const navigation = css`
  display: flex;
`;

export const item = css`
  padding: 4px 12px;
  font-size: 14px;
  font-weight: 500;
`;

export const title = css`
  font-size: 20px;
  font-weight: bold;
  background: var(--gradient);
  background-clip: text;
  -webkit-text-fill-color: transparent;
  @media (min-width: ${breakpoints.lg}px) {
    font-size: 24px;
  }
`;
