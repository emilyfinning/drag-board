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
      },
      {
        id: "prog",
        name: "In Progress",
        colors: { main: "#EF6C00", light: "#FAD6B8" },
      },
      {
        id: "todo",
        name: "Complete",
        colors: { main: "#558B2F", light: "#D4E1CB" },
      },
    ],
  },
};
