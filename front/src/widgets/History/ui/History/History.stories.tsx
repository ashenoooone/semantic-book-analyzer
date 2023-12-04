import type { Meta, StoryObj } from '@storybook/react';
import { History } from './History';

const meta: Meta<typeof History> = {
	title: 'History',
	component: History
};

export default meta;
type Story = StoryObj<typeof History>;

export const Default: Story = {};
