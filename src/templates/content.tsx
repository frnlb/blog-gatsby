import { componentMapper } from "@utils";
import { graphql } from "gatsby";
import React from "react";
import { Layout } from "@frnlb/react-tailwind-lib";

const ContentTemplate = ({ data: { contentfulPage } }: any): any => {
  const data = contentfulPage;

  return (
    <Layout backgroundColor={"cream"}>
      {data?.content?.map((element: any) => {
        return componentMapper(element);
      })}
    </Layout>
  );
};

export default ContentTemplate;
export const query: any = graphql`
  query ($id: String!) {
    contentfulPage(id: { eq: $id }) {
      id
      internalName
      metaDescription
      metaTitle
      slug
      title
      content {
        ... on ContentfulSection {
          ...Section
        }
      }
    }
  }
`;
