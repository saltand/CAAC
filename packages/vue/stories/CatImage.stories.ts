import type { Meta, StoryObj } from '@storybook/vue3';
import CatImage from '../src/CatImage.vue';

type CatImageComponent = typeof CatImage;

const meta: Meta<CatImageComponent> = {
  title: 'Components/CatImage',
  component: CatImage,
  tags: ['autodocs'],
  args: {
    width: 320,
    height: 320
  },
  render: (args) => ({
    components: { CatImage },
    setup() {
      return { args };
    },
    template: '<CatImage v-bind="args" />'
  })
};

export default meta;

type Story = StoryObj<CatImageComponent>;

export const Default: Story = {};

export const WideCard: Story = {
  args: {
    width: 480,
    height: 280
  }
};

export const WithCustomWidth: Story = {
  args: {
    width: '100%'
  }
};
