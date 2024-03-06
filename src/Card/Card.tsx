import React, { useEffect, useRef, useState } from "react";
import { Props } from "./Card.types";
import "./Card.css";
import Tag from "../Tag/Tag";
import { useMousePosition } from "../hooks";

const dragStyle = (top: number, left: number, width: string) =>
  ({
    position: "fixed",
    top: top,
    left: left,
    width: width,
    zIndex: 100,
  } as React.CSSProperties);

const Card = ({
  id,
  title,
  description,
  tags,
  addPlaceholder,
  removePlaceholder,
  addInsertPlaceholder,
  removeInsertPlaceholder,
  draggingCard,
  setDraggingCard,
  boardRef,
}: Props) => {
  const [isDragging, setIsDragging] = useState(false);
  const [cardWidth, setCardWidth] = useState("0px");
  const [cardOffsetX, setCardOffsetX] = useState(0);
  const [cardOffsetY, setCardOffsetY] = useState(0);
  const card = useRef<HTMLDivElement>();
  const mousePosition = useMousePosition();

  const handleMouseDown = () => {
    addPlaceholder(card.current.clientHeight - 4);
    setIsDragging(true);
    setDraggingCard(id);
  };

  const handleMouseUp = () => {
    removePlaceholder();
    setIsDragging(false);
    setDraggingCard(null);
  };

  useEffect(() => {
    if (card.current && cardWidth === "0px") {
      setCardWidth(`${card.current.clientWidth}px`);
      const cardRect = card.current.getBoundingClientRect();
    }
    const boardRect = boardRef.current.getBoundingClientRect();
    setCardOffsetX(boardRect.left + 150);
    setCardOffsetY(boardRect.top + 40);
  }, [card.current?.clientWidth, boardRef.current?.getBoundingClientRect()]);

  useEffect(() => {
    if (draggingCard && draggingCard !== id) {
      const cardRect = card.current.getBoundingClientRect();
      if (mousePosition.x > cardRect.left && mousePosition.x < cardRect.right) {
        const upperCard = cardRect.y + (1 / 3) * cardRect.height;
        if (
          mousePosition.y < upperCard &&
          mousePosition.y > cardRect.top - 50
        ) {
          addInsertPlaceholder(cardRect.height - 4);
        }
      } else {
        removeInsertPlaceholder();
      }
    }
  }, [mousePosition]);

  return (
    <div
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      className="card-container"
      aria-role="button"
      style={
        isDragging
          ? dragStyle(
              mousePosition.y - cardOffsetY,
              mousePosition.x - cardOffsetX,
              cardWidth,
            )
          : {}
      }
      ref={card}
    >
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{description}</p>
      <div className="card-tags">
        {tags.map((tag) => (
          <Tag key={`tag-${tag.name}`} color={tag.color} text={tag.name} />
        ))}
      </div>
    </div>
  );
};

export default Card;
