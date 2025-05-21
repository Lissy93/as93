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

<main>
<Hero />
<ProjectList projects={repos} />
<About />
</main>

<style>

main {
	flex: 1;
	display: flex;
	flex-direction: column;
	padding: 1rem;
	width: 100%;
	max-width: 70rem;
	margin: 0 auto;
	box-sizing: border-box;

	@media (min-width: 1670px) {
		max-width: 85rem;
	}
}
</style>
