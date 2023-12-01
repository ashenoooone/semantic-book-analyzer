import type { Meta, StoryObj } from '@storybook/react';
import { Disclosure } from './Disclosure';

const meta: Meta<typeof Disclosure> = {
	title: 'Disclosure',
	component: Disclosure
};

export default meta;
type Story = StoryObj<typeof Disclosure>;

export const Default: Story = {};
