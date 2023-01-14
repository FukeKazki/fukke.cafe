import { ComponentPropsWithRef, ForwardedRef } from 'react';

export interface ToggleUpIconProps extends ComponentPropsWithRef<'svg'> {
  forwardRef?: ForwardedRef<SVGSVGElement>;
}

export const ToggleUpIcon = ({ forwardRef, ...props }: ToggleUpIconProps) => {
  return (
    <svg
      width='10'
      height='6'
      viewBox='0 0 10 6'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      ref={forwardRef}
      {...props}
    >
      <path
        d='M9 5L5 1L1 5'
        stroke='white'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};
