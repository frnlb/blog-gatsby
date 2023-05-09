import { graphql } from "gatsby";

export const Image = graphql`
    fragment Image on ContentfulImage {
        __typename
        id

  }
`