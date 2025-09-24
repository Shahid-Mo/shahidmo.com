<script>
	export let data;

	const { post } = data;
</script>

<svelte:head>
	<title>{post.title} - Mo Flow</title>
	<meta name="description" content={post.description || post.title} />
	<meta property="og:title" content={post.title} />
	<meta property="og:description" content={post.description || post.title} />
	<meta property="og:type" content="article" />
</svelte:head>

<main>
	<article>
		<header>
			<h1>{post.title}</h1>
			{#if post.description}
				<p class="lead">{post.description}</p>
			{/if}
			<div class="post-meta">
				<time datetime={post.date}>{new Date(post.date).toLocaleDateString()}</time>
				{#if post.readingTime}
					· {post.readingTime} min read
				{/if}
				{#if post.tags && post.tags.length > 0}
					·
					{#each post.tags as tag, i}
						<span class="tag">{tag}</span>{#if i < post.tags.length - 1}, {/if}
					{/each}
				{/if}
			</div>
		</header>

		<section class="prose">
			<svelte:component this={post.content} />
		</section>

		{#if post.github || post.colab}
			<footer class="post-links">
				<h3>Resources</h3>
				<div class="links">
					{#if post.github}
						<a href={post.github} target="_blank" rel="noopener">
							View on GitHub
						</a>
					{/if}
					{#if post.colab}
						<a href={post.colab} target="_blank" rel="noopener">
							Open in Colab
						</a>
					{/if}
				</div>
			</footer>
		{/if}
	</article>
</main>

<style>
	.lead {
		font-size: 1.2em;
		color: var(--pico-muted-color);
	}

	.post-meta {
		color: var(--pico-muted-color);
		font-size: 0.9em;
		margin-bottom: 2rem;
	}

	.tag {
		background: var(--pico-primary-background);
		color: var(--pico-primary);
		padding: 0.2em 0.4em;
		border-radius: 0.2em;
		font-size: 0.8em;
	}

	.post-links {
		margin-top: 3rem;
		padding-top: 2rem;
		border-top: 1px solid var(--pico-muted-border-color);
	}

	.links {
		display: flex;
		gap: 1rem;
	}

	.links a {
		display: inline-block;
		padding: 0.5rem 1rem;
		background: var(--pico-primary);
		color: var(--pico-primary-inverse);
		text-decoration: none;
		border-radius: 0.25rem;
	}
</style>