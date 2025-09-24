import adapter from '@sveltejs/adapter-static';
import { mdsvex } from 'mdsvex';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.md'],
	preprocess: [
		mdsvex({
			extensions: ['.md'],
			layout: './src/lib/components/PostLayout.svelte'
		})
	],
	kit: {
		adapter: adapter({
			fallback: undefined,
			precompress: false,
			strict: true
		})
	}
};

export default config;
