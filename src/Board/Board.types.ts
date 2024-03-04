import { Colors } from "../types";

export interface Props {
  boards: {
    id: string;
    name: string;
    colors?: Colors;
    tasks: { id: string; name: string; description: string }[];
  }[];
}
