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
			id: 1,
			name: 'validiums',
			image: images.validiums,
			label: 'sunrise-products.product-validiums.label',
			description: 'sunrise-products.product-validiums.description'
		},
		{
			id: 2,
			name: 'rollups',
			image: images.rollups,
			label: 'sunrise-products.product-rollups.label',
			description: 'sunrise-products.product-rollups.description'
		},
		{
			id: 3,
			name: 'pol',
			image: images.pol,
			label: 'sunrise-products.product-pol.label',
			description: 'sunrise-products.product-pol.description'
		}
	];
</script>

{#each items as item (item.id)}
	<div
		class="card md:flex-row max-w-5xl"
		style="background: linear-gradient(180deg, #182949 0%, #213457 100%)"
	>
		<img
			class="max-w-40 max-h-40 md:max-w-60 md:max-h-60 mx-auto p-4"
			src={item.image}
			alt={item.name}
		/>
		<div class="card-body">
			<h2 class="card-title text-2xl font-sans text-white">
				{$_(item.label)}
			</h2>
			<p class="text-white font-sans text-xs sm:text-sm md:text-base">
				{@html $_(item.description)}
			</p>
		</div>
	</div>
{/each}
