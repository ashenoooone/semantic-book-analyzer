import { FetchHistory } from './FetchHistory';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof FetchHistory> = {
  title: 'FetchHistory',
  component: FetchHistory,
};

export default meta;
type Story = StoryObj<typeof FetchHistory>;

export const Default: Story = {
};