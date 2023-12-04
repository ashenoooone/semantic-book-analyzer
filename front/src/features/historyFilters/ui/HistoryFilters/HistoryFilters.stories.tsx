import type { Meta, StoryObj } from '@storybook/react';
import { HistoryFilters } from './HistoryFilters';

const meta: Meta<typeof HistoryFilters> = {
	title: 'HistoryFilters',
	component: HistoryFilters
};

export default meta;
type Story = StoryObj<typeof HistoryFilters>;

export const Default: Story = {};
