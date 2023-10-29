import type { Meta, StoryObj } from '@storybook/react';
import HistoryPage from './HistoryPage';

const meta: Meta<typeof HistoryPage> = {
	title: 'HistoryPage',
	component: HistoryPage
};

export default meta;
type Story = StoryObj<typeof HistoryPage>;

export const Default: Story = {};
