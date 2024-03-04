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
          {
            id: "1",
            name: "Upgrade to version 1.3.5",
            description:
              "The task 'Upgrade to version 1.3.5' involves updating the software or system to the specified version 1.3.5, which likely includes implementing new features, bug fixes, and performance enhancements provided in that version. This process typically requires careful planning, testing, and deployment to ensure a smooth transition and improved functionality.",
          },
          {
            id: "2",
            name: "Scope out new feature",
            description:
              "The task 'Scope out new feature' involves defining the parameters, requirements, and potential implications of implementing a specific addition or enhancement to a software, product, or service. This process typically includes conducting research, gathering user feedback, and collaborating with stakeholders to outline the feature's objectives, functionality, and anticipated impact on the overall project.",
          },
        ],
      },
      {
        id: "prog",
        name: "In Progress",
        colors: { main: "#EF6C00", light: "#FAD6B8" },
        tasks: [
          {
            id: "1",
            name: "Meet with product team",
            description:
              "The task 'meet with the product team' entails organizing a collaborative session where members discuss various aspects of the product's development, including upcoming features, user feedback, and strategic planning. During the meeting, participants share insights, align priorities, and make decisions to steer the product's direction effectively, fostering communication and synergy among team members to drive innovation and success.",
          },
        ],
      },
      {
        id: "todo",
        name: "Complete",
        colors: { main: "#558B2F", light: "#D4E1CB" },
        tasks: [
          {
            id: "1",
            name: "Write up documentation",
            description:
              "The task 'Write up documentation' involves creating comprehensive and accessible documents that detail various aspects of a project, process, or product. This documentation typically includes instructions, guidelines, specifications, and other relevant information to aid users, stakeholders, or team members in understanding and utilizing the resources effectively. The aim is to provide clear and concise documentation to facilitate smooth implementation, troubleshooting, and maintenance of the subject matter.",
          },
          {
            id: "1",
            name: "Remove package vulnerabilities",
            description:
              "The task 'Remove package vulnerabilities' entails identifying and addressing security vulnerabilities present within software packages or dependencies. This involves conducting thorough vulnerability assessments, updating or removing affected packages, and implementing necessary security patches or fixes to mitigate potential risks. The goal is to enhance the overall security posture of the software ecosystem and protect against potential exploits or breaches.",
          },
          {
            id: "1",
            name: "Create new marketing content",
            description:
              "The task 'Create new marketing content' involves developing fresh and engaging materials to promote products, services, or brands across various channels. This includes crafting compelling copy, designing eye-catching visuals, and formulating strategic messaging to resonate with target audiences. The goal is to attract and retain customers, drive engagement, and ultimately contribute to the overall marketing objectives and business growth.",
          },
        ],
      },
    ],
  },
};
