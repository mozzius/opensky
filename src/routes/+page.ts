import { agent } from '$lib/agent';

export async function load() {
	const feeds = await agent.app.bsky.unspecced.getPopularFeedGenerators();
	if (!feeds.success) throw new Error('Could not fetch feeds');
	return feeds.data;
}
