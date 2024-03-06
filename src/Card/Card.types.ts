import { MutableRefObject } from "react";
import { Tag } from "../types";

export interface Props {
  id: string;
  title: string;
  description: string;
  tags: Tag[];
  addPlaceholder: (height: number) => void;
  removePlaceholder: () => void;
  addInsertPlaceholder: (height: number) => void;
  removeInsertPlaceholder: () => void;
  draggingCard: string | null;
  setDraggingCard: (value: string | null) => void;
  boardRef: MutableRefObject<HTMLDivElement>;
}
