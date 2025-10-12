import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { AboutCard } from './AboutCard';

const meta = {
  title: 'Example/AboutCard',
  component: AboutCard,
  parameters: {
    layout: 'centered',
    docs: { description: { component: 'AboutCard of the portfolio.' } },
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {},
} satisfies Meta<typeof AboutCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    aboutDataElement: {
      id: 1,
      title: 'The front-end developer',
      text: 'I build clear and accessible interfaces with React and Next.js — combining structure, simplicity, and attention to detail.',
      tags: [
        'React',
        'Next.js',
        'TypeScript',
        'Redux',
        'Tailwind',
        'CSS Modules',
        'ECharts',
      ],
    },
  },
};
