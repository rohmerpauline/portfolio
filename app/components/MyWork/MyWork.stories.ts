import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { fn } from 'storybook/test';

import { MyWork } from './MyWork';

const meta = {
  title: 'Example/MyWork',
  component: MyWork,
  parameters: {
    layout: 'centered',
    docs: { description: { component: 'MyWork of the portfolio.' } },
  },
  tags: ['autodocs'],
  argTypes: {},
  args: { onClick: fn() },
} satisfies Meta<typeof MyWork>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
