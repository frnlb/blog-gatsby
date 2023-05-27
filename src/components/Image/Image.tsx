import React, { FunctionComponent } from "react";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";

interface ImageProps {
  image?: IGatsbyImageData;
  src?: string;
  alt?: string;
  [x: string]: any;
}

const Image: FunctionComponent<ImageProps> = ({
  image,
  src,
  alt,
  ...props
}) => {
  if (image) {
    console.log("🚀 ~ file: Image.tsx:18 ~ image:", image);

    return <GatsbyImage image={image} alt={alt || ""} {...props} />;
  }

  if (src) {
    return <img src={src} alt={alt || ""} {...props} />;
  }

  // Handle cases where neither `image` nor `src` prop is provided
  return null;
};

export default Image;
