import { Colors, Tag } from "../types";

export interface Props {
  boards: {
    id: string;
    name: string;
    colors?: Colors;
    tasks: Task[];
  }[];
}

type Task = { id: string; name: string; description: string; tags: Tag[] };
