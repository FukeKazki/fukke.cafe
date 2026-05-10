import { useMemo } from 'react';
import { useArticles } from './useArticles';

type Props = {
  tags: readonly (string | null)[];
  id: string;
};

export const useRecommendArticles = ({ tags, id }: Props) => {
  const articles = useArticles();

  return useMemo(() => {
    const tagSet = new Set(tags.filter((t): t is string => Boolean(t)));
    if (tagSet.size === 0) return [];

    const scored = articles
      .filter(a => a.id !== id)
      .map(a => {
        const overlap = (a.frontmatter?.tags ?? []).reduce(
          (n, t) => (t && tagSet.has(t) ? n + 1 : n),
          0
        );
        return { node: a, overlap };
      })
      .filter(s => s.overlap > 0)
      .sort((a, b) => {
        if (b.overlap !== a.overlap) return b.overlap - a.overlap;
        return (b.node.fields?.name ?? '').localeCompare(
          a.node.fields?.name ?? ''
        );
      });

    return scored.slice(0, 6).map(s => s.node);
  }, [articles, tags, id]);
};
