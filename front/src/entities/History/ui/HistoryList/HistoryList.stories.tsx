import type { Meta, StoryObj } from '@storybook/react';
import { HistoryList } from './HistoryList';

const meta: Meta<typeof HistoryList> = {
	title: 'History',
	component: HistoryList
};

export default meta;
type Story = StoryObj<typeof HistoryList>;

export const Default: Story = {};
