import { graphql } from "gatsby";

export const Footer = graphql`
    fragment Footer on ContentfulFooter {
        __typename
        id
        title {
        id
        internalName
        }
      footerColumns {
        id
        internalName
      }
    }
`