<script lang="ts">
	import { isPreviewing, RenderContent } from '@builder.io/sdk-svelte';
	// this data comes from the function in `+page.server.js`, which runs on the server only
	export let data;

	// RenderContent is deprecated, use the new BuilderComponent component instead

	// we want to show unpublished content when in preview mode.
	const canShowContent = data.props.content || isPreviewing();
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>
<main>
	<h1>Welcome to SvelteKit</h1>

	<div>Below is your Builder Content:</div>
	{#if canShowContent}
		<div>page Title: {data.props.content?.data?.title || 'Unpublished'}</div>
		<RenderContent model="Page" content={data.props.content} apiKey={data.props.API_KEY} />
	{:else}
		Content Not Found
	{/if}
</main>

<footer>
	<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
</footer>

<style>
	h1 {
		width: 100%;
		font-size: 2rem;
		text-align: center;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 40px;
	}

	@media (min-width: 480px) {
		footer {
			padding: 40px 0;
		}
	}
</style>
