import React, { useEffect, useRef, useState } from "react";
import { Props } from "./Card.types";
import "./Card.css";
import Tag from "../Tag/Tag";
import { useMousePosition } from "../hooks";

const dragStyle = (top: number, left: number, width: string) =>
  ({
    position: "absolute",
    top: top,
    left: left,
    width: width,
  } as React.CSSProperties);

const Card = ({ title, description, tags }: Props) => {
  const [isDragging, setIsDragging] = useState(false);
  const [cardWidth, setCardWidth] = useState("0px");
  const card = useRef<HTMLDivElement>();
  const mousePosition = useMousePosition();

  useEffect(() => {
    setCardWidth(`${card.current.clientWidth}px`);
  }, [card.current]);

  return (
    <div
      onMouseDown={() => setIsDragging(true)}
      onMouseUp={() => setIsDragging(false)}
      className="card-container"
      aria-role="button"
      style={
        isDragging ? dragStyle(mousePosition.y, mousePosition.x, cardWidth) : {}
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
