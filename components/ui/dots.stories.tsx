import { Meta, StoryObj } from '@storybook/react';
import Dots from './dots';

const meta: Meta<typeof Dots> = {
  component: Dots,
  decorators: [
    (Story) => (
      <div className="relative mt-12 min-h-96 rounded-lg ring">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
