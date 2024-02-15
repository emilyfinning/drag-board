import React from "react";

import type { Meta, StoryObj } from "@storybook/react";

import Base from "./Base";

const meta: Meta<typeof Base> = {
  component: Base,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Base>;

export const Main: Story = {
  args: {},
};
