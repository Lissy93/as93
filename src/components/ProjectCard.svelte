<script lang="ts">
	import type { Project } from "../types/Project";
  import { formatDescription, formatTitle, formatStarCount } from '../helpers/attributes';
  import config from '../config';
  import LangBadge from './LangBadge.svelte';
  import Modal from './Modal.svelte';

  export let project: Project;
  let readme: string = 'Loading...';

  let showModal = false;

  const fetchReadme = async (owner: string, repo: string): Promise<string> => {
    const url = `https://api.github.com/repos/${owner}/${repo}/readme`;
    const response = await fetch(url, {
      headers: { 'Accept': 'application/vnd.github.v3.raw' }
    });

    if (!response.ok) {
      return `<a href="/${repo}">Reload readme</a>`;
    }
    return await response.text();
  }

  const cardClicked = async (event: MouseEvent) => {
    // if (typeof window !== 'undefined' && window.innerWidth > 640) {
    //   event.preventDefault();
    //   showModal = true;
    //   try {
    //     readme = await fetchReadme(project.user || 'lissy93', project.name);
    //   } catch (error) {
    //     console.error(error);
    //     window.location.href = `/${project.title}`;
    //   }
    // }
  }

</script>


<Modal bind:showModal project={project} readme={readme} />

<a class="project" href={`/${project.name}`} on:click={cardClicked} >
  <div class="left">
    {#if project.icon}
      <img src={project.icon} alt={project.emoji} />
    {:else}
      <span class="emoji">{project.emoji}</span>
    {/if}
  </div>
  <div class="right">
    <h3>{formatTitle(project.title || project.name)}</h3>
    <p class="description">{formatDescription(project.description)}</p>
    <div class="tags">
      {#if project.language}
        <LangBadge language={project.language} />
      {/if}
      {#if project.stars && project.stars > 10}
        <p class="tag" title={`${project.stars} stars on GitHub`}>★ {formatStarCount(project.stars)}</p>
      {/if}
      {#if project.license && project.license !== 'NOASSERTION'}
        <p class="tag" title={`Licensed under ${project.license}`}>{project.license}</p>
      {/if}
    </div>
  </div>
</a>

<style lang="scss">
.project {
  display: flex;
  gap: 1rem;
  background: var(--secondary);
  transition: all cubic-bezier(.4,0,.2,1) .25s;
  border-radius: 0.5rem;
  border: 1px solid #1e293bcc;
  padding: 1rem;
  box-shadow: 0 20px 20px -20px rgba(99, 102, 241, 0.2);
  &:hover {
    box-shadow: 0 20px 25px -5px rgb(99 102 241 / .2), 0 8px 10px -6px rgb(99 102 241 / .2);
    border-color: #1e293b;
    text-decoration: none;
    .left .emoji, .left img {
      transform: scale(1.1);
    }
  }
  &:focus {
    outline: none;
    border: 2px solid var(--primary);
  }
  .left {
    display: flex;
    align-items: center;
    .emoji, img {
      font-size: 3rem;
      width: 3.8rem;
      border-radius: 6px;
      padding: 0.25rem;
      background: var(--background-lighter);
      transition: all cubic-bezier(.4,0,.2,1) .25s;
    }
  }
  .right {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    h3 {
      font-size: 1.8rem;
      line-height: 2.25rem;
      font-weight: 700;
      color: #fff;
      margin: 0;
      text-transform: capitalize;
    }
    .description {
      margin: 0;
    }
    .tags {
      display: flex;
      gap: 1rem;
      .tag {
        margin: 0;
        padding: 0 0.5rem;
        border-radius: var(--curve-factor, 4px);
        border: 1px solid #1e293b;
      }
    }
  }
}
</style>
