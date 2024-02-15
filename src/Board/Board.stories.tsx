import React from "react";

import type { Meta, StoryObj } from "@storybook/react";

import Board from "./Board";

const meta: Meta<typeof Board> = {
  component: Board,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Board>;

export const Main: Story = {
  args: {
    boards: [
      {
        id: "todo",
        name: "ToDo",
        colors: { main: "#BF360C", light: "#F1D3CA" },
        tasks: [
          { id: "1", name: "Upgrade to version 1.3.5" },
          { id: "2", name: "Scope out new feature" },
        ],
      },
      {
        id: "prog",
        name: "In Progress",
        colors: { main: "#EF6C00", light: "#FAD6B8" },
        tasks: [{ id: "1", name: "Meet with product team" }],
      },
      {
        id: "todo",
        name: "Complete",
        colors: { main: "#558B2F", light: "#D4E1CB" },
        tasks: [
          { id: "1", name: "Write up documentation" },
          { id: "1", name: "Remove package vulnerabilities" },
          { id: "1", name: "Create new marketing content" },
        ],
      },
    ],
  },
};
