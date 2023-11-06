import type { Meta, StoryObj } from '@storybook/react';
import LoginPage from './LoginPage';

const meta: Meta<typeof LoginPage> = {
	title: 'LoginPage',
	component: LoginPage
};

export default meta;
type Story = StoryObj<typeof LoginPage>;

export const Default: Story = {};