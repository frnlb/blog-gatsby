import { graphql } from "gatsby";

export const Color = graphql`
    fragment Color on ContentfulColor {
        __typename
        id
        internalName
      }
`