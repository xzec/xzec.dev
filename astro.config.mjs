// @ts-check
import { defineConfig } from 'astro/config'

import tailwind from '@astrojs/tailwind'

// https://astro.build/config
export default defineConfig({
  site: 'https://xzec.dev',
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
