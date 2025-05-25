import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import preprocess from 'svelte-preprocess';
import adapterStatic from '@sveltejs/adapter-static';
import adapterAuto from '@sveltejs/adapter-auto';

const isStatic = process.env.IS_STATIC === 'true' || false;
const base = process.env.BASE_PATH ?? '';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocess(),
	plugins: [sveltekit()],
	kit: {
		adapter: isStatic ? adapterStatic() : adapterAuto(),
		paths: {
			base,
		}
	}
};

export default defineConfig(config);
