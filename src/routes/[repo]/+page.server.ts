import { GITHUB_TOKEN } from '$env/static/private';

import { fetchRepoDetails, fetchReadme, findRepoMeta } from './../../helpers/fetchRepo';

import config from '../../config';

export const prerender = true;

export async function load({ params, fetch }) {
  const { repo } = params;
  const githubUser = config.githubUser;
  const repoDetails = await fetchRepoDetails(githubUser, repo, fetch, GITHUB_TOKEN)
    .catch((error) => {
      console.error(`Error fetching repo details: ${error.message}`);
      return {};
    });

  const readme = await fetchReadme(githubUser, repo, fetch, GITHUB_TOKEN)
    .catch((error) => {
      console.error(`Error fetching README: ${error.message}`);
      return '';
    });

  const meta = findRepoMeta(repo, config.projects) || {};
  return { repoDetails, readme, meta };
}
