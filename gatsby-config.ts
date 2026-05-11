import type { GatsbyConfig } from "gatsby"

const config: GatsbyConfig = {
  siteMetadata: {
    title: `fukke.cafe`,
    siteUrl: `https://fukke.cafe`,
    description: `技術ブログを書きます。`,
    author: `FukeKazki`,
    image: `https://fukke-blog-og-image.vercel.app/fukke.cafe`,
    social: {
      twitter: `@fukke0906`,
      github: `https://github.com/FukeKazki`,
    },
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-emotion",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: "gatsby-remark-autolink-headers",
            options: {
              offsetY: `100`,
              icon: false,
              className: `custom-class`,
              maintainCase: false,
            },
          },
          "gatsby-remark-prismjs-title",
          "gatsby-remark-prismjs",
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 1000,
            },
          },
          "gatsby-remark-katex",
        ],
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "tech",
        path: "./articles/tech/",
      },
    },
  ],
}

export default config
