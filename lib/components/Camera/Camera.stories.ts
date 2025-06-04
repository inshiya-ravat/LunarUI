import type { Meta, StoryObj } from '@storybook/react';

import { Camera } from '../../../lib/main';

const meta: Meta<typeof Camera> = {
  title: 'Components/Camera',
  component: Camera,
};

export default meta;

type Story = StoryObj<typeof Camera>;

export const Normal: Story = {};
