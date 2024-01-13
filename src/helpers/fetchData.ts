
import { GITHUB_TOKEN } from '$env/static/private';

import type { Project, GitHubRepository } from '../types/Project';
import { findEmoji } from './attributes';
import config from '../config';


export const convertGhResponse = (ghRepoData: GitHubRepository): Project => {
  return {
    id: ghRepoData.id,
    name: ghRepoData.name,
    user: ghRepoData.owner?.login,
    url: ghRepoData.html_url,
    description: ghRepoData.description || '',
    isFork: ghRepoData.fork,
    createdAt: ghRepoData.created_at,
    updatedAt: ghRepoData.pushed_at,
    homepage: ghRepoData.homepage || '',
    language: ghRepoData.language || '',
    license: ghRepoData.license?.spdx_id || '',
    size: ghRepoData.size,
    stars: ghRepoData.stargazers_count,
    forks: ghRepoData.forks_count,
    issues: ghRepoData.open_issues_count,
    topics: ghRepoData.topics || [],
    archived: ghRepoData.archived,
  }
};

export const makeProjectList = async (ghResponse: unknown): Promise<Project[]> => {
  if (!ghResponse || !Array.isArray(ghResponse)) return [];

  // Update each project found in config with GitHub data
  return config.projects.map((project: Project) => {
    // Find the project in the GitHub response
    const ghRepoData = ghResponse.find(
      (ghProject: Project) => ghProject.name.toLocaleLowerCase() === project.name.toLocaleLowerCase()
    ) || {};
    // Get the data we need from the GitHub response
    const repoData = convertGhResponse(ghRepoData);
    // Some additional stuff derived from existing data
    const computedExtras = {
      emoji: findEmoji(repoData.description),
      title: repoData.name,
    };
    // Combine project config with GitHub data
    return { ...repoData, ...computedExtras, ...project }
  }).sort((a, b) => {
    // Sort by star count
    return b.stars - a.stars;
  });
};

/** @type {import('./$types').PageLoad} */
async function load({ fetch }) {
  const githubApiUrl = `https://api.github.com/users/${config.githubUser}/repos?per_page=100`;
  const githubRequest = {
    headers: GITHUB_TOKEN ? { Authorization: `Bearer ${GITHUB_TOKEN}` } : undefined,
  };

  let repos: Project[] = [];
  let pageUrl: string | null = githubApiUrl;

  while (pageUrl) {
    const response = await fetch(pageUrl, githubRequest);
    const newRepos = await response.json();
    repos = repos.concat(newRepos);

    const linkHeader = response.headers.get('Link');
    if (linkHeader) {
      const matches = linkHeader.match(/<([^>]+)>;\s*rel="next"/);
      pageUrl = matches ? matches[1] : null;
    } else {
      pageUrl = null;
    }
  }

  return { repos: await makeProjectList(repos) };
}

export default load;
