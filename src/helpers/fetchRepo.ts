// src/helpers/github.ts
import type { Project } from '../types/Project';
import { convertGhResponse } from './attributes';

type FetchFn = typeof fetch;

/**
 * Fetch GitHub repository details and convert the response.
 * @param owner GitHub username or organization
 * @param repo Repository name
 * @param fetchFn fetch implementation (native fetch or SvelteKit fetch)
 * @param token Optional GitHub token for authentication
 */
export async function fetchRepoDetails(
  owner: string,
  repo: string,
  fetchFn: FetchFn,
  token?: string
): Promise<Partial<Project>> {
  const url = `https://api.github.com/repos/${owner}/${repo}`;
  const headers: Record<string, string> = token ? { Authorization: `token ${token}` } : {};

  try {
    const response = await fetchFn(url, { headers });
    if (!response.ok) {
      console.error(`Failed to fetch repo details: ${response.statusText}`);
      return {};
    }
    const json = await response.json();
    return convertGhResponse(json);
  } catch (error: any) {
    console.error(`Error fetching repo details: ${error.message}`);
    return {};
  }
}

/**
 * Fetch the raw README for a GitHub repository.
 * @param owner GitHub username or organization
 * @param repo Repository name
 * @param fetchFn fetch implementation
 * @param token Optional GitHub token
 */
export async function fetchReadme(
  owner: string,
  repo: string,
  fetchFn: FetchFn,
  token?: string
): Promise<string> {
  const url = `https://api.github.com/repos/${owner}/${repo}/readme`;
  const headers = {
    Accept: 'application/vnd.github.v3.raw',
    ...(token ? { Authorization: `token ${token}` } : {})
  };

  try {
    const response = await fetchFn(url, { headers });
    if (!response.ok) {
      throw new Error(`Error fetching README: ${response.statusText}`);
    }
    return await response.text();
  } catch (error: any) {
    console.error(`Error fetching README: ${error.message}`);
    return '';
  }
}

/**
 * Find project meta data by repository name.
 * @param repoName Repository name
 * @param projects Array of Project entries from config
 */
export function findRepoMeta(
  repoName: string,
  projects: Project[]
): Project | undefined {
  return projects.find((p) => p.name === repoName);
}

