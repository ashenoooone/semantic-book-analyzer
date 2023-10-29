import { ReportHistoryItem } from './ReportHistoryItem';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ReportHistoryItem> = {
  title: 'ReportHistoryItem',
  component: ReportHistoryItem,
};

export default meta;
type Story = StoryObj<typeof ReportHistoryItem>;

export const Default: Story = {
};