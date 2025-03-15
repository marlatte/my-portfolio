import { Meta, StoryObj } from '@storybook/react';
import Heading from './styled-heading';

const meta: Meta<typeof Heading> = {
  component: Heading,
  tags: ['autodocs'],
  args: {
    children: 'Hello World',
    level: 1,
    id: 'test-id',
    className: '',
  },
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const AShortTitle: Story = {
  args: {
    children: 'Hi',
  },
};
export const ALongTitle: Story = {
  args: {
    children: 'Do People Even Read Anymore?',
  },
};
