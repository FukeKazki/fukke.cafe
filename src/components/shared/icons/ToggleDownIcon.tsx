import { ComponentPropsWithRef, ForwardedRef } from 'react';

export interface ToggleDownIconProps extends ComponentPropsWithRef<'svg'> {
  forwardRef?: ForwardedRef<SVGSVGElement>;
}

export const ToggleDownIcon = ({
  forwardRef,
  ...props
}: ToggleDownIconProps) => {
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
        d='M9 1L5 5L1 1'
        stroke='white'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};
