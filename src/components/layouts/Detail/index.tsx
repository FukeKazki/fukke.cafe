import { Slice } from "gatsby"
import type { ComponentPropsWithRef, ReactNode } from "react"
import { Fragment } from "react"

import * as styles from "./styles"

interface Props extends ComponentPropsWithRef<"div"> {
  children: ReactNode
}

export const DetailLayout = ({ children }: Props) => {
  return (
    <Fragment>
      <Slice alias="header" />
      <main css={styles.main}>{children}</main>
      <Slice alias="footer" />
    </Fragment>
  )
}
