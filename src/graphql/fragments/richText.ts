import { graphql } from "gatsby";

export const RichText = graphql`
    fragment RichText on ContentfulRichText {
        __typename
        id
      internalName
      richText {
        raw
      }
    }
`