import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '../../../lib/main';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    variant: {
      options: ['outlined', 'filled'],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Outlined: Story = {
  args: {
    variant: 'outlined',
  },
};

export const Filled: Story = {
  args: {
    variant: 'filled',
  },
};
