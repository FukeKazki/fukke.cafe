import { css } from '@emotion/react';
import { breakpoints } from '../../../styles/breakpoint';

export const container = css`
  padding-left: 8px;
  padding-right: 8px;
  @media (min-width: ${breakpoints.lg}px) {
    padding: 24px;
  }
`;

export const topArticle = css`
  height: 202px;
  border-radius: 8px;
`;