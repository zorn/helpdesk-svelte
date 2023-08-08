import { vitePreprocess } from '@sveltejs/kit/vite';
import adapter from '@sveltejs/adapter-auto';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		alias: {
			$houdini: './$houdini',
		}
	},
	preprocess: [vitePreprocess({})]

};

export default config;
