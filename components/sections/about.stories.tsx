import { Meta, StoryObj } from '@storybook/react';
import About from './about';

const meta: Meta<typeof About> = {
  component: About,
  decorators: [
    (Story) => (
      <div className="bg-neutral-900">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
