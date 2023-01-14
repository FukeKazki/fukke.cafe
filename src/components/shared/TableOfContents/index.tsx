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
};

const convertIndex = (index: number) => (index + 1).toString().padStart(2, '0');

export const TableOfContents = ({ toc, ...props }: Props) => {
  const [first] = toc;
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
      <div css={[styles.content, styles.bottom]}>
        <p css={styles.text}>
          <span css={styles.index}>01</span>
          {first.title}
        </p>
        <button css={styles.toggle} onClick={handleToggle}>
          {isOpen ? <ToggleDownIcon /> : <ToggleUpIcon />}
        </button>
      </div>
    </div>
  );
};
