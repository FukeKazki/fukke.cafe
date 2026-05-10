import { css } from '@emotion/react';
import { Link } from 'gatsby';
import { Tag } from '../Tag';

type Props = {
  to: string;
  title: string;
  excerpt: string;
  date: string;
  tags: string[];
  readMin?: number;
  category?: string;
};

const card = css`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 18px;
  background: var(--bg-elev);
  border: 1px solid var(--rule);
  border-radius: var(--r-md);
  height: 100%;
  text-decoration: none;
  color: inherit;
  transition: border-color 160ms ease-out, transform 160ms ease-out;
  &:hover {
    border-color: var(--accent);
  }
  &:hover h3 {
    color: var(--accent);
  }
`;

const topRow = css`
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: var(--font-mono);
  font-size: 11px;
  color: var(--fg-soft);
`;

const topTag = css`
  color: var(--accent);
`;

const rule = css`
  flex: 1;
  height: 1px;
  background: var(--rule);
`;

const titleCss = css`
  margin: 0;
  font-family: var(--font-serif);
  font-size: 19px;
  line-height: 1.4;
  color: var(--fg);
  font-weight: 600;
  letter-spacing: -0.005em;
  transition: color 160ms ease-out;
`;

const excerptCss = css`
  margin: 0;
  font-size: 13.5px;
  color: var(--fg-muted);
  line-height: 1.8;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const bottomRow = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
  padding-top: 6px;
`;

const tagList = css`
  display: flex;
  gap: 4px;
  flex-wrap: wrap;
`;

const readTime = css`
  font-family: var(--font-mono);
  font-size: 11px;
  color: var(--fg-soft);
  white-space: nowrap;
`;

export const PostCard = ({
  to,
  title,
  excerpt,
  date,
  tags,
  readMin,
  category
}: Props) => {
  const lead = category ?? tags[0] ?? 'post';
  return (
    <Link to={to} css={card}>
      <div css={topRow}>
        <span css={topTag}>{lead}</span>
        <span css={rule} />
        <time>{date}</time>
      </div>
      <h3 css={titleCss}>{title}</h3>
      {excerpt && <p css={excerptCss}>{excerpt}</p>}
      <div css={bottomRow}>
        <div css={tagList}>
          {tags.slice(0, 3).map(t => (
            <Tag key={t}>#{t}</Tag>
          ))}
        </div>
        {readMin && <span css={readTime}>{readMin} min</span>}
      </div>
    </Link>
  );
};
