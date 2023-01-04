import { graphql, HeadProps } from 'gatsby';
import { Fragment } from 'react';
import { DailyTemplate } from '../components/templates/daily';

export default function DailyPage() {
  return <DailyTemplate />;
}

export const Head = (props: HeadProps<Queries.DailyPageQuery>) => (
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
      content={`https://fukke-blog-og-image.vercel.app/日報`}
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
      content={`https://fukke-blog-og-image.vercel.app/日報`}
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
  query DailyPage {
    site {
      siteMetadata {
        siteUrl
      }
    }
  }
`;
