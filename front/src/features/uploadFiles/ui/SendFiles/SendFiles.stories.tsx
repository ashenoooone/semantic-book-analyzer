import type { Meta, StoryObj } from '@storybook/react';
import { SendFiles } from './SendFiles';

const meta: Meta<typeof SendFiles> = {
	title: 'SendFiles',
	component: SendFiles
};

export default meta;
type Story = StoryObj<typeof SendFiles>;

export const Default: Story = {};
