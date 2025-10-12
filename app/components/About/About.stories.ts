import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { fn } from 'storybook/test';

import { About } from './About';

const meta = {
  title: 'Example/About',
  component: About,
  parameters: {
    layout: 'centered',
    docs: { description: { component: 'About of the portfolio.' } },
  },
  tags: ['autodocs'],
  argTypes: {},
  args: { onClick: fn() },
} satisfies Meta<typeof About>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
