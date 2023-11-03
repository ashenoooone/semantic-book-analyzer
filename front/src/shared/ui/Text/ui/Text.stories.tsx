import type { Meta, StoryObj } from '@storybook/react';
import { Text } from './Text';

const meta: Meta<typeof Text> = {
  title: 'shared/Text',
  component: Text,
};

export default meta;
type Story = StoryObj<typeof Text>;

export const OnlyTitle: Story = {
  args: {
    title: 'title',
  },
};

export const OnlyText: Story = {
  args: {
    text: 'text',
  },
};

export const Error: Story = {
  args: {
    error: true,
    text: 'error',
    title: 'error',
  },
};
