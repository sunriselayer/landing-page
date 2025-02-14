<script lang="ts">
	import { _ } from 'svelte-i18n';

	import { appDescription } from '../consts';
	import { appTitle } from '../consts';

	function openDoc() {
		if (
			confirm(
				'This crypto-asset marketing communication has not been reviewed or approved by any competent authority in any Member State of the European Union. The person seeking admission to trading of the crypto-asset is solely responsible for the content of this crypto-asset marketing communication.\r\n\r\n Do you acknowledge and agree to the above disclaimer?'
			)
		) {
			open('https://docs.sunriselayer.io/run-a-sunrise-node/networks', '_blank');
		}
	}
</script>

<svelte:head>
	<title>{appTitle}</title>
	<meta name="description" content="Sunrise" />
</svelte:head>

<main>
	<section class="z-20 mx-auto max-w-screen-xl gap-8 md:my-20 text-base-100">
		<h1 class="text-center font-orbitron text-4xl font-extrabold md:text-5xl xl:text-6xl">
			{@html appDescription}
		</h1>
		<h2 class="md:text:xl text-center font-overpass sm:text-lg xl:text-2xl">
			{@html $_('app-description')}
		</h2>
		<div class="flex gap-4 my-8">
			<button class="btn btn-sm md:btn-md lg:btn-lg font-overpass text-blue-600 lg:text-xl">
				<a href="https://testnet.app.sunriselayer.io" target="_blank">Try our Testnet</a>
			</button>
			<button
				class="btn btn-sm md:btn-md lg:btn-lg btn-outline font-overpass text-base-100 lg:text-xl"
				on:click={openDoc}
			>
				Build on Sunrise
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
