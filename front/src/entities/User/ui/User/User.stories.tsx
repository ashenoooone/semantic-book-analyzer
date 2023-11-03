import { User } from './User';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof User> = {
  title: 'User',
  component: User,
};

export default meta;
type Story = StoryObj<typeof User>;

export const Default: Story = {
};