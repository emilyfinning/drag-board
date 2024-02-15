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
  args: {},
};
