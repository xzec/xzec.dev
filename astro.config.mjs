// @ts-check
import { defineConfig, envField } from 'astro/config'

import tailwind from '@astrojs/tailwind'

// https://astro.build/config
export default defineConfig({
  site: 'https://xzec.dev',
  devToolbar: {
    enabled: false,
  },
  env: {
    schema: {
      PUBLIC_UPDATED_AT: envField.string({
        context: 'client',
        access: 'public',
        default: 'N/A',
      }),
      PUBLIC_VERSION: envField.string({
        context: 'client',
        access: 'public',
        default: 'N/A',
      }),
    },
  },
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
  ],
  server: {
    open: true,
    port: 3000,
  },
})
