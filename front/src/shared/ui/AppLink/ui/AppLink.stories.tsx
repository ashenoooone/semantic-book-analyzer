import type { Meta, StoryObj } from '@storybook/react';
import { AppLink } from './AppLink';

const meta: Meta<typeof AppLink> = {
	title: 'AppLink',
	component: AppLink
};

export default meta;
type Story = StoryObj<typeof AppLink>;

export const Default: Story = {};
