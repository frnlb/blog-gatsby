import React from "react";
import type { Container } from "@types";

const Section = ({ children }: Container) => {
  return <div className="bg-bgreen">{children}</div>;
};

export default Section;
