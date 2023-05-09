import { graphql } from "gatsby";

export const Section = graphql`
  fragment Section on ContentfulSection {
    __typename
    id
    internalName
    size
    color {
      ... on ContentfulColor {
        ...Color
      }
    }
    content {
      ... on ContentfulHeader {
        ...Header
      }
      ... on ContentfulFooter {
        ...Footer
      }
    }
  }
`;
