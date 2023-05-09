import { graphql } from "gatsby";

export const Header = graphql`
    fragment Header on ContentfulHeader {
        __typename
        id
        logo {
        altText
      }

    }
`