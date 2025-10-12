import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { SectionHeading } from './SectionHeading';

const meta = {
  title: 'Example/SectionHeading',
  component: SectionHeading,
  parameters: {
    layout: 'centered',
    docs: { description: { component: 'SectionHeading of the portfolio.' } },
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {},
} satisfies Meta<typeof SectionHeading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { heading: 'My work' },
};
