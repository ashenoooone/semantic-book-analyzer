import type { Meta, StoryObj } from '@storybook/react';
import { HistoryListItem } from './HistoryListItem';

const meta: Meta<typeof HistoryListItem> = {
	title: 'HistoryListItem',
	component: HistoryListItem
};

export default meta;
type Story = StoryObj<typeof HistoryListItem>;

export const Default: Story = {};
