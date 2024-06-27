<script lang="ts">
	import { _ } from 'svelte-i18n';
	import * as images from '../consts/images';

	const features = [
		{
			index: '01',
			label: 'sunrise-01.label',
			description: 'sunrise-01.description',
			imageSrc: images.monolithic
		},
		{
			index: '02',
			label: 'sunrise-02.label',
			description: 'sunrise-02.description',
			imageSrc: images.modular
		},
		{
			index: '03',
			label: 'sunrise-03.label',
			description: 'sunrise-03.description',
			imageSrc: images.build
		},
		{
			index: '04',
			label: 'sunrise-04.label',
			description: 'sunrise-04.description',
			imageSrc: images.value
		}
	];
</script>

<main>
	<section class="z-20 mx-auto max-w-screen-xl gap-8 md:my-20 text-base-100">
		<h1 class="text-center font-orbitron text-4xl font-extrabold md:text-5xl xl:text-6xl">
			{@html $_('sunrise-question')}
		</h1>
		<h2 class="md:text:xl text-center font-overpass text-sm sm:text-lg xl:text-2xl">
			{@html $_('sunrise-definition')}
		</h2>
		<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
			{#each features as { index, label, description, imageSrc }}
				<div
					class="card"
					style="background: var(--Dark, linear-gradient(180deg, rgba(15, 28, 54, 0.30) 0%, #0A204A 100%))"
				>
					<div class="card-body">
						<h2 class="card-title md:text-2xl font-orbitron font-extrabold tracking-widest">
							{$_(index)} <br />
							{$_(label)}
						</h2>

						<figure>
							<img class="max-w-60 max-h-60 mx-auto" src={imageSrc} alt={label} />
						</figure>
						<p class="font-sans text-xs sm:text-sm md:text-base">
							{@html $_(description)}
						</p>
					</div>
				</div>
			{/each}
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
