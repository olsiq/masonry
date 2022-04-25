import React from "react";
import { CardLayout } from "../ui";
import { Content } from "./content/Content";
import { Details } from "./content/Details";

export const Card = ({ author, title, size, image, alt }) => {
  return (
    <CardLayout size={size}>
      <Content image={image} alt={alt} size={size} />
      <Details author={author} title={title} />
    </CardLayout>
  );
};
