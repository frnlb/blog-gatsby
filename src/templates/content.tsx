import {componentMapper} from "@utils";
import {graphql} from "gatsby";
import React, { type Fragment } from "react";

const ContentTemplate = ({ data: {contentfulPage}}: any): any => {
    const data = contentfulPage;
    console.log("🚀 ~ file: content.tsx:7 ~ ContentTemplate ~ data:", data)

    return (
        <>
            {data?.content?.map((element: any) => {
                return componentMapper(element);
            })}
        </>
    )
}

export default ContentTemplate;
export const query: any = graphql`
    query ($id: String!) {
        contentfulPage(id: { eq: $id }) {
            id
            slug
            content {
                ... on ContentfulSection {
                    ...Section
                }
            }
        }
    }
`
