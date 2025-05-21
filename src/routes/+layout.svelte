<script>
	import './styles.css';
	import Nav from '../components/Nav.svelte';
	import Footer from '../components/Footer.svelte';
</script>

<svelte:head>
	<!-- Website Info -->
	<title>AS93 | Alicia Sykes Project Catalog</title>
	<meta name="author" content="Alicia Sykes">
	<link rel="canonical" href="https://as93.net">
	<meta name="description" content="AS93 - Free & Open Source apps by Alicia Sykes" />
	<meta name="keywords" content="open source, code, privacy, security, linux, self-hosted, projects">

	<!-- Website Settings -->
	<meta charset="UTF-8">
	<meta http-equiv="Content-Language" content="en">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui">

	<!-- Theme colors and site icons -->
	<meta name="theme-color" content="#ec4899">
	<link rel="icon" href="/favicon.png" type="image/png">
	<link rel="apple-touch-icon" href="/favicon.png">

	<!-- Social media tags (Open Graph) -->
	<meta property="og:type" content="website">
	<meta property="og:title" content="AS93 | Project Catalog">
	<meta property="og:description" content="Free & Open Source apps by Alicia Sykes">
	<meta property="og:image" content="https://as93.net/banner.png">
	<meta property="og:url" content="https://as93.net">
	<meta property="og:site_name" content="AS93">

	<!-- Twitter Card Tags -->
	<meta name="twitter:card" content="summary_large_image">
	<meta name="twitter:title" content="AS93 | Project Catalog">
	<meta name="twitter:description" content="Free & Open Source apps by Alicia Sykes">
	<meta name="twitter:image" content="https://as93.net/banner.png">

	<!-- Hit counter -->
	<script defer data-domain="as93.net" src="https://no-track.as93.net/js/script.js"></script>

	<!-- Verification for SEO -->
	<meta name="msvalidate.01" content="3B8A195ACDEB67AAA9AB3BBD8C37E3B6" />
	
	<!-- Schema.org Markup for Google -->
	<script type="application/ld+json">
		{
			"@context": "http://schema.org",
			"@type": "WebSite",
			"name": "AS93",
			"url": "https://as93.net"
		}
		{
		"@context": "http://schema.org",
		"@type": "Website",
		"headline": "AS93 | Alicia Sykes's Project Catalog",
		"image": [
			"https://as93.net/favicon.png",
			"https://as93.net/banner.png",
		],
		"datePublished": "2024-01-11T08:00:00+08:00",
		"dateModified": new Date().toString() || "2024-01-11T09:20:00+08:00",
		"author": {
			"@type": "Person",
			"name": "Alicia Sykes",
			"image": "https://as93.net/profile.jpg"
		},
		"publisher": {
			"@type": "Organization",
			"name": "AS93",
			"logo": { "@type": "ImageObject", "url": "https://as93.net/favicon.png" }
		},
		"description": "Free and open source apps and services, which respect your privacy",
	}
	</script>

</svelte:head>

<div class="app">
	<Nav />
	<slot />
	<Footer />

</div>

<style>


</style>
