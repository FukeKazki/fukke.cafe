import { useMemo, useState } from 'react';
import { useTechArticles } from '../../../hooks/useTechArticles';
import { DetailLayout } from '../../layouts/Detail';
import { PostCard } from '../../shared/PostCard';
import { Tag } from '../../shared/Tag';
import * as styles from './styles';

const formatDate = (name: string | null | undefined) => {
  if (!name || name.length < 8) return '';
  return `${name.substring(0, 4)}-${name.substring(4, 6)}-${name.substring(6, 8)}`;
};

export const TechTemplate = () => {
  const articles = useTechArticles();
  const [query, setQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const categories = useMemo(() => {
    const set = new Set<string>();
    articles.forEach(a => {
      const c = a.frontmatter?.category;
      if (c) set.add(c);
    });
    return ['All', ...Array.from(set)];
  }, [articles]);

  const tags = useMemo(() => {
    const set = new Set<string>();
    articles.forEach(a => {
      (a.frontmatter?.tags ?? []).forEach(t => {
        if (t) set.add(t);
      });
    });
    return Array.from(set);
  }, [articles]);

  const filtered = useMemo(() => {
    return articles.filter(a => {
      if (activeCategory !== 'All' && a.frontmatter?.category !== activeCategory)
        return false;
      if (
        activeTag &&
        !(a.frontmatter?.tags ?? []).some(t => t === activeTag)
      )
        return false;
      if (query) {
        const q = query.toLowerCase();
        const title = (a.frontmatter?.title ?? '').toLowerCase();
        const excerpt = (a.excerpt ?? '').toLowerCase();
        if (!title.includes(q) && !excerpt.includes(q)) return false;
      }
      return true;
    });
  }, [articles, activeCategory, activeTag, query]);

  const filterLabel = [
    activeCategory !== 'All' ? activeCategory : null,
    activeTag ? `#${activeTag}` : null
  ]
    .filter(Boolean)
    .join(' × ');

  return (
    <DetailLayout>
      <div css={styles.container}>
        <section css={styles.head}>
          <div css={styles.eyebrow}>/tech — {articles.length} entries</div>
          <h1 css={styles.title}>技術記事</h1>
          <p css={styles.description}>
            経験から生まれた知識を、検索できる形に変えるための個人ノート。
          </p>

          <div css={styles.filterRow}>
            <div css={styles.search}>
              <input
                placeholder='記事を検索  e.g. typescript, gatsby, react'
                value={query}
                onChange={e => setQuery(e.target.value)}
                css={styles.searchInput}
              />
            </div>
            <div css={styles.pillRow}>
              {categories.map(c => (
                <button
                  key={c}
                  type='button'
                  css={styles.pill(c === activeCategory)}
                  onClick={() => setActiveCategory(c)}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          {tags.length > 0 && (
            <div css={styles.tagFilter}>
              <span css={styles.tagFilterLabel}>TAGS</span>
              {tags.slice(0, 12).map(t => (
                <button
                  key={t}
                  type='button'
                  onClick={() => setActiveTag(prev => (prev === t ? null : t))}
                  style={{
                    background: 'none',
                    border: 0,
                    padding: 0,
                    cursor: 'pointer'
                  }}
                >
                  <Tag active={activeTag === t}>#{t}</Tag>
                </button>
              ))}
              {tags.length > 12 && (
                <span css={styles.tagFilterMore}>+ {tags.length - 12} more</span>
              )}
            </div>
          )}
        </section>

        <section css={styles.body}>
          <div css={styles.meta}>
            <span>
              Showing {filtered.length} of {articles.length}
              {filterLabel && (
                <>
                  {' '}· Filter: <span css={styles.metaStrong}>{filterLabel}</span>
                </>
              )}
            </span>
            <span>Sort: latest ↓</span>
          </div>
          {filtered.length === 0 ? (
            <div css={styles.empty}>該当する記事は見つかりませんでした。</div>
          ) : (
            <div css={styles.grid}>
              {filtered.map(article => (
                <PostCard
                  key={article.id}
                  to={`/tech/${article.fields?.name}`}
                  title={article.frontmatter?.title ?? ''}
                  excerpt={article.excerpt ?? ''}
                  date={formatDate(article.fields?.name)}
                  tags={(article.frontmatter?.tags ?? []).filter(
                    (t): t is string => Boolean(t)
                  )}
                  category={article.frontmatter?.category ?? undefined}
                />
              ))}
            </div>
          )}
        </section>
      </div>
    </DetailLayout>
  );
};
