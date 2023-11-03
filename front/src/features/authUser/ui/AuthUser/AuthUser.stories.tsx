import { AuthUser } from './AuthUser';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof AuthUser> = {
  title: 'AuthUser',
  component: AuthUser,
};

export default meta;
type Story = StoryObj<typeof AuthUser>;

export const Default: Story = {
};