import { graphql, HeadProps } from 'gatsby';
import { Fragment } from 'react';
import { IndexTemplate } from '../components/templates/Index';

export default function IndexPage() {
  return <IndexTemplate />;
}

export const Head = (props: HeadProps<Queries.IndexPageQuery>) => (
  <Fragment>
    <title>fukke.cafe</title>
    <html lang='ja' />
    <meta name='description' content='技術ブログや日報を書きます。' />
    <link
      rel='canonical'
      href={`${props.data.site?.siteMetadata?.siteUrl}${props.location.pathname}`}
    />
    <meta
      name='image'
      content={`https://fukke-blog-og-image.vercel.app/fuke.cafe`}
    />
    <meta
      property='og:url'
      content={`${props.data.site?.siteMetadata?.siteUrl}${props.location.pathname}`}
    />
    <meta property='og:type' content='website' />
    <meta property='og:title' content='技術ブログや日報を書きます。' />
    <meta property='og:site_name' content='fukke.cafe' />
    <meta property='og:description' content='技術ブログや日報を書きます。' />
    <meta
      property='og:image'
      content={`https://fukke-blog-og-image.vercel.app/fukke.cafe`}
    />
    <meta property='twitter:site' content='@fukke0906' />
    <meta property='twitter:card' content='summary_large_image' />
    <meta property='twitter:title' content='fukke.cafe' />
    <meta
      property='twitter:description'
      content='技術ブログや日報を書きます。'
    />
  </Fragment>
);

export const query = graphql`
  query IndexPage {
    site {
      siteMetadata {
        siteUrl
      }
    }
  }
`;
