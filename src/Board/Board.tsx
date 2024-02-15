import React from "react";
import { Props } from "./Board.types";

import "./Board.css";

import BoardSection from "../BoardSection/BoardSection";

const Board = ({}: Props) => {
  return (
    <div className="board-container">
      <BoardSection title="Todo" cardCount={3}>
        <div>HEY</div>
      </BoardSection>
    </div>
  );
};

export default Board;
