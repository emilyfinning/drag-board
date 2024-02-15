import { Colors } from "../types";

export interface Props {
  children: React.ReactNode;
  title: string;
  cardCount: number;
  colors?: Colors;
}
