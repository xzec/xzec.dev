// @ts-check
import { defineConfig, envField } from 'astro/config'

import tailwindcss from '@tailwindcss/vite'

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
  vite: {
    plugins: [tailwindcss()],
  },
  server: {
    open: true,
    port: 3000,
  },
})
