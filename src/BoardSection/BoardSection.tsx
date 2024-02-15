import React from "react";
import { Props } from "./BoardSection.types";
import "./BoardSection.css";

const BoardSection = ({ children, title, cardCount }: Props) => {
  return (
    <div className="board-section-container">
      <div>
        <div>
          <h2 className="hey">{title}</h2>
          <div>{cardCount}</div>
        </div>
        <div></div>
      </div>
      {children}
    </div>
  );
};

export default BoardSection;
