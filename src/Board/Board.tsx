import React, { useState } from "react";
import { Props } from "./Board.types";

import "./Board.css";

import BoardSection from "../BoardSection/BoardSection";
import Card from "../Card/Card";

const Board = ({ boards }: Props) => {
  const [placeholder, setPlaceholder] = useState({
    board: null as number | null,
    task: null as number | null,
    height: "0px",
  });

  const addPlaceholder = (boardIndex, taskIndex, height) => {
    setPlaceholder({ board: boardIndex, task: taskIndex, height: height });
  };

  const removePlaceholder = () => {
    setPlaceholder({ board: null, task: null, height: "0px" });
  };

  return (
    <div className="board-container">
      {boards.map((board, bi) => (
        <BoardSection
          title={board.name}
          cardCount={board.tasks.length}
          colors={board.colors}
        >
          {board.tasks.map((task, ti) => (
            <>
              {ti === placeholder.task && bi === placeholder.board ? (
                <div
                  className="placeholder"
                  style={{ height: placeholder.height }}
                />
              ) : (
                <div />
              )}
              <Card
                title={task.name}
                description={task.description}
                tags={task.tags}
                addPlaceholder={(height) => addPlaceholder(bi, ti, height)}
                removePlaceholder={removePlaceholder}
              />
            </>
          ))}
        </BoardSection>
      ))}
    </div>
  );
};

export default Board;
