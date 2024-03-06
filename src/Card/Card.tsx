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
  title,
  description,
  tags,
  addPlaceholder,
  removePlaceholder,
  boardRef,
}: Props) => {
  const [isDragging, setIsDragging] = useState(false);
  const [cardWidth, setCardWidth] = useState("0px");
  const [cardOffsetX, setCardOffsetX] = useState(0);
  const [cardOffsetY, setCardOffsetY] = useState(0);
  const card = useRef<HTMLDivElement>();
  const mousePosition = useMousePosition();

  const handleMouseDown = () => {
    addPlaceholder(card.current.clientHeight);
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    removePlaceholder();
    setIsDragging(false);
  };

  useEffect(() => {
    if (cardWidth === "0px") {
      setCardWidth(`${card.current.clientWidth}px`);
    }
    setCardOffsetX(boardRef.current.getBoundingClientRect().left + 150);
    setCardOffsetY(boardRef.current.getBoundingClientRect().top + 40);
  }, [card.current?.clientWidth, boardRef.current?.getBoundingClientRect()]);

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
