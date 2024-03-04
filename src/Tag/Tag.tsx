import React from "react";
import { Props } from "./Tag.types";
import "./Tag.css";

const Tag = ({ color, text }: Props) => {
  console.log(color, text);
  return (
    <div className="tag-container">
      <div className="tag-dot" style={{ backgroundColor: color }} />
      <div>{text}</div>
    </div>
  );
};

export default Tag;
