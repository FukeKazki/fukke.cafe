import { useTaggedArticles } from './useTaggedArticles';

type Props = {
  category: 'ウェブフロント' | 'サーバー' | 'その他' | string
  id: string
}

// 同じカテゴリの記事を6件取得する
export const useRecommendArticles = ({ category, id }: Props) => {
  // すべてのカテゴリの記事を取得
  const articles = useTaggedArticles();

  // 同じカテゴリの記事を抽出
  const filterdArticles = articles.filter(v => v.fieldValue === category)[0];

  // 今見てる記事を削除
  const recommendArticles = filterdArticles.nodes.filter(v => v.id !== id);

  // ランダムに6件取得
  return recommendArticles.sort(() => Math.random() - Math.random()).slice(0, 6);
};
