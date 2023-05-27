import { graphql } from "gatsby";

export const Header = graphql`
  fragment Header on ContentfulHeader {
    __typename
    id
    logo {
      ... on ContentfulImage {
        ...Image
      }
    }
    links {
      ... on ContentfulCta {
        ...Cta
      }
    }
  }
`;
