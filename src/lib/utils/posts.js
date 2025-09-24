/**
 * Post loading utilities for Mo Flow blog
 */

export async function getPosts() {
	const postModules = import.meta.glob('../../posts/*.md', { eager: true });
	const posts = [];

	for (const [path, module] of Object.entries(postModules)) {
		const slug = path.split('/').pop().replace('.md', '');
		const post = {
			slug,
			...module.metadata,
			content: module.default
		};

		// Add reading time estimate (roughly 200 words per minute)
		if (post.content && typeof post.content.render === 'function') {
			const rendered = post.content.render();
			const wordCount = rendered.html.replace(/<[^>]*>/g, '').split(/\s+/).length;
			post.readingTime = Math.ceil(wordCount / 200);
		}

		posts.push(post);
	}

	// Sort by date (newest first)
	return posts.sort((a, b) => new Date(b.date) - new Date(a.date));
}

export async function getPost(slug) {
	try {
		const post = await import(`../../posts/${slug}.md`);
		return {
			slug,
			...post.metadata,
			content: post.default
		};
	} catch (error) {
		console.error(`Error loading post ${slug}:`, error);
		return null;
	}
}

export function getPostsByTag(posts, tag) {
	return posts.filter(post =>
		post.tags && post.tags.includes(tag)
	);
}

export function getAllTags(posts) {
	const tagSet = new Set();
	posts.forEach(post => {
		if (post.tags) {
			post.tags.forEach(tag => tagSet.add(tag));
		}
	});
	return Array.from(tagSet).sort();
}