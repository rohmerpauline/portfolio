import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { SectionSubHeading } from './SectionSubHeading';

const meta = {
  title: 'Example/SectionSubHeading',
  component: SectionSubHeading,
  parameters: {
    layout: 'centered',
    docs: { description: { component: 'SectionSubHeading of the portfolio.' } },
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {},
} satisfies Meta<typeof SectionSubHeading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { subheading: '<MyWork project={project} />' },
};

export const NoCurlyBrace: Story = {
  args: { subheading: '<MyWork project=project />' },
};
