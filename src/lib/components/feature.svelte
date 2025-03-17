<script lang="ts">
	import { onDestroy } from 'svelte';
	import { _, locale } from 'svelte-i18n';
	import * as images from '../../consts/images';
	import { newLocale } from '../stores/i18nStore';

	// Subscribe to the newLocale store
	const unsubscribe = newLocale.subscribe((value: string) => {
		locale.set(value);
	});

	// Unsubscribe when the component is destroyed
	onDestroy(unsubscribe);
	// Define your carousel items
	const items = [
		{
			id: 4,
			image: images.feature4,
			label: 'sunrise-features.feature-4.label',
			description: 'sunrise-features.feature-4.description'
		},
		{
			id: 5,
			image: images.feature5,
			label: 'sunrise-features.feature-5.label',
			description: 'sunrise-features.feature-5.description'
		},
		{
			id: 3,
			image: images.feature3,
			label: 'sunrise-features.feature-3.label',
			description: 'sunrise-features.feature-3.description'
		},
		{
			id: 1,
			image: images.feature1,
			label: 'sunrise-features.feature-1.label',
			description: 'sunrise-features.feature-1.description'
		},
		{
			id: 2,
			image: images.feature2,
			label: 'sunrise-features.feature-2.label',
			description: 'sunrise-features.feature-2.description'
		}
	];
</script>

<div class="flex min-w-60 gap-4 overflow-x-auto px-4 md:px-8 lg:px-20 xl:px-40">
	{#each items as item (item.id)}
		<div class="card bg-white w-96">
			<figure>
				<img class="max-w-60 max-h-60 mx-auto" src={item.image} alt="item" />
			</figure>
			<div class="card-body">
				<h2 class="card-title text-xl xl:text-2xl tracking-wider">
					{@html $_(item.label)}
				</h2>
				<p class="text-xs sm:text-sm lg:text-base xl:text-lg font-overpass">
					{@html $_(item.description)}
				</p>
			</div>
		</div>
	{/each}
</div>
