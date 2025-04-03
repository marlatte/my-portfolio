import { Meta, StoryObj } from '@storybook/react';
import ComingSoon from './coming-soon';

const meta: Meta<typeof ComingSoon> = {
  component: ComingSoon,
  tags: ['autodocs'],
  args: {
    pageName: 'Page',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Music: Story = {
  args: {
    pageName: 'Music',
  },
};
