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

export const list = css`
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  gap: 10px;
`;

export const article = css`
  background-color: var(--white);
  border: 1px solid var(--light-gray-1);
  border-radius: 8px;
  padding: 20px;
  color: var(--dark-gray-1);
  word-break: break-all;
  :hover {
    opacity: 0.8;
  }
`;

export const container = css`
  padding: 24px;
`;
