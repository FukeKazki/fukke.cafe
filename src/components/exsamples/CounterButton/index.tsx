import { css } from '@emotion/react';
import { ComponentPropsWithRef, useState } from 'react';

type Props = ComponentPropsWithRef<'button'>;

const style = css`
  border: 1px solid currentColor;
  color: blue;
  padding: 8px 4px;
  min-width: 200px;
  border-radius: 16px;
  font-weight: bold;

  :hover {
    color: white;
    background-color: blue;
    border-color: currentColor;
  }
`;

export const CounterButton = ({ ...props }: Props) => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(prev => prev + 1);
  };

  return (
    <button {...props} onClick={increment} css={style}>
      {count}
    </button>
  );
};
