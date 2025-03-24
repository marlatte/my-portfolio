import { Meta, StoryObj } from '@storybook/react';
import Page from './page';
import Root from '@/components/layouts/root';

const meta: Meta<typeof Page> = {
  title: 'Pages/Stack',
  component: Page,
  decorators: [
    (Story) => (
      <Root>
        <Story />
      </Root>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Stack: Story = {};
