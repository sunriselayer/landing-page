<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { writable } from 'svelte/store';
	import { _, locale } from 'svelte-i18n';
	import * as images from '../../consts/images';
	import Label from './Label.svelte';
	import { newLocale } from '../stores/i18nStore';

	let localeInfo: string;

	// Subscribe to the newLocale store
	const unsubscribe = newLocale.subscribe((value: string) => {
		localeInfo = value;
		locale.set(localeInfo);
	});

	// Unsubscribe when the component is destroyed
	onDestroy(unsubscribe);
	// Define your carousel items
	const items = [
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
		},
		{
			id: 3,
			image: images.feature3,
			label: 'sunrise-features.feature-3.label',
			description: 'sunrise-features.feature-3.description'
		},
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
			description: 'sunrise-features.feature-4.description'
		}
	];

	let currentIndex = writable(0);
</script>

<div class="flex gap-5 overflow-x-auto rounded-[20px]">
	{#each items as item (item.id)}
		<div
			class="min-w-[646px] px-[30px] py-12 text-white rounded-[20px]"
			style="background: var(--Sunrise-Degragee, linear-gradient(180deg, #EDBC64 0%, #6495ED 100%))"
		>
			<img
				class="w-[382px] h-[353px] mx-auto"
				src={item.image}
				alt={$_(`Image of ${item.label}`)}
			/>
			<div class="py-6 px-3 mt-[23px] bg-blue-700 bg-opacity-10">
				<Label
					className={'font-orbitron text-3xl font-extrabold tracking-wide text-white'}
					text={$_(item.label)}
				/>
				<Label
					className={'mt-[23px] text-2xl font-normal text-white'}
					text={$_(item.description)}
				/>
			</div>
		</div>
	{/each}
</div>
