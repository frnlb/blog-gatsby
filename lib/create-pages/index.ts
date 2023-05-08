import allContentfulPage from "./all-contentful-page";

export default (api: any) => {
    Promise.all([allContentfulPage(api)]);
}