import { css } from '@emotion/react';

export const container = css`
  display: grid;
  gap: 24px;
`;

export const list = css`
  display: none;
  gap: 4px;
  max-height: calc(100vh - 200px);
  overflow-y: scroll;
`;

export const first = css`
  border-radius: 8px 8px 2px 2px;
`;

export const end = css`
  border-radius: 2px 2px 8px 8px;
`;

export const content = css`
  background-color: #fff;
  padding: 22px 16px;
  display: flex;
  border-radius: 2px;
  justify-content: space-between;
`;

export const bottom = css`
  position: relative;
  border-radius: 8px;

  ::after {
    content: '';
    width: 16px;
    height: 4px;
    position: absolute;
    background-color: var(--primary);
    bottom: 0;
    left: 16px;
  }
`;

export const index = css`
  margin-right: 16px;
  color: var(--primary);
  font-weight: 700;
`;

export const text = css`
  font-size: 14px;
  font-weight: 500;
`;

export const toggle = css`
  display: block;
  display: grid;
  place-items: center;
  background-color: var(--primary);
  width: 20px;
  height: 20px;
  border-radius: 100%;
`;

export const show = css`
  display: grid;
`;
