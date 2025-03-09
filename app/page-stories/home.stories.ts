import { Meta, StoryObj } from '@storybook/react';
import Home from '../page';

const meta: Meta<typeof Home> = {
  component: Home,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
