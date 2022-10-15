import { css } from '@emotion/react';
import { breakpoints } from '../../../styles/breakpoint';

export const title = css`
  font-size: 24px;
  font-weight: bold;
  color: var(--dark-gray-1);
  @media (min-width: ${breakpoints.lg}px) {
    font-size: 48px;
  }
`;

export const description = css`
  margin-top: 10px;
  font-size: 16px;
  color: var(--dark-gray-2);
`;

export const container = css`
  padding: 24px;
`;
