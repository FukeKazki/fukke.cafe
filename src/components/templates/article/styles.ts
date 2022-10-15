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

export const subContainer = css`
  position: sticky;
  top: 86px;
`;

export const title = css`
  font-size: 48px;
  font-weight: bold;
  color: var(--dark-gray-1);
`;

export const text = css`
  color: var(--dark-gray-1);
`;

export const mdx = {
  h1: css`
    margin-top: 24px;
    font-size: 32px;
    font-weight: 500;
    color: var(--dark-gray-1);
  `,
  h2: css`
    margin-top: 24px;
    font-size: 32px;
    font-weight: 500;
    color: var(--dark-gray-1);
  `,
  h3: css`
    margin-top: 24px;
    font-size: 32px;
    font-weight: 500;
    color: var(--dark-gray-1);
  `,
  p: css`
    margin-top: 16px;
    font-size: 16px;
    color: var(--dark-gray-2);
  `,
  ul: css`
    padding-left: 20px;
  `,
  li: css`
    list-style: circle;
  `,
  a: css`
    text-decoration: underline;
  `
};

export const toc = css`
  margin-top: 10px;
  font-size: 14px;
  display: grid;
  gap: 8px;
`;

export const mokuji = css`
  margin-top: 10px;
  font-size: 14px;
  font-weight: 600;
`;

export const publishDate = css`
  font-size: 14px; ;
`;

export const recommend = css`
  margin-top: 48px;
`;

export const recommendTitle = css`
  font-size: 24px;
  color: var(--dark-gray-1);
`;

export const recommendList = css`
  margin-top: 10px;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 20px;
`;

export const recommendArticle = css`
  border: 1px solid var(--light-gray-1);
  padding: 10px;
  border-radius: 8px;
`;

export const footer = css`
  margin-top: 80px;
  height: 62px;
  background-color: #1f1f1f;
  color: var(--white);
  font-size: 10px;
  display: grid;
  place-items: center;
`;