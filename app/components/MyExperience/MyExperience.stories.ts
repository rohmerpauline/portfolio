import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { fn } from 'storybook/test';

import { MyExperience } from './MyExperience';

const meta = {
  title: 'Example/MyExperience',
  component: MyExperience,
  parameters: {
    layout: 'centered',
    docs: { description: { component: 'MyExperience of the portfolio.' } },
  },
  tags: ['autodocs'],
  argTypes: {},
  args: { onClick: fn() },
} satisfies Meta<typeof MyExperience>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
