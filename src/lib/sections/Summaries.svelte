<script lang="ts">
	import { _ } from 'svelte-i18n';
	import Summary from '$lib/components/Summary.svelte';
</script>

<main>
	<section class="gap-8 my-8">
		<h1 class="text-center font-extrabold text-4xl md:text-5xl xl:text-6xl">
			{@html $_('sunrise-products.label')}
		</h1>
		<h2 class="md:text:xl text-center text-sm sm:text-lg xl:text-2xl">
			{@html $_('sunrise-products.description')}
		</h2>
		<Summary />
	</section>
</main>

<style>
	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 96rem;
		margin: 0 auto;
		box-sizing: border-box;
	}

	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	h1 {
		width: 100%;
	}
</style>
