import type { Meta, StoryObj } from '@storybook/react';
import { UploadFiles } from './UploadFiles';

const meta: Meta<typeof UploadFiles> = {
	title: 'UploadFiles',
	component: UploadFiles
};

export default meta;
type Story = StoryObj<typeof UploadFiles>;

export const Default: Story = {};
