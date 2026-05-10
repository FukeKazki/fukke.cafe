import type { GatsbySSR } from 'gatsby';

export const onRenderBody: GatsbySSR['onRenderBody'] = ({
  setHeadComponents,
  setHtmlAttributes
}) => {
  setHtmlAttributes({ lang: 'ja' });

  setHeadComponents([
    <link key='gf-preconnect-1' rel='preconnect' href='https://fonts.googleapis.com' />,
    <link
      key='gf-preconnect-2'
      rel='preconnect'
      href='https://fonts.gstatic.com'
      crossOrigin='anonymous'
    />,
    <link
      key='gf-fonts'
      rel='stylesheet'
      href='https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&family=Noto+Serif+JP:wght@400;500;600;700&display=swap'
    />
  ]);
};
