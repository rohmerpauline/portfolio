import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { Footer } from './Footer';

const meta = {
  title: 'Example/Footer',
  component: Footer,
  parameters: {
    layout: 'centered',
    docs: { description: { component: 'Footer of the portfolio.' } },
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
