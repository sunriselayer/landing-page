<script lang="ts">
	import { _ } from 'svelte-i18n';
	import Label from '$lib/components/Label.svelte';
	import Feature from '$lib/components/Feature.svelte';
	import * as images from '../consts/images';
</script>

<main>
	<section class="gap-8 my-8">
		<div class="flex gap-2 justify-center my-8">
			<img src={images.logo} alt="logo" />
			<img src={images.sunrise} alt="sunrise" />
		</div>
		<h1 class="md:text:xl text-center font-overpass sm:text-lg xl:text-2xl my-8">
			{@html $_('sunrise-features.description')}
		</h1>
	</section>
</main>
<Feature />

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
