import type { GatsbyConfig } from "gatsby"

const config: GatsbyConfig = {
  siteMetadata: {
    title: `tech.fukke.cafe`,
    siteUrl: `https://tech.fukke.cafe`,
    description: `技術ブログを書きます。`,
    author: `FukeKazki`,
    image: `https://fukke-blog-og-image.vercel.app/tech.fukke.cafe`,
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
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://tech.fukke.cafe",
        sitemap: "https://tech.fukke.cafe/sitemap-index.xml",
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "tech.fukke.cafe",
        short_name: "tech.fukke.cafe",
        start_url: "/",
        background_color: "#ffffff",
        theme_color: "#0a0a0a",
        display: "standalone",
        icon: "src/images/icon.png",
        lang: "ja",
      },
    },
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
    {
      resolve: "gatsby-plugin-feed",
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({
              query: { site, allMdx },
            }: {
              query: {
                site: { siteMetadata: { siteUrl: string } }
                allMdx: {
                  nodes: Array<{
                    excerpt: string | null
                    frontmatter: {
                      title: string | null
                      date: string | null
                      tags: ReadonlyArray<string | null> | null
                    } | null
                    fields: {
                      category: string | null
                      name: string | null
                    } | null
                  }>
                }
              }
            }) =>
              allMdx.nodes.map((node) => {
                const path = `/${node.fields?.category ?? ""}/${node.fields?.name ?? ""}`
                const name = node.fields?.name ?? ""
                const date =
                  name.length >= 8
                    ? new Date(
                        `${name.slice(0, 4)}-${name.slice(4, 6)}-${name.slice(6, 8)}T00:00:00Z`,
                      )
                    : undefined
                return {
                  title: node.frontmatter?.title ?? name,
                  description: node.excerpt ?? "",
                  date,
                  url: `${site.siteMetadata.siteUrl}${path}`,
                  guid: `${site.siteMetadata.siteUrl}${path}`,
                  categories:
                    node.frontmatter?.tags?.filter((t): t is string =>
                      Boolean(t),
                    ) ?? [],
                }
              }),
            query: `
              {
                allMdx(
                  filter: { fields: { category: { eq: "tech" } } }
                  sort: { fields: { name: DESC } }
                ) {
                  nodes {
                    excerpt
                    frontmatter {
                      title
                      date
                      tags
                    }
                    fields {
                      category
                      name
                    }
                  }
                }
              }
            `,
            output: "/rss.xml",
            title: "tech.fukke.cafe",
          },
        ],
      },
    },
  ],
}

export default config
