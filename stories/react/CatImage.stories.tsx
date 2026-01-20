import type { Meta, StoryObj } from '@storybook/react'
import { CatImage } from '../../src/react'

const meta: Meta<typeof CatImage> = {
  title: 'React/CatImage',
  component: CatImage,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    width: {
      control: { type: 'number' },
      description: 'Width of the image container',
    },
    height: {
      control: { type: 'number' },
      description: 'Height of the image container',
    },
    placeholder: {
      control: { type: 'text' },
      description: 'Placeholder text while loading',
    },
    showSwitchButton: {
      control: { type: 'boolean' },
      description: 'Show switch button to change the cat image',
    },
    apiKey: {
      control: { type: 'text' },
      description: 'API key for The Cat API',
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    width: 300,
    height: 300,
  },
}

export const WithSwitchButton: Story = {
  args: {
    width: 300,
    height: 300,
    showSwitchButton: true,
  },
}

export const CustomSize: Story = {
  args: {
    width: 400,
    height: 250,
  },
}

export const SmallImage: Story = {
  args: {
    width: 150,
    height: 150,
    showSwitchButton: true,
  },
}

export const CustomPlaceholder: Story = {
  args: {
    width: 300,
    height: 300,
    placeholder: '🐱 Loading a cute cat...',
  },
}
