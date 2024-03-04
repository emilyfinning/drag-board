import React from "react";
import { Props } from "./Card.types";
import "./Card.css";

const Card = ({ title, description }: Props) => {
  return (
    <div className="card-container" aria-role="button">
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{description}</p>
    </div>
  );
};

export default Card;
