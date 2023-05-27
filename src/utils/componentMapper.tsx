import React from "react";
import { CONTENT_TYPES } from "../constants";
import { Header, Section } from "@frnlb/react-tailwind-lib";
import { Cta, Element, Header as CtHeader } from "@types";
import { Image } from "@components";

const componentMapper = (element: Element) => {
  if (element) {
    if (element.__typename === CONTENT_TYPES.HEADER) {
      const headerElement = element as CtHeader;
      console.log(
        "🚀 ~ file: componentMapper.tsx:12 ~ componentMapper ~ headerElement:",
        headerElement.logo
      );

      console.log("header", headerElement);
      return (
        <Header
          links={headerElement.links}
          theme={"default"}
          logo={
            <Image
              alt={headerElement.logo?.altText}
              image={headerElement.logo?.image}
            />
          }
        >
          {componentMapper(headerElement.logo)}
        </Header>
      );
    }
    if (element.__typename === CONTENT_TYPES.CTA) {
      const ctaElement = element as Cta;
      return <h1>{ctaElement.label}</h1>;
    }
    if (element.__typename === CONTENT_TYPES.FOOTER) {
      console.log("footer", element);
      const footerElement = element as any;
      return <></>;
    }
    if (element.__typename === CONTENT_TYPES.IMAGE) {
      console.log("IMAGE", element);
      const imageElement = element as any;
      return (
        <Image
          alt={imageElement.altText}
          image={imageElement.image.gatsbyImage}
        />
      );
    }
    if (element.__typename === CONTENT_TYPES.SECTION) {
      console.log("SECTION", element);
      console.log(
        `SECTION: element: ${element.__typename} elementSize ${element.size}`
      );
      if (Array.isArray(element.content) && element.content.length > 0) {
        return element.content.map((cont: any) => {
          return (
            <Section
              key={element.id}
              size={element.size}
              id={`${element.id}-${element.__typename}`}
            >
              {componentMapper(cont)}
            </Section>
          );
        });
      }
      return <Section>{element}</Section>;
    }
  }
};

export default componentMapper;
