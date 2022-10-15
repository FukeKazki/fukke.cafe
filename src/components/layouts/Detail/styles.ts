import { css } from '@emotion/react';

export const main = css`
  display: grid;
  grid-template: 'sideMenu contents' 1fr / 228px 1fr;
`;

export const sideMenu = css`
  grid-area: sideMenu;
`;

export const contents = css`
  grid-area: contents;
`;

export const nav = css`
  position: sticky;
  z-index: 100;
  top: 0;
  left: 0;
  background-color: var(--white);
`;

export const scroll = css`
  position: sticky;
  top: 73px;
  left: 0;
  max-height: calc(100vh - 73px);
  overflow-y: scroll;
`;

export const footer = css`
  position: fixed;
  width: 228px;
  left: 0;
  bottom: 0;
  height: 62px;
  background-color: #1f1f1f;
  color: #ffffff;
  display: flex;
  place-items: center;
  place-content: center;
  font-size: 10px;
`;
