<script>
	import Hero from '../components/Hero.svelte';
	import ProjectList from '../components/ProjectList.svelte';
	import About from '../components/About.svelte';

	export let data;

	const repos = data.repos || [];
</script>

<svelte:head>
	<title>AS93 | Home</title>
	<meta name="description" content="AS93 - Free & Open Source apps by Alicia Sykes" />
</svelte:head>

<Hero />
<ProjectList projects={repos} />
<About />

<style>

</style>
