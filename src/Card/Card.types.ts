import { Tag } from "../types";

export interface Props {
  title: string;
  description: string;
  tags: Tag[];
  addPlaceholder: (height: number) => void;
  removePlaceholder: () => void;
}
