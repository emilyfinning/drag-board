import React, { useRef, useState } from "react";
import { Props } from "./Board.types";

import "./Board.css";

import BoardSection from "../BoardSection/BoardSection";
import Card from "../Card/Card";

const Board = ({ boards }: Props) => {
  const [draggingCard, setDraggingCard] = useState<string | null>(null);
  const [placeholder, setPlaceholder] = useState({
    board: null as number | null,
    task: null as number | null,
    height: "0px",
  });
  const [insertPlaceholder, setInsertPlaceholder] = useState({
    board: null as number | null,
    task: null as number | null,
    height: "0px",
  });
  const boardRef = useRef<HTMLDivElement>();

  const addPlaceholder = (boardIndex, taskIndex, height) => {
    setPlaceholder({ board: boardIndex, task: taskIndex, height: height });
  };

  const removePlaceholder = () => {
    setPlaceholder({ board: null, task: null, height: "0px" });
  };

  const addInsertPlaceholder = (boardIndex, taskIndex, height) => {
    console.log("DOING AN INSERT", boardIndex, taskIndex);
    console.log(insertPlaceholder);
    setInsertPlaceholder({
      board: boardIndex,
      task: taskIndex,
      height: height,
    });
  };

  const removeInsertPlaceholder = () => {
    // console.log("DOING A REMOVAL");
    setInsertPlaceholder({ board: null, task: null, height: "0px" });
  };

  return (
    <div className="board-container" ref={boardRef}>
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
              {ti === insertPlaceholder.task &&
              bi === insertPlaceholder.board ? (
                <div
                  className="insert-placeholder"
                  style={{ height: insertPlaceholder.height }}
                />
              ) : (
                <div />
              )}
              <Card
                id={task.id}
                title={task.name}
                description={task.description}
                tags={task.tags}
                addPlaceholder={(height) => addPlaceholder(bi, ti, height)}
                removePlaceholder={removePlaceholder}
                addInsertPlaceholder={(height) =>
                  !(
                    insertPlaceholder.board === bi &&
                    insertPlaceholder.task === ti
                  ) && addInsertPlaceholder(bi, ti, height)
                }
                removeInsertPlaceholder={() =>
                  insertPlaceholder.board === bi &&
                  insertPlaceholder.task === ti &&
                  removeInsertPlaceholder()
                }
                boardRef={boardRef}
                setDraggingCard={(value) => setDraggingCard(value)}
                draggingCard={draggingCard}
              />
            </>
          ))}
        </BoardSection>
      ))}
    </div>
  );
};

export default Board;
