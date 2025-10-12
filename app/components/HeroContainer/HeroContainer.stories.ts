import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { fn } from 'storybook/test';

import { HeroContainer } from './HeroContainer';

const meta = {
  title: 'Example/HeroContainer',
  component: HeroContainer,
  parameters: {
    layout: 'centered',
    docs: { description: { component: 'HeroContainer of the portfolio.' } },
  },
  tags: ['autodocs'],
  argTypes: {},
  args: { onClick: fn() },
} satisfies Meta<typeof HeroContainer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
