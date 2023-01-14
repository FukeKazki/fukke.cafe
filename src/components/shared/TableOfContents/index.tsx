import * as styles from './style';
import { ToggleDownIcon } from '../icons/ToggleDownIcon';
import { ToggleUpIcon } from '../icons/ToggleUpIcon';
import { Link } from 'gatsby';
import { useState } from 'react';

type Props = {
  toc: {
    title: string;
    url: string;
  }[];
  current: {
    index: number;
    title: string;
  };
};

const convertIndex = (index: number) => (index + 1).toString().padStart(2, '0');

export const TableOfContents = ({ toc, current, ...props }: Props) => {
  const [isOpen, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen(prev => !prev);
  };

  return (
    <div css={styles.container} {...props}>
      <ul css={[styles.list, isOpen && styles.show]}>
        {toc.map((content, index) => (
          <li key={`${content.title}-${index}`}>
            <Link
              to={content.url}
              css={[
                styles.content,
                index === 0 && styles.first,
                index === toc.length - 1 && styles.end
              ]}
            >
              <p css={styles.text}>
                <span css={styles.index}>{convertIndex(index)}</span>
                {content.title}
              </p>
            </Link>
          </li>
        ))}
      </ul>
      {/* ↓ 常に表示する */}
      <button css={[styles.content, styles.bottom]} onClick={handleToggle}>
        <p css={styles.text}>
          <span css={styles.index}>{convertIndex(current.index)}</span>
          {current.title}
        </p>
        <span css={styles.toggle}>
          {isOpen ? <ToggleDownIcon /> : <ToggleUpIcon />}
        </span>
      </button>
    </div>
  );
};
