import { MDXProvider } from "@mdx-js/react"
import { graphql, PageProps } from "gatsby"
import { Fragment } from "react"
import { Header } from "../../components/shared/Header"
import { Navigation } from "../../components/shared/Navigation"
import { SideMenu } from "../../components/shared/SideMenu"
import * as styles from './styles'
import * as React from "react"

export default function ArticlePage({ data, children }: PageProps<Queries.ArticlePageQuery>) {
  const { mdx } = data;
  console.log({ data })
  console.log({ children })
  return (
    <Fragment>
      <header>
        <Header />
        <Navigation />
      </header>
      <main css={styles.main}>
        {/* <SideMenu /> */}
        <div css={styles.body}>
          <MDXProvider>
            {children}
          </MDXProvider>
        </div>
      </main>
    </Fragment>
  )
}

export const query = graphql`
  query ArticlePage($id: String) {
    mdx(id: { eq: $id }) {
      fields {
        name
        category
      }
      frontmatter {
        title
      }
      body
    }
  }
`