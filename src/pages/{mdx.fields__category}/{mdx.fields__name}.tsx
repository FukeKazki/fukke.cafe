import { graphql, PageProps } from 'gatsby';
import { ArticleTemplate } from '../../components/templates/article';

export default function ArticlePage({
  ...props
}: PageProps<Queries.ArticlePageQuery>) {
  return <ArticleTemplate {...props} />;
}

export const query = graphql`
  query ArticlePage($id: String) {
    mdx(id: { eq: $id }) {
      fields {
        name
        category
      }
      frontmatter {
        title
        date
      }
      body
      tableOfContents
    }
  }
`;
