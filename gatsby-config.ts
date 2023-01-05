import type { GatsbyConfig } from 'gatsby';

const config: GatsbyConfig = {
  siteMetadata: {
    title: `fukke.cafe`,
    siteUrl: `https://fukke.cafe`
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    'gatsby-plugin-emotion',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-autolink-headers',
            options: {
              offsetY: `100`,
              icon: false,
              className: `custom-class`,
              maintainCase: false
            }
          },
          'gatsby-remark-prismjs-title',
          'gatsby-remark-prismjs',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1000
            }
          }
        ]
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'daily',
        path: './articles/daily/'
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'tech',
        path: './articles/tech/'
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'other',
        path: './articles/other/'
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'blog',
        path: './articles/blog/'
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'category',
        path: './articles/category/'
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: './images/'
      }
    }
  ]
};

export default config;
