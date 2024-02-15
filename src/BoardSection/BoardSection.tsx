import React from "react";
import { Props } from "./BoardSection.types";
import "./BoardSection.css";

import { HiDotsHorizontal } from "react-icons/hi";
import { colors as themecolors } from "../vars";

const BoardSection = ({ children, title, cardCount, colors }: Props) => {
  return (
    <div className="board-section-container">
      <div className="board-section-header">
        <div className="board-section-header-left">
          <h2 className="board-section-title">{title}</h2>
          <div
            className="board-section-card-count"
            style={{
              backgroundColor: colors ? colors.light : themecolors.accentLight,
              color: colors ? colors.main : themecolors.accent,
            }}
          >
            {cardCount}
          </div>
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
