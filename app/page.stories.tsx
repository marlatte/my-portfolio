import { Meta, StoryObj } from '@storybook/react';
import Page from './page';
import Root from '@/components/layouts/root';

const meta: Meta<typeof Page> = {
  title: 'Pages/Home',
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

export const Home: Story = {};
