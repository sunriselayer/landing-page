<script lang="ts">
	import { _ } from 'svelte-i18n';
	import Label from '$lib/components/Label.svelte';
	import Feature from '$lib/components/Feature.svelte';
	import * as images from '../consts/images';
</script>

<main>
	<section class="gap-8 my-8">
		<h1 class="text-center font-orbitron text-4xl font-extrabold md:text-5xl xl:text-6xl">
			{@html $_('sunrise-products.label')}
		</h1>
		<h2 class="md:text:xl text-center font-overpass sm:text-lg xl:text-2xl">
			{@html $_('sunrise-products.description')}
		</h2>

		<div
			class="card md:flex-row max-w-5xl"
			style="background: linear-gradient(180deg, #182949 0%, #213457 100%)"
		>
			<img class="max-w-60 mx-auto max-h-60 p-4" src={images.validiums} alt="validiums" />
			<div class="card-body">
				<h2 class="card-title text-2xl font-sans text-white">
					{$_('sunrise-products.product-validiums.label')}
				</h2>
				<p class="text-white font-sans">
					{@html $_('sunrise-products.product-validiums.description')}
				</p>
			</div>
		</div>
		<div
			class="card md:flex-row max-w-5xl"
			style="background: linear-gradient(180deg, #182949 0%, #213457 100%)"
		>
			<img class="max-w-60 mx-auto max-h-60 p-4" src={images.rollups} alt="rollups" />
			<div class="card-body">
				<h2 class="card-title text-2xl font-sans text-white">
					{$_('sunrise-products.product-rollups.label')}
				</h2>
				<p class="text-white font-sans">
					{@html $_('sunrise-products.product-rollups.description')}
				</p>
			</div>
		</div>
		<div
			class="card md:flex-row max-w-5xl"
			style="background: linear-gradient(180deg, #182949 0%, #213457 100%)"
		>
			<img class="max-w-60 mx-auto max-h-60 p-4" src={images.pol} alt="pol" />
			<div class="card-body">
				<h2 class="card-title text-2xl font-sans text-white">
					{$_('sunrise-products.product-pol.label')}
				</h2>
				<p class="text-white font-sans">
					{@html $_('sunrise-products.product-pol.description')}
				</p>
			</div>
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
