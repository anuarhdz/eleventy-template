/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin');

module.exports = {
  content: [
		"./src/**/*.{liquid,html}",
		"./src/_data/**/*.json",
		"./assets/**/*.js",
	],
  theme: {
    extend: {},
  },
  plugins: [
		plugin(function({ addBase, addComponents }) {
			addBase({
				':root': {
					'--max-inline-size': '75rem',
					'--padding-inline': 'min(30px, 4vw)',
					'--margin-inline': 'auto',
				}
			});
			addComponents({
				'.container': {
					'maxInlineSize': 'var(--max-inline-size)',
					'paddingInline': 'var(--padding-inline)',
					'marginInline': 'var(--margin-inline)',
				}
			});
		})
	],
	corePlugins: {
		container: false,
	}
}

