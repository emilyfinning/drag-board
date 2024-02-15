import React from "react";
import { Props } from "./Board.types";

import "./Board.css";

import BoardSection from "../BoardSection/BoardSection";
import Card from "../Card/Card";

const Board = ({ boards }: Props) => {
  return (
    <div className="board-container">
      {boards.map((board) => (
        <BoardSection title={board.name} cardCount={3} colors={board.colors}>
          {board.tasks.map((task) => (
            <Card title={task.name} />
          ))}
        </BoardSection>
      ))}
    </div>
  );
};

export default Board;
