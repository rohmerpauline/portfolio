import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { ProjectCard } from './ProjectCard';

const meta = {
  title: 'Example/ProjectCard',
  component: ProjectCard,
  parameters: {
    layout: 'centered',
    docs: { description: { component: 'ProjectCard of the portfolio.' } },
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {},
} satisfies Meta<typeof ProjectCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    projectData: {
      id: 1,
      title: 'EuCityCalc',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed iaculis odio id purus dignissim finibus. Interdum et malesuada fames ac ante ipsum primis in faucibus. In lobortis sagittis odio, a varius ipsum.',
      url: 'https://pathwaysexplorer.climact.com',
      githubUrl: null,
      image: '/images/pathways_explorer.png',
    },
  },
};
