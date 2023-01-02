import { graphql, HeadProps } from 'gatsby';
import { Fragment } from 'react';
import { TechTemplate } from '../components/templates/tech';

export default function TechPage() {
  return <TechTemplate />;
}

export const Head = (props: HeadProps<Queries.TechPageQuery>) => (
  <Fragment>
    <title>@fukke0906のプログラミング日記</title>
    <html lang='ja' />
    <meta name='description' content='技術ブログや日報を書きます。' />
    <link
      rel='canonical'
      href={`${props.data.site?.siteMetadata?.siteUrl}${props.location.pathname}`}
    />
    <meta
      name='image'
      content={`https://fukke-blog-og-image.vercel.app/技術ブログ`}
    />
    <meta
      property='og:url'
      content={`${props.data.site?.siteMetadata?.siteUrl}${props.location.pathname}`}
    />
    <meta property='og:type' content='website' />
    <meta property='og:title' content='技術ブログや日報を書きます。' />
    <meta property='og:site_name' content='@fukke0906のプログラミング日記' />
    <meta property='og:description' content='技術ブログや日報を書きます。' />
    <meta
      property='og:image'
      content={`https://fukke-blog-og-image.vercel.app/技術ブログ`}
    />
    <meta property='twitter:site' content='@fukke0906' />
    <meta property='twitter:card' content='summary_large_image' />
    <meta property='twitter:title' content='@fukke0906のプログラミング日記' />
    <meta
      property='twitter:description'
      content='技術ブログや日報を書きます。'
    />
  </Fragment>
);

export const query = graphql`
  query TechPage {
    site {
      siteMetadata {
        siteUrl
      }
    }
  }
`;
