import { graphql, HeadProps, PageProps } from 'gatsby';
import { ArticleTemplate, convertString } from '../../components/templates/article';

export default function ArticlePage({
  ...props
}: PageProps<Queries.ArticlePageQuery>) {
  return <ArticleTemplate {...props} />;
}

export const Head = ({ params, ...props }: HeadProps<Queries.ArticlePageQuery>) => {
  const title = params.fields__category === 'tech' ? props.data.mdx?.frontmatter?.title : `${convertString(props.data.mdx?.fields?.name)}の日報`
  return (
  <>
    <title>{title}</title>
		<html lang='ja' />
    <meta name='description' content={props.data.mdx?.excerpt ?? ''} />
		<link rel='canonical' href={`${props.data.site?.siteMetadata?.siteUrl}${props.location.pathname}`} />
		<meta name='image' content={`https://fukke-blog-og-image.vercel.app/${title}`} />
		<meta property='og:url' content={`${props.data.site?.siteMetadata?.siteUrl}${props.location.pathname}`} />
		<meta property='og:type' content='website' />
		<meta property='og:title' content={title ?? ''} />
		<meta property="og:site_name" content='プログラミング日記' />
		<meta property='og:description' content={props.data.mdx?.excerpt ?? ''} />
		<meta property='og:image' content={`https://fukke-blog-og-image.vercel.app/${title}`} />
		<meta property='twitter:site' content='@fukke0906' />
		<meta property='twitter:card' content='summary_large_image' />
		<meta property='twitter:title' content={title ?? ''} />
		<meta property='twitter:description' content={props.data.mdx?.excerpt ?? ''} />
  </>
)};

export const query = graphql`
  query ArticlePage($id: String) {
    site {
      siteMetadata {
        siteUrl
      }
    }
    mdx(id: { eq: $id }) {
      id
      fields {
        name
        category
      }
      excerpt
      frontmatter {
        title
        date
        category
      }
      body
      tableOfContents
    }
  }
`;
