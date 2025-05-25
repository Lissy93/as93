import adapterAuto from '@sveltejs/adapter-auto';
import adapterStatic from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
// import { sveltekit } from '@sveltejs/kit/vite';

const isStatic = process.env.IS_STATIC === 'true' || false;
const base = process.env.BASE_PATH ?? '';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	// plugins: [sveltekit()],
	kit: {
		adapter: isStatic ? adapterStatic() : adapterAuto(),
		paths: {
			base,
		}
	}
};

export default config;
