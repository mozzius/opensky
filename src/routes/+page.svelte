<script lang="ts">
	export let data: import('./$types').PageData;
</script>

{#if data}
	<ul>
		{#each data.feeds as feed}
			<li>{feed.displayName}</li>
		{/each}
	</ul>
{/if}
