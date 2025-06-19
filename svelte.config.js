import adapterAuto from '@sveltejs/adapter-auto';
import adapterStatic from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const isStatic = process.env.IS_STATIC === 'true' || false;
const base = process.env.BASE_PATH ?? '';
const githubToken = process.env.GITHUB_TOKEN;

async function getGithubSlugs() {
	if (!githubToken) return [];
	try {
		const res = await fetch(`https://api.github.com/users/lissy93/repos?per_page=100`, {
			headers: { Authorization: `Bearer ${githubToken}` }
		});
		if (!res.ok) throw new Error(`GitHub API failed: ${res.status}`);
		const repos = await res.json();
		return repos.map((repo) => `/${repo.name}`);
	} catch (err) {
		console.warn(`⚠️ Failed to fetch GitHub repos: ${err.message}`);
		return [];
	}
}

const githubSlugs = await getGithubSlugs();

console.log(githubSlugs)


if (isStatic && githubSlugs.length === 0) {
	throw new Error('⚠️ No GitHub slugs found. Ensure GITHUB_TOKEN is set and has access to public repos.');
}

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: isStatic ? adapterStatic() : adapterAuto(),
		paths: {
			base,
		},
		prerender: {
			entries: githubSlugs,
		}
	},
};

export default config;
