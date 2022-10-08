import type { HeadFC } from "gatsby"

export default function IndexPage() {
  return (
    <main>
      <h1>こんにちはー</h1>
    </main>
  )
}

export const Head: HeadFC = () => <title>プログラミング日記</title>
