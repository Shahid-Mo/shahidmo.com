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
			pages: '.svelte-kit/cloudflare',
			assets: '.svelte-kit/cloudflare',
			fallback: undefined,
			precompress: false,
			strict: true
		})
	}
};

export default config;
