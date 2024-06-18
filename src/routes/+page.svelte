<script lang="ts">
	import { _ } from 'svelte-i18n';

	import { appDescription } from '../consts';
	import { appTitle } from '../consts';
</script>

<svelte:head>
	<title>{appTitle}</title>
	<meta name="description" content="Sunrise" />
</svelte:head>

<main>
	<section class="z-20 mx-auto max-w-screen-xl gap-8 md:my-20">
		<h1
			class="text-center font-orbitron text-4xl font-extrabold text-white md:text-5xl xl:text-6xl"
		>
			{@html appDescription}
		</h1>
		<h2 class="md:text:xl text-center font-overpass text-white sm:text-lg xl:text-2xl">
			{@html $_('app-description')}
		</h2>
		<div class="flex gap-4 my-8">
			<button class="btn btn-sm md:btn-md lg:btn-lg font-overpass text-blue-600 lg:text-xl">
				<a href="https://docs.sunriselayer.io/run-a-sunrise-node/networks" target="_blank">
					Build for Modular
				</a>
			</button>
			<button
				class="btn btn-sm md:btn-md lg:btn-lg btn-outline font-overpass text-white lg:text-xl"
			>
				<a href="https://docs.sunriselayer.io" target="_blank">Explore </a>
			</button>
		</div>
	</section>
</main>

<style>
	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 64rem;
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
