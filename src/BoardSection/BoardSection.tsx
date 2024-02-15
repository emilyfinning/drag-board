import React from "react";
import { Props } from "./BoardSection.types";
import "./BoardSection.css";

import { HiDotsHorizontal } from "react-icons/hi";

const BoardSection = ({ children, title, cardCount }: Props) => {
  return (
    <div className="board-section-container">
      <div className="board-section-header">
        <div className="board-section-header-left">
          <h2 className="board-section-title">{title}</h2>
          <div className="board-section-card-count">{cardCount}</div>
        </div>
        <button className="icon-button">
          <HiDotsHorizontal />
        </button>
      </div>
      {children}
    </div>
  );
};

export default BoardSection;
