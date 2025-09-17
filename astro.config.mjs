// @ts-check
import { defineConfig, envField } from 'astro/config'

import tailwindcss from '@tailwindcss/vite'

// inject computed env vars in dev server
if (process.env.NODE_ENV === 'development') {
  process.env.PUBLIC_UPDATED_AT = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })
  process.env.PUBLIC_VERSION = (
    await import('./package.json', { assert: { type: 'json' } })
  ).version
}

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
