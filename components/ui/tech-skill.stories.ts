import { Meta, StoryObj } from '@storybook/react';
import Skill from './tech-skill';

const meta: Meta<typeof Skill> = {
  component: Skill,
  args: {
    href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    name: 'JavaScript',
    src: '/logos/javascript.svg',
  },
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
