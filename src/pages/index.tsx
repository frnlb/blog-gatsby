import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"



const IndexPage: React.FC<PageProps> = () => {
  return (
    <h1 className="bg-red-700">test</h1>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
