import React from "react";
import { Props } from "./Board.types";

import "./Board.css";

import BoardSection from "../BoardSection/BoardSection";

const Board = ({ boards }: Props) => {
  return (
    <div className="board-container">
      {boards.map((board) => (
        <BoardSection title={board.name} cardCount={3} colors={board.colors}>
          <div>HEY</div>
        </BoardSection>
      ))}
    </div>
  );
};

export default Board;
