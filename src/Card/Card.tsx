import React from "react";
import { Props } from "./Card.types";
import "./Card.css";
import Tag from "../Tag/Tag";

const Card = ({ title, description, tags }: Props) => {
  return (
    <div className="card-container" aria-role="button">
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{description}</p>
      <div className="card-tags">
        {tags.map((tag) => (
          <Tag key={`tag-${tag.name}`} color={tag.color} text={tag.name} />
        ))}
      </div>
    </div>
  );
};

export default Card;
