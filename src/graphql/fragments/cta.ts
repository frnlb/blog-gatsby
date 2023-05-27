import { graphql } from "gatsby";

export const Cta = graphql`
  fragment Cta on ContentfulCta {
    __typename
    id
    label
    link
    internalName
    page {
      ... on ContentfulPage {
        ...Page
      }
    }
  }
`;
