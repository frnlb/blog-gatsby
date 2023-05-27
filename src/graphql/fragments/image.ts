import { graphql } from "gatsby";

export const Image = graphql`
  fragment Image on ContentfulImage {
    __typename
    id
    altText
    image {
      filename
      gatsbyImage(width: 300)
      gatsbyImageData(width: 300)
      id
      title
      url
      publicUrl
      description
    }
  }
`;
