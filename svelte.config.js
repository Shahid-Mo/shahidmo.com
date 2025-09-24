import adapter from '@sveltejs/adapter-static';
import { mdsvex } from 'mdsvex';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.md'],
	preprocess: [
		mdsvex({
			extensions: ['.md']
		})
	],
	kit: {
		adapter: adapter({
			fallback: undefined,
			precompress: false,
			strict: true,
			pages: '.svelte-kit/cloudflare'
		})
	}
};

export default config;
