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

export async function load({ params, fetch }) {
  const { repo } = params;
  const githubUser = config.githubUser;

  const headers = GITHUB_TOKEN ? { 'Authorization': `token ${GITHUB_TOKEN}` } : undefined;

  const infoResponse = await fetch(`https://api.github.com/repos/${githubUser}/${repo}`, { headers });
  if (!infoResponse.ok) {
    throw new Error(`Failed to fetch repo details: ${infoResponse.statusText}`);
  }

  const repoDetails: Project = convertGhResponse(await infoResponse.json());
  const readme = await fetchReadme(githubUser, repo);
  return { repoDetails, readme };
}
