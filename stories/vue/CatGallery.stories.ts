import type { Meta, StoryObj } from '@storybook/vue3'
import CatGallery from '../../src/vue/CatGallery.vue'

const meta: Meta<typeof CatGallery> = {
  title: 'Vue/CatGallery',
  component: CatGallery,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    count: {
      control: { type: 'number', min: 1, max: 20 },
      description: 'Number of cat images to display',
    },
    columns: {
      control: { type: 'number', min: 1, max: 6 },
      description: 'Number of columns in the grid',
    },
    gap: {
      control: { type: 'number' },
      description: 'Gap between images in pixels',
    },
    imageWidth: {
      control: { type: 'number' },
      description: 'Width of each image',
    },
    imageHeight: {
      control: { type: 'number' },
      description: 'Height of each image',
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
    count: 6,
    columns: 3,
    gap: 16,
    imageWidth: 200,
    imageHeight: 200,
  },
}

export const TwoColumns: Story = {
  args: {
    count: 4,
    columns: 2,
    gap: 16,
    imageWidth: 250,
    imageHeight: 250,
  },
}

export const FourColumns: Story = {
  args: {
    count: 8,
    columns: 4,
    gap: 12,
    imageWidth: 150,
    imageHeight: 150,
  },
}

export const LargeGallery: Story = {
  args: {
    count: 12,
    columns: 4,
    gap: 20,
    imageWidth: 180,
    imageHeight: 180,
  },
}

export const SingleColumn: Story = {
  args: {
    count: 3,
    columns: 1,
    gap: 16,
    imageWidth: 300,
    imageHeight: 200,
  },
}
