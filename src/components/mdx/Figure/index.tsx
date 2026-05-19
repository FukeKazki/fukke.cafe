import { css } from "@emotion/react"
import {
  type ComponentPropsWithoutRef,
  Fragment,
  useEffect,
  useState,
} from "react"
import { createPortal } from "react-dom"

const trigger = css`
  appearance: none;
  position: relative;
  display: block;
  width: 100%;
  margin: 1.8em 0;
  padding: 0;
  border: 1px solid var(--rule);
  border-radius: var(--r-sm);
  overflow: hidden;
  background: var(--bg-elev);
  line-height: 0;
  text-align: left;
  cursor: zoom-in;
  transition: border-color 160ms ease-out;
  &:hover {
    border-color: var(--accent);
  }
  &:focus-visible {
    outline: none;
    box-shadow: var(--focus-ring);
  }
`

const image = css`
  display: block;
  width: 100%;
  height: auto;
`

const altBadge = css`
  position: absolute;
  top: 10px;
  left: 10px;
  max-width: calc(100% - 20px);
  padding: 5px 10px;
  font-family: var(--font-mono);
  font-size: 10.5px;
  letter-spacing: var(--tracking-caps);
  text-transform: uppercase;
  color: var(--fg);
  background: color-mix(in oklab, var(--bg) 72%, transparent);
  backdrop-filter: blur(8px) saturate(140%);
  -webkit-backdrop-filter: blur(8px) saturate(140%);
  border: 1px solid var(--rule);
  border-radius: var(--r-sm);
  line-height: 1.3;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  pointer-events: none;
`

const overlay = css`
  position: fixed;
  inset: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  background: color-mix(in oklab, #1d1c1a 70%, transparent);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  cursor: zoom-out;
  animation: figureOverlayIn 160ms ease-out;
  @keyframes figureOverlayIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`

const enlargedImage = css`
  display: block;
  max-width: 100%;
  max-height: calc(100vh - 48px);
  width: auto;
  height: auto;
  border-radius: var(--r-sm);
  box-shadow: var(--shadow-lg);
  background: var(--bg-elev);
  margin: 0 auto;
`

const closeButton = css`
  position: fixed;
  top: 16px;
  right: 16px;
  width: 36px;
  height: 36px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: var(--bg-elev);
  border: 1px solid var(--rule);
  border-radius: var(--r-sm);
  color: var(--fg);
  font-family: var(--font-mono);
  font-size: 14px;
  cursor: pointer;
  transition:
    border-color 160ms ease-out,
    color 160ms ease-out;
  &:hover {
    border-color: var(--accent);
    color: var(--accent);
  }
  &:focus-visible {
    outline: none;
    box-shadow: var(--focus-ring);
  }
`

export const Figure = ({
  alt,
  src,
  ...rest
}: ComponentPropsWithoutRef<"img">) => {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false)
    }
    const prevOverflow = document.body.style.getPropertyValue("overflow")
    document.body.style.setProperty("overflow", "hidden")
    window.addEventListener("keydown", onKey)
    return () => {
      document.body.style.setProperty("overflow", prevOverflow)
      window.removeEventListener("keydown", onKey)
    }
  }, [open])

  if (!src) return null

  return (
    <Fragment>
      <button
        type="button"
        css={trigger}
        onClick={() => setOpen(true)}
        aria-label={alt ? `画像を拡大: ${alt}` : "画像を拡大"}
      >
        <img css={image} src={src} alt={alt ?? ""} loading="lazy" {...rest} />
        {alt && <span css={altBadge}>{alt}</span>}
      </button>
      {open &&
        typeof document !== "undefined" &&
        createPortal(
          <div
            css={overlay}
            role="dialog"
            aria-modal="true"
            aria-label={alt ?? "拡大画像"}
            onClick={() => setOpen(false)}
          >
            <img css={enlargedImage} src={src} alt={alt ?? ""} />
            <button
              type="button"
              css={closeButton}
              onClick={(e) => {
                e.stopPropagation()
                setOpen(false)
              }}
              aria-label="閉じる"
            >
              ✕
            </button>
          </div>,
          document.body,
        )}
    </Fragment>
  )
}
