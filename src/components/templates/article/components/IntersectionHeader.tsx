import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { InView } from 'react-intersection-observer';

type Props = {
  inViewCallback: (inView: boolean, props?: string) => void;
} & DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;

export const IntersectionHeader = ({ inViewCallback, ...props }: Props) => (
  <InView
    as='div'
    rootMargin='-40%'
    onChange={inView => {
      inViewCallback(inView, props.children?.toString());
    }}
  >
    <h2 {...props} />
  </InView>
);
