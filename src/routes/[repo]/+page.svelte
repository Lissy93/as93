<script lang="ts">
  import ProjectReadme from '../../components/ProjectReadme.svelte';
  import ProjectHero from '../../components/ProjectHero.svelte';
  import type { Project } from '../../types/Project';
  import config from '../../config';

  export let data: { repoDetails: Project, readme: string };

  // Generates JSON-LD structured data for a given GitHub project
  function generateJsonLd(project: Project) {
    const jsonLd = {
      "@context": "http://schema.org",
      "@type": "SoftwareSourceCode",
      "headline": project.name,
      "image": project.icon || 'https://as93.net/favicon.png',
      "datePublished": project.createdAt,
      "dateModified": project.updatedAt,
      "author": {
        "@type": "Person",
        "name": config.fullName || project.user,
      },
      "description": project.description
    };
    return JSON.stringify(jsonLd);
  }

  $: jsonLdScript = generateJsonLd(data.repoDetails);
</script>

<ProjectHero project={data.repoDetails} meta={data.meta} />
<ProjectReadme project={data.repoDetails} readme={data.readme} />

<svelte:element this="script" type="application/ld+json">
  {@html jsonLdScript}
</svelte:element>
