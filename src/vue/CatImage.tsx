import { defineComponent, ref, computed, onMounted, h } from 'vue';
import { fetchCatImage, normalizeDimension, isBrowser } from '../shared';
import styles from './CatImage.module.css';

interface Props {
  width?: number | string;
  height?: number | string;
}

export default defineComponent({
  name: 'CatImage',
  props: {
    width: {
      type: [Number, String],
      default: 300
    },
    height: {
      type: [Number, String],
      default: 300
    }
  },
  setup(props: Props) {
    // Reactive state
    const imageUrl = ref<string>('');
    const loading = ref(true);
    const error = ref<boolean>(false);

    // Computed properties for normalized dimensions
    const normalizedWidth = computed(() => normalizeDimension(props.width));
    const normalizedHeight = computed(() => normalizeDimension(props.height));

    // Main function to fetch cat image
    const loadCatImage = async () => {
      loading.value = true;
      error.value = false;
      
      try {
        const result = await fetchCatImage();
        
        if (result.error || !result.data) {
          error.value = true;
        } else {
          imageUrl.value = result.data.url;
        }
      } catch (err) {
        error.value = true;
      } finally {
        loading.value = false;
      }
    };

    // Initialize on mount (SSR-safe)
    onMounted(() => {
      if (isBrowser()) {
        loadCatImage();
      }
    });

    return {
      imageUrl,
      loading,
      error,
      normalizedWidth,
      normalizedHeight,
      loadCatImage
    };
  },
  render() {
    const containerStyle = {
      width: this.normalizedWidth,
      height: this.normalizedHeight
    };

    return h('div', 
      {
        class: styles.container,
        style: containerStyle
      },
      [
        this.loading && h('div', 
          { class: styles.placeholder }, 
          'Loading cat...'
        ),
        this.error && !this.loading && h('div', 
          { class: styles.error }, 
          'Failed to load cat image'
        ),
        !this.loading && !this.error && h('img', {
          src: this.imageUrl,
          alt: 'Random cat',
          class: styles.image
        })
      ].filter(Boolean)
    );
  }
});