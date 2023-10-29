import type { Meta, StoryObj } from '@storybook/react';
import { Tab } from './Tab';

const meta: Meta<typeof Tab> = {
	title: 'Tab',
	component: Tab
};

export default meta;
type Story = StoryObj<typeof Tab>;

export const Default: Story = {};
