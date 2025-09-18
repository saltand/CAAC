import type { Preview } from '@storybook/react';

const CAT_API_ENDPOINT = 'api.thecatapi.com/v1/images/search';

const patchFetch = () => {
  if (typeof globalThis.fetch !== 'function') {
    return;
  }

  const globalAny = globalThis as typeof globalThis & {
    __CAAC_STORYBOOK_FETCH_PATCHED__?: boolean;
  };

  if (globalAny.__CAAC_STORYBOOK_FETCH_PATCHED__) {
    return;
  }

  const originalFetch = globalThis.fetch.bind(globalThis);
  const mockResponse = JSON.stringify([
    {
      id: 'storybook-cat',
      url: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?auto=format&fit=crop&w=600&q=80'
    }
  ]);

  globalAny.__CAAC_STORYBOOK_FETCH_PATCHED__ = true;
  globalThis.fetch = async (input: RequestInfo | URL, init?: RequestInit) => {
    const url = (() => {
      if (typeof input === 'string') {
        return input;
      }

      if (input instanceof URL) {
        return input.toString();
      }

      return input.url;
    })();

    if (url.includes(CAT_API_ENDPOINT)) {
      return new Response(mockResponse, {
        status: 200,
        headers: {
          'Content-Type': 'application/json'
        }
      });
    }

    return originalFetch(input, init);
  };
};

patchFetch();

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    }
  }
};

export default preview;
