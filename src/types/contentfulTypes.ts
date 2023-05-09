export interface ElementBase {
    id?: string;
    elementName?: string;
    __typename?: string;
}

export interface Cta extends ElementBase {
    label: string;
    link?: string;
    page?: Page;
}

// export interface Header extends ElementBase, any {

// }

export type Header = any;

export interface Page extends ElementBase {
    slug: string;
    title: string;
    metaTitle: string;
}

export type Element = Page | Cta | Header;