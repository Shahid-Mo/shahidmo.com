<script>
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<meta name="author" content="Shahid Mohamed" />
	<meta name="theme-color" content="#1976d2" />
</svelte:head>

<header>
	<nav>
		<ul>
			<li><strong><a href="/">Mo Flow</a></strong></li>
		</ul>
		<ul>
			<li><a href="/about">About</a></li>
			<li><a href="/projects">Projects</a></li>
			<li><a href="/contact">Contact</a></li>
		</ul>
	</nav>
</header>

<main>
	{@render children?.()}
</main>

<footer>
	<div style="text-align: center; padding: 2rem 0;">
		<p><small>&copy; 2024 Shahid Mohamed. All rights reserved.</small></p>
	</div>
</footer>
