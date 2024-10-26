import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'selector',
	theme: {
		extend: {
			colors: {
				'nightblue': '#2f00be',
				'chgreen': {
					'50': '#eefff4',
					'100': '#d7ffe8',
					'200': '#b2ffd2',
					'300': '#76ffb0',
					'400': '#33f587',
					'500': '#09de65',
					'600': '#00a849',
					'700': '#049142',
					'800': '#0a7138',
					'900': '#0a5d30',
					'950': '#003418',
				},

			},
			fontFamily: {
				mono: ['JetBrainsMono', ...defaultTheme.fontFamily.mono],
			},
		},
	},
	plugins: [],
}
