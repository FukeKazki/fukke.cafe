import { css } from '@emotion/react';
import { breakpoints } from '../../../styles/breakpoint';

export const header = css`
  display: flex;
  padding: 24px 14px;
  background-color: var(--light-gray-1);
  justify-content: space-between;
`;

export const title = css`
  font-size: 16px;
  font-weight: bold;
  color: var(--dark-gray-1);
  @media (min-width: ${breakpoints.lg}px) {
    font-size: 24px;
  }
`;

export const navigation = css``;

export const list = css`
  display: flex;
  gap: 20px;
  list-style: none;
`;

export const item = css``;

export const link = css`
  color: var(--dark-gray-2);
`;
