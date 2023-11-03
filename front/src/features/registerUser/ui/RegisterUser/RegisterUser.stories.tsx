import { RegisterUser } from './RegisterUser';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof RegisterUser> = {
  title: 'RegisterUser',
  component: RegisterUser,
};

export default meta;
type Story = StoryObj<typeof RegisterUser>;

export const Default: Story = {
};