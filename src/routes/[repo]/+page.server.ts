import { GITHUB_TOKEN } from '$env/static/private';
import type { Project } from '../../types/Project';
import { convertGhResponse } from '../../helpers/fetchData';


import config from '../../config';

const fetchReadme = async (owner: string, repo: string): Promise<string> => {
  const url = `https://api.github.com/repos/${owner}/${repo}/readme`;
  const response = await fetch(url, {
    headers: {
      'Accept': 'application/vnd.github.v3.raw',
      ...(GITHUB_TOKEN ? { 'Authorization': GITHUB_TOKEN } : undefined)
    }
  });

  if (!response.ok) {
    throw new Error(`Error fetching README: ${response.statusText}`);
  }

  return response.text();
}

const findRepoMeta = (repo: string): Project | undefined => {
  return config.projects.find((project: Project) => project.name === repo);
}

export async function load({ params, fetch }) {
  const { repo } = params;
  const githubUser = config.githubUser;

  const headers = GITHUB_TOKEN ? { 'Authorization': `token ${GITHUB_TOKEN}` } : undefined;

  const repoDetails = await fetch(`https://api.github.com/repos/${githubUser}/${repo}`, { headers })
    .then(async (infoResponse) => {
      if (!infoResponse.ok) {
        console.error(`Failed to fetch repo details: ${infoResponse.statusText}`);
        return {};
      }
      return convertGhResponse(await infoResponse.json());
    })
    .catch((error) => {
      console.error(`Error fetching repo details: ${error.message}`);
      return {};
    });

  const readme = await fetchReadme(githubUser, repo)
    .catch((error) => {
      console.error(`Error fetching README: ${error.message}`);
      return '';
    });

  const meta = findRepoMeta(repo) || {};

  return { repoDetails, readme, meta };
}
