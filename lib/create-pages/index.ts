import allContentfulPage from "./all-contentful-pages";

export default (api: any) => {
    Promise.all([allContentfulPage(api)]);
}