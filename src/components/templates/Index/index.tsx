import { Link } from 'gatsby';
import { useMemo } from 'react';
import { useArticles } from '../../../hooks/useArticles';
import { useTechArticles } from '../../../hooks/useTechArticles';
import { DetailLayout } from '../../layouts/Detail';
import { PostCard } from '../../shared/PostCard';
import { Tag } from '../../shared/Tag';
import * as styles from './styles';

const NOW = [
  'Gatsby 5 ベースのブログをタイポグラフィ中心に再設計中',
  'TypeScript の例外設計を Effect-TS で読み替え',
  '個人ノートをまとまった文章に昇華する練習'
];

const formatDate = (name: string | null | undefined) => {
  if (!name || name.length < 8) return '';
  return `${name.substring(0, 4)}-${name.substring(4, 6)}-${name.substring(6, 8)}`;
};

export const IndexTemplate = () => {
  const techArticles = useTechArticles();
  const allArticles = useArticles();

  const latest = techArticles.slice(0, 3);

  const tagCounts = useMemo(() => {
    const map = new Map<string, number>();
    techArticles.forEach(a => {
      (a.frontmatter?.tags ?? []).forEach(t => {
        if (!t) return;
        map.set(t, (map.get(t) ?? 0) + 1);
      });
    });
    return Array.from(map.entries())
      .map(([name, count]) => ({ name, count }))
      .sort((a, b) => b.count - a.count);
  }, [techArticles]);

  const tagCloud = tagCounts.slice(0, 24);

  return (
    <DetailLayout>
      <div css={styles.container}>
        {/* Hero */}
        <section css={styles.hero}>
          <div>
            <div css={styles.eyebrow}>
              <span css={styles.eyebrowDot}>●</span> Field notes — fukke.cafe
            </div>
            <h1 css={styles.title}>
              動くコードの裏で、
              <br />
              考えていたことを書き残す。
            </h1>
            <p css={styles.bio}>
              技術ブログを中心に、日々の学びを文章として残しています。
              フロントエンドから機械学習、競技プログラミングまで、
              手を動かして気付いたことを検索できる形に変えるための個人ノート。
            </p>
            <div css={styles.ctaRow}>
              <Link to='/tech' css={styles.ctaPrimary}>
                記事を読む →
              </Link>
            </div>
          </div>
          <aside css={styles.nowCard}>
            <div css={styles.eyebrow}>Now</div>
            <ul css={styles.nowList}>
              {NOW.map((n, i) => (
                <li key={i} css={styles.nowItem}>
                  <span css={styles.nowDash}>—</span>
                  <span>{n}</span>
                </li>
              ))}
            </ul>
            <div css={styles.dottedDivider} />
            <div css={styles.statRow}>
              <div>
                <div css={styles.statValue}>{allArticles.length}</div>
                <div css={styles.statLabel}>POSTS</div>
              </div>
            </div>
          </aside>
        </section>

        {/* Latest */}
        <section css={styles.section}>
          <div css={styles.sectionHeader}>
            <div css={styles.eyebrow}>Latest writing</div>
            <Link to='/tech' css={styles.seeAll}>
              See all {techArticles.length} →
            </Link>
          </div>
          <div css={styles.grid3}>
            {latest.map(article => (
              <PostCard
                key={article.id}
                to={`/tech/${article.fields?.name}`}
                title={article.frontmatter?.title ?? ''}
                excerpt={article.excerpt ?? ''}
                date={formatDate(article.fields?.name)}
                tags={(article.frontmatter?.tags ?? []).filter(
                  (t): t is string => Boolean(t)
                )}
              />
            ))}
          </div>
        </section>

        {/* Tags */}
        <section css={styles.section}>
          <div css={styles.eyebrow}>Tags</div>
          <div css={styles.tagsWrap}>
            {tagCloud.map(t => (
              <Tag key={t.name}>#{t.name}</Tag>
            ))}
          </div>
        </section>
      </div>
    </DetailLayout>
  );
};
