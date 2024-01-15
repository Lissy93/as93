<script lang="ts">
  import { onMount } from 'svelte';
  import { marked } from 'marked';

  import type { Project } from '../types/Project';
  import { formatLargeNumber, formatSize, formatTimeAgo, formatDate } from '../helpers/attributes';
  import Icon from './Icon.svelte';

  export let project: Project;
  export let readme: string | undefined;

  let readmeToRender = '';


  const convertReadme = (readme: string, owner = project.user, repo = project.name) => {
  // Custom renderer
  const renderer = new marked.Renderer();

  // Original link renderer
  const originalLinkRenderer = renderer.link;
  renderer.link = (href, title, text) => {
    if (!href.startsWith('http://') && !href.startsWith('https://') && !href.startsWith('#')) {
      href = `https://github.com/${owner}/${repo}/blob/HEAD/${href}`;
    }
    return originalLinkRenderer.call(renderer, href, title, text);
  };

  // Original image renderer
  const originalImageRenderer = renderer.image;
  renderer.image = (href, title, text) => {
    if (!href.startsWith('http://') && !href.startsWith('https://') && !href.startsWith('#')) {
      href = `https://github.com/${owner}/${repo}/blob/HEAD/${href}`;
    }
    return originalImageRenderer.call(renderer, href, title, text);
  };

  // Add IDs to headings
  renderer.heading = (text, level) => {
    const escapedText = text.toLowerCase().replace(/[^\w]+/g, '-');
    return `<h${level} id="${escapedText}">${text}</h${level}>`;
  };

  marked.setOptions({ renderer });

  return marked(readme);
};

  async function fetchReadme(owner: string, repo: string): Promise<string> {
    const url = `https://api.github.com/repos/${owner}/${repo}/readme`;
    const response = await fetch(url, {
      headers: { 'Accept': 'application/vnd.github.v3.raw' }
    });

    if (!response.ok) {
      throw new Error(`Error fetching README: ${response.statusText}`);
    }
    return await response.text();
  }

  onMount(async () => {
    if (!readme) {
      readmeToRender = await convertReadme(await fetchReadme(project.user || 'lissy93', project.name));
    } else {
      readmeToRender = await convertReadme(readme);
    }
  });
</script>

<section>
  <div class="top-stats">
    {#if project.stars}
    <div title="Stargazer count">
      <Icon name="star" />
      <span>{formatLargeNumber(project.stars)}</span>
    </div>
    {/if}
    
    {#if project.forks}
    <div title="Fork count">
      <Icon name="fork" />
      <span>{project.forks}</span>
    </div>
    {/if}

    {#if project.license && project.license !== 'NOASSERTION'}
    <div title="License">
      <Icon name="license" />
      <span>{project.license}</span>
    </div>
    {/if}

    {#if project.size}
    <div title="Repository size">
      <Icon name="size" />
      <span>{formatSize(project.size)}</span>
    </div>
    {/if}
    

    {#if project.createdAt}
    <div title="Date created">
      <Icon name="date" />
      <span>{formatDate(project.createdAt)}</span>
    </div>
    {/if}

    {#if project.updatedAt}
    <div title="Last updated">
      <Icon name="time" />
      <span>{formatTimeAgo(project.updatedAt)}</span>
    </div>
    {/if}
    
    {#if project.language}
    <div title="Programming language">
      <Icon width="22" name="language" />
      <span>{project.language}</span>
    </div>
    {/if}    
  </div>

  <div class="cta">
    <a href={project.url} target="_blank">
      <Icon name="github" width="28" height="28" /> GitHub Repo
    </a>
    {#if project.homepage}
      <a href={project.homepage} target="_blank">
        <Icon name="website" width="28" height="28" />
        Live Demo
      </a>
    {/if}
  </div>

  

  <div class="markdown">
    {@html convertReadme(readme || '')}
  </div>


</section>

<style lang="scss">
  section {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    background: var(--secondary);
    transition: all cubic-bezier(.4,0,.2,1) .25s;
    border-radius: 0.5rem;
    border: 1px solid #1e293bcc;
    .top-stats {
      display: flex;
      flex-wrap: wrap;
      border-bottom: 1px solid #1e293bcc;
      div {
        padding: 0.5rem 1rem;
        display: flex;
        gap: 0.5rem;
        align-items: center;
        &:not(:last-child) {
          border-right: 1px solid #1e293bcc;
          
        }
      }
    }

    .cta {
      display: flex;
      gap: 1rem;
      justify-content: center;
      flex-wrap: wrap;
      a {
        text-decoration: none;
        border: 3px solid var(--foreground);
        padding: 0.5rem 1rem;
        font-size: 1.8rem;
        border-radius: 0.5rem;
        min-width: 14rem;
        transition: all ease-in-out .25s;
        text-align: center;
        font-weight: 700;
        display: flex;
        gap: 0.5rem;
        justify-content: center;
        align-items: center;
        &:hover {
          background: var(--background-lighter);
          border-color: var(--primary);
          box-shadow: 0 20px 25px -5px rgb(99 102 241 / .2), 0 8px 10px -6px rgb(99 102 241 / .2)
        }
      }
    }

    .markdown {
      padding: 1rem 2rem;
      border-top: 1px solid #1e293bcc;
      :global(td) {
        border: 1px solid #1e293bcc;
      }
      :global(img) {
        max-width: 100%;
        border-radius: 5px;
      }
      :global(blockquote) {
        border-left: 3px solid var(--primary);
        margin-left: 0.5rem;
        padding-left: 1rem;
        background: var(--background-lighter);
        border-radius: 0 5px 5px 0;
      }
      :global(pre) {
        background: var(--background-lighter);
        padding: 1rem 0.5rem;
        border-radius: 5px;
        overflow-x: auto;
      }
      :global(a) {
        color: var(--primary);
        text-decoration: none;
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
</style>
