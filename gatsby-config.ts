import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Programming Nikki`,
    siteUrl: `https://fukke-programming-nikki.web.app`
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: ["gatsby-plugin-emotion", {
    resolve: 'gatsby-plugin-mdx',
    options: {
      gatsbyRemarkPlugins: [
        {
          resolve: 'gatsby-remark-autolink-headers',
          options: {
            offsetY: `100`,
            icon: false,
            className: `custom-class`,
            maintainCase: false,
          }
        },
        'gatsby-remark-prismjs'
      ]
    }
  }, {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "daily",
      "path": "./articles/daily/"
    }
  }, {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "tech",
      "path": "./articles/tech/"
    }
  }]
};

export default config;
