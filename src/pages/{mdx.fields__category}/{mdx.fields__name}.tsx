import { graphql, HeadProps, PageProps } from 'gatsby';
import { ArticleTemplate } from '../../components/templates/article';

export default function ArticlePage({
  ...props
}: PageProps<Queries.ArticlePageQuery>) {
  return <ArticleTemplate {...props} />;
}

export const Head = (props: HeadProps<Queries.ArticlePageQuery>) => {
  return (
  <>
    <title>{props.data.mdx?.frontmatter?.title}</title>
		<html lang='ja' />
    <meta name='description' content={props.data.mdx?.excerpt ?? ''} />
		<link rel='canonical' href={`${props.data.site?.siteMetadata?.siteUrl}${props.location.pathname}`} />
		{/* <meta name='image' content={seo.image} /> */}
		<meta property='og:url' content={`${props.data.site?.siteMetadata?.siteUrl}${props.location.pathname}`} />
		<meta property='og:type' content='website' />
		<meta property='og:title' content={props.data.mdx?.frontmatter?.title ?? ''} />
		<meta property="og:site_name" content='プログラミング日記' />
		<meta property='og:description' content={props.data.mdx?.excerpt ?? ''} />
		{/* <meta property='og:image' content={seo.image} /> */}
		<meta property='twitter:site' content='@fukke0906' />
		<meta property='twitter:card' content='summary_large_image' />
		<meta property='twitter:title' content={props.data.mdx?.frontmatter?.title ?? ''} />
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
