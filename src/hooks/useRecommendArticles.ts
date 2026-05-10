import { useMemo } from 'react';
import { useTaggedArticles } from './useTaggedArticles';

type Props = {
  category: 'ウェブフロント' | 'サーバー' | 'その他' | string;
  id: string;
};

export const useRecommendArticles = ({ category, id }: Props) => {
  const articles = useTaggedArticles();

  return useMemo(() => {
    const matched = articles.find(v => v.fieldValue === category);
    if (!matched) return [];

    const pool = matched.nodes.filter(v => v.id !== id);

    // Stable pseudo-random ordering seeded by article id so each
    // render of the same article shows the same recommendations.
    const seed = Array.from(id).reduce(
      (acc, ch) => acc + ch.charCodeAt(0),
      0
    );
    const scored = pool.map((node, i) => ({
      node,
      key: ((seed + i * 2654435761) >>> 0) % 1000003
    }));
    scored.sort((a, b) => a.key - b.key);
    return scored.slice(0, 6).map(s => s.node);
  }, [articles, category, id]);
};
