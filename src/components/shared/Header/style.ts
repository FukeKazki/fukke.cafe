import { css } from '@emotion/react';
import { breakpoints } from '../../../styles/breakpoint';

export const header = css`
  display: flex;
  padding: 24px 14px;
  background-color: var(--light-gray-1);
`;

export const title = css`
  font-size: 16px;
  font-weight: bold;
  color: var(--dark-gray-1);
  @media (min-width: ${breakpoints.lg}px) {
    font-size: 24px;
  }
`;
