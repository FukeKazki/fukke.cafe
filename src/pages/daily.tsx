import { graphql, HeadProps } from 'gatsby';
import { Fragment } from 'react';
import { DailyTemplate } from '../components/templates/daily';

export default function DailyPage() {
  return <DailyTemplate />;
}

export const Head = (props: HeadProps<Queries.DailyPageQuery>) => (
  <Fragment>
    <title>プログラミング日記</title>
		<html lang='ja' />
    <meta name='description' content='技術ブログや日報を書きます。' />
		<link rel='canonical' href={`${props.data.site?.siteMetadata?.siteUrl}${props.location.pathname}`} />
		{/* <meta name='image' content={seo.image} /> */}
		<meta property='og:url' content={`${props.data.site?.siteMetadata?.siteUrl}${props.location.pathname}`} />
		<meta property='og:type' content='website' />
    <meta property='og:title' content='技術ブログや日報を書きます。' />
		<meta property="og:site_name" content='プログラミング日記' />
		<meta property='og:description' content='技術ブログや日報を書きます。' />
		{/* <meta property='og:image' content={seo.image} /> */}
		<meta property='twitter:site' content='@fukke0906' />
		<meta property='twitter:card' content='summary_large_image' />
		<meta property='twitter:title' content='プログラミング日記' />
		<meta property='twitter:description' content='技術ブログや日報を書きます。' />
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
`