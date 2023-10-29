import type { Meta, StoryObj } from '@storybook/react';
import MainPage from './MainPage';

const meta: Meta<typeof MainPage> = {
	title: 'MainPage',
	component: MainPage
};

export default meta;
type Story = StoryObj<typeof MainPage>;

export const Default: Story = {};
