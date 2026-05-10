import { Link } from "gatsby"
import { useId, useState } from "react"

import { ToggleDownIcon } from "../icons/ToggleDownIcon"
import { ToggleUpIcon } from "../icons/ToggleUpIcon"

import * as styles from "./style"

type Props = {
  toc: {
    title: string
    url: string
  }[]
  current: {
    index: number
    title: string
  }
}

const convertIndex = (index: number) => (index + 1).toString().padStart(2, "0")

export const TableOfContents = ({ toc, current, ...props }: Props) => {
  const [isOpen, setOpen] = useState(false)
  const panelId = useId()

  const handleToggle = () => {
    setOpen((prev) => !prev)
  }

  return (
    <div css={styles.container} {...props}>
      <div
        id={panelId}
        hidden={!isOpen}
        data-state={isOpen ? "open" : "collapsed"}
      >
        <ul css={styles.list}>
          {toc.map((content, index) => (
            <li key={`${content.title}-${index}`}>
              <Link
                to={content.url}
                css={[
                  styles.content,
                  index === 0 && styles.first,
                  index === toc.length - 1 && styles.end,
                ]}
              >
                <p css={styles.text}>
                  <span css={styles.index}>{convertIndex(index)}</span>
                  {content.title}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {/* ↓ 常に表示する */}
      <button
        type="button"
        onClick={handleToggle}
        aria-expanded={isOpen}
        aria-controls={panelId}
        css={[styles.content, styles.bottom]}
      >
        <p css={styles.text}>
          <span css={styles.index}>{convertIndex(current.index)}</span>
          {current.title}
        </p>
        <span css={styles.toggle}>
          {isOpen ? <ToggleDownIcon /> : <ToggleUpIcon />}
        </span>
      </button>
    </div>
  )
}
