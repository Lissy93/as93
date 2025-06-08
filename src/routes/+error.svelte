<script lang="ts">
  import { page } from '$app/stores';
  import { onMount } from 'svelte';
  import config from '../config';

  // guard against infinite loops
  let triedRedirect = false;

  onMount(async () => {
    // only for genuine 500s on a top-level slug
    if ($page.status === 500 && !triedRedirect) {
      const parts = $page.url.pathname.split('/').filter(Boolean);
      const repo = parts[0];

      if (repo) {
        triedRedirect = true;

        try {
          const res = await fetch(`https://api.github.com/repos/${config.githubUser}/${repo}`);
          if (res.ok) {
            const json = await res.json();
            if (json.has_pages) {
              // force the browser to re-load from GitHub Pages
              window.location.replace(`https://${config.githubUser}.github.io/${repo}/`);
            }
          }
        } catch {
          // network error or rate-limit; just show your error page
        }
      }
    }
  });
</script>

<svelte:head>
  <title>Error | AS93</title>
  <meta name="description" content="AS93 - Free & Open Source apps by Alicia Sykes" />
</svelte:head>

<p>Oops, something’s gone a bit wrong here</p>
<h1>{$page.status}</h1>
<p class="emoji">😢</p>
{#if $page?.error?.message}
  <p>{$page.error.message}</p>
{/if}

<style>
h1 {
  font-size: 6rem;
  margin: 0;
  padding: 1rem;
  text-align: center;
  opacity: 0.6;
}
.emoji {
  font-size: 5rem;
  margin: 0;
}
p {
  font-size: 2rem;
  margin: 0;
  
  text-align: center;
}
</style>
