import { Meta, StoryObj } from '@storybook/react';
import Dots from './dots';

const meta: Meta<typeof Dots> = {
  component: Dots,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
