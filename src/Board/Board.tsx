import React from "react";
import { Props } from "./Board.types";

import "./Board.css";

const Board = ({}: Props) => {
  return (
    <div className="board-container">
      <div>
        <div>
          <h2 className="hey">Todo</h2>
          <div>3</div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Board;
