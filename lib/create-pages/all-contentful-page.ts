import { PAGE_TYPES } from "../../src/constants";
import path from "path";

const QUERY = `
{
    allContentfulPage {
        nodes {
            contentful_id
            slug
            id
            metaTitle
            metaDescription
            internalName
            __typename
            content {
                ... on ContentfulSection {
                    id
                    color {
                        color
                    }
                    size
                    __typename
                }
            }
        }
    }
}
`

export default async ({graphql, actions: {createPage}}: any) => {
    const allContentfulPages = await graphql(QUERY);
    let template = path.resolve(__dirname, "../../src/templates/content.tsx");
    console.log("-----------------  CREATING CONTENT  ---------------------");
    allContentfulPages.data.allContentfulPage.nodes.forEach((page: any) => {
        const content = page?.content[0];

        const pageData = {
            path: page.slug === "/" ? "/": `/${page.slug}`,
            component: template,
            context: {
                id: page.id
            }
        };
        if(content) {
            console.log("  Creating page: ", `/${page.slug}/`, content.__typename, page.id);

        }
        if(content.__typename === PAGE_TYPES.CONTENT) {
            console.log("   it's a content page");
            pageData.component = path.resolve(__dirname, "../../src/templates/content.tsx");
        }

        createPage(pageData);
    })

    console.log(" ---------------------------  CONTENT PAGES DONE  ------------------")
}