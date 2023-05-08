import type { GatsbyConfig } from "gatsby";
import * as dotenv from "dotenv";
const path = require("path");
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});
// Learn about environment variables: https://gatsby.dev/env-vars
dotenv.config();
console.log(process.env.CF_SPACE_ID);
console.log(process.env.CF_CONTENT_DELIVERY);

const config: GatsbyConfig = {
  siteMetadata: {
    title: `gatsby-tail-blog`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-postcss",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-mdx",
    "gatsby-transformer-remark",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          "@components": path.resolve(__dirname, "./src/components"),
          "@constants": path.resolve(__dirname, "./src/constants"),
          "@containers": path.resolve(__dirname, "./src/containers"),
          "@utils": path.resolve(__dirname, "./src/utils"),
        },
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CF_SPACE_ID,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CF_CONTENT_DELIVERY,
      },
    },
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-omni-font-loader`,
      options: {
        enableListener: true,
        preconnect: [
          `https://fonts.googleapis.com`,
          `https://fonts.gstatic.com`,
        ],
        web: [
          {
            name: `Courier Prime`,
            file: `https://fonts.googleapis.com/css2?family=Courier+Prime:ital,wght@0,400;0,700;1,400;1,700&display=swap`,
          },
        ],
      },
    },
  ],
};

export default config;
