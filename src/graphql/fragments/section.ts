import { graphql } from "gatsby";

export const Section = graphql`
    fragment Section on ContentfulSection {
        __typename
        id
        size
    }
`