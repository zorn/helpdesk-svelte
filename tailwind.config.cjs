/** @type {import('tailwindcss').Config}*/
const config = {
	// 1. Apply the dark mode class setting:
	darkMode: 'class',
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		require('path').join(require.resolve(
			'@skeletonlabs/skeleton'),
			'../**/*.{html,js,svelte,ts}'
		)
	],

	theme: {
		extend: {}
	},

	plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography'), ...require('@skeletonlabs/skeleton/tailwind/skeleton.cjs')()],

};

module.exports = config;
