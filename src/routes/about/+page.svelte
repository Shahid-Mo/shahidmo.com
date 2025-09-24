<script>
	import { onMount } from 'svelte';

	let title = 'About Me';
</script>

<svelte:head>
	<title>{title} - Mo Flow</title>
	<meta name="description" content="Learn about Shahid's background in AI and Solutions Engineering" />
</svelte:head>

<main>
	<article>
		<header>
			<h1>{title}</h1>
		</header>

		<section>
			<h2>Who I Am</h2>
			<p>
				I'm a Solutions Engineer passionate about making AI practical and accessible.
				I've worked across startups and enterprises, helping teams implement AI solutions
				that actually work in production.
			</p>

			<h2>What I Do</h2>
			<p>
				Through Mo Flow, I share practical AI insights, implementation guides, and
				lessons learned from real-world deployments. My focus is on what works,
				not just what's theoretically possible.
			</p>

			<h2>Why This Blog</h2>
			<p>
				Too much AI content is either overly academic or superficial. I aim to bridge
				the gap with practical, production-ready insights from someone who's been
				in the trenches.
			</p>
		</section>
	</article>
</main>