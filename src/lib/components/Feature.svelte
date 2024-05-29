<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { writable } from 'svelte/store';
	import { _, locale } from 'svelte-i18n';
	import * as images from '../../consts/images';
	import Label from './Label.svelte';
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

	let currentIndex = writable(0);
</script>

<div class="flex sm:gap-5 gap-1 overflow-x-auto rounded-[20px] px-2 max-w-[1311px] 2xl:mx-auto">
	{#each items as item (item.id)}
		<div
			class="md:min-w-[400px] min-w-[310px] gap-3 py-4 px-3 text-white rounded-[20px] border-2 border-solid bg-white"
		>
			<img class="md:w-full w-[60%] max-w-60 mx-auto max-h-60" src={item.image} alt="item" />
			<div class="sm:px-3 mt-4">
				<Label
					className={'px-2 font-orbitron 2xl:text-3xl md:text-2xl text-xl font-extrabold tracking-wider text-black'}
					text={$_(item.label)}
				/>
				<Label
					className={'px-2 font-overpass lg:mt-[23px] mt-4 2xl:text-lg sm:text-base text-sm font-normal text-black'}
					text={$_(item.description)}
				/>
			</div>
		</div>
	{/each}
</div>
