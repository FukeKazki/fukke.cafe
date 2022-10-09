import { MDXProvider } from '@mdx-js/react';
import { PageProps } from 'gatsby';
import { DetailLayout } from '../../layouts/Detail';

export const ArticleTemplate = ({
  data,
  children
}: PageProps<Queries.ArticlePageQuery>) => {
  const { mdx } = data;
  return (
    <DetailLayout>
      <h1>{mdx?.frontmatter?.title}</h1>
      <MDXProvider>{children}</MDXProvider>
    </DetailLayout>
  );
};
