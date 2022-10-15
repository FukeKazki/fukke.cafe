import type { HeadFC } from 'gatsby';
import { Fragment } from 'react';
import { IndexTemplate } from '../components/templates/Index';

export default function IndexPage() {
  return <IndexTemplate />;
}

export const Head: HeadFC = () => (
  <Fragment>
    <title>プログラミング日記</title>
		<html lang='ja' />
    <meta name='description' content='技術ブログや日報を書きます。' />
		<link rel='canonical' href={window.location.href} />
		{/* <meta name='image' content={seo.image} /> */}
		<meta property='og:url' content={window.location.href} />
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
