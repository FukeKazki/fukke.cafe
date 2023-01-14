import { css } from '@emotion/react';

export const sideMenu = css`
  border-right: 1px solid #f4f4f4;
  padding-bottom: 62px;
  background-color: var(--light-gray-1);
`;

export const tagList = css`
  padding: 24px;
  display: grid;
  gap: 10px;
`;

export const tagTitle = css`
  position: sticky;
  top: 0;
  padding: 8px 0;
  line-height: 16px;
  color: var(--dark-gray-1);
  font-size: 16px;
  font-weight: 500;
  border-bottom: 1px solid #f4f4f4;
`;

export const articleTitle = css`
  margin-top: 5px;
  font-size: 12px;
  color: var(--dark-gray-1);
`;

export const container = css``;

export const link = css`
  :hover {
    opacity: 0.8;
  }
`;
