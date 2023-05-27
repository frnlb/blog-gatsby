import { graphql } from "gatsby";

export const Page = graphql`
  fragment Page on ContentfulPage {
    __typename
    id
    slug
    internalName
    title
    metaTitle
    metaDescription
    content {
      ... on ContentfulSection {
        __typename
        id
        internalName
        numberOfColumns
        size
        color {
          id
          internalName
        }
        content {
          __typename
        }
      }
    }
  }
`;
