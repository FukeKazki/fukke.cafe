import { css } from '@emotion/react';

export const contents = css`
  display: grid;
  grid-template: 'body sub' 1fr / minmax(calc(100vw - 460px), 1fr) 232px;
`;

export const body = css`
  grid-area: body;
  width: 100%;
  padding: 24px;
`;

export const sub = css`
  border-left: 1px solid var(--light-gray-1);
  grid-area: sub;
  padding: 24px;
`;

export const title = css`
  font-size: 48px;
  font-weight: bold;
  color: var(--dark-gray-1);
`;

export const mdx = {
  h2: css`
    margin-top: 24px;
    font-size: 32px;
    font-weight: 500;
    color: var(--dark-gray-1);
  `,
  p: css`
    margin-top: 16px;
    font-size: 16px;
    color: var(--dark-gray-2);
  `
};

export const toc = css`
  margin-top: 10px;
  font-size: 14px;
  display: grid;
  gap: 8px;
`;

export const mokuji = css`
  font-size: 14px;
  font-weight: 600;
`;
