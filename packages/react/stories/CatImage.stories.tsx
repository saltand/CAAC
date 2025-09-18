import type { Meta, StoryObj } from '@storybook/react';
import { CatImage } from '../src/CatImage';

const meta: Meta<typeof CatImage> = {
  title: 'Components/CatImage',
  component: CatImage,
  tags: ['autodocs'],
  args: {
    width: 320,
    height: 320
  }
};

export default meta;

type Story = StoryObj<typeof CatImage>;

export const Default: Story = {};

export const WideCard: Story = {
  args: {
    width: 480,
    height: 280
  }
};

export const WithCustomStyles: Story = {
  args: {
    style: {
      border: '2px solid #8b5cf6',
      boxShadow: '0 10px 30px rgba(139, 92, 246, 0.25)'
    }
  }
};
