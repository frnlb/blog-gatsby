import React from "react";
import { CONTENT_TYPES } from "../constants";
import { Header } from "@frnlb/react-tailwind-lib";
import { Cta, Element, Header as CtHeader } from "@types";
import Section from "@components/Section/Section";

const componentMapper = (element: Element) => {
  if (element) {
    console.log(element);
    console.log(element.__typename);
    if (element.__typename === CONTENT_TYPES.HEADER) {
      const headerElement = element as CtHeader;
      console.log("header", element);
      return <h1>header</h1>;
    }
    if (element.__typename === CONTENT_TYPES.CTA) {
      const ctaElement = element as Cta;
      return <h1>{ctaElement.label}</h1>;
    }
    if (element.__typename === CONTENT_TYPES.FOOTER) {
      console.log("footer", element);
      const footerElement = element as any;
      return <h1>footer</h1>;
    }
    if (element.__typename === CONTENT_TYPES.SECTION) {
      console.log("SECTION", element);
      if (Array.isArray(element.content) && element.content.length > 0) {
        return element.content.map((cont: any) => {
          return (
            <Section className="bg-bgreen" key={element.id}>
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
