<script>
	export let data;

	const { posts } = data;
</script>

<svelte:head>
	<title>Mo Flow - Practical AI Solutions & Insights</title>
	<meta name="description" content="AI blog by Shahid Mohamed - Practical solutions, implementation guides, and insights from a Solutions Engineer" />
</svelte:head>

<section class="hero">
	<h1>Mo Flow</h1>
	<p class="lead">Practical AI solutions over pure technical depth</p>
	<p>
		Welcome to my corner of the internet where I share AI insights, implementation guides,
		and lessons learned from real-world deployments. I'm a Solutions Engineer passionate
		about making AI practical and accessible.
	</p>
</section>

<section class="posts">
	<h2>Latest Posts</h2>

	{#if posts.length === 0}
		<div class="no-posts">
			<p>No posts yet. Coming soon!</p>
		</div>
	{:else}
		<div class="post-grid">
			{#each posts as post}
				<article class="post-card">
					<header>
						<h3><a href="/blog/{post.slug}">{post.title}</a></h3>
						{#if post.description}
							<p>{post.description}</p>
						{/if}
						<div class="post-meta">
							<time datetime={post.date}>{new Date(post.date).toLocaleDateString()}</time>
							{#if post.readingTime}
								· {post.readingTime} min read
							{/if}
						</div>
					</header>

					{#if post.tags && post.tags.length > 0}
						<div class="tags">
							{#each post.tags as tag}
								<span class="tag">{tag}</span>
							{/each}
						</div>
					{/if}
				</article>
			{/each}
		</div>
	{/if}
</section>

<style>
	.hero {
		text-align: center;
		margin: 3rem 0;
	}

	.hero h1 {
		font-size: 3rem;
		margin-bottom: 1rem;
		color: var(--pico-primary);
	}

	.lead {
		font-size: 1.3em;
		color: var(--pico-muted-color);
		margin-bottom: 1rem;
	}

	.posts {
		margin-top: 4rem;
	}

	.post-grid {
		display: grid;
		gap: 2rem;
		margin-top: 2rem;
	}

	.post-card {
		padding: 1.5rem;
		border: 1px solid var(--pico-muted-border-color);
		border-radius: 0.5rem;
		transition: border-color 0.2s ease;
	}

	.post-card:hover {
		border-color: var(--pico-primary);
	}

	.post-card h3 {
		margin: 0 0 0.5rem 0;
	}

	.post-card h3 a {
		text-decoration: none;
		color: var(--pico-primary);
	}

	.post-card h3 a:hover {
		text-decoration: underline;
	}

	.post-meta {
		color: var(--pico-muted-color);
		font-size: 0.9em;
		margin: 0.5rem 0;
	}

	.tags {
		margin-top: 1rem;
		display: flex;
		gap: 0.5rem;
		flex-wrap: wrap;
	}

	.tag {
		background: var(--pico-primary-background);
		color: var(--pico-primary);
		padding: 0.2em 0.4em;
		border-radius: 0.2em;
		font-size: 0.8em;
	}

	.no-posts {
		text-align: center;
		padding: 3rem;
		color: var(--pico-muted-color);
	}
</style>
