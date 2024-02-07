<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { writable } from 'svelte/store';
	import { _ } from 'svelte-i18n';
	import feature1 from '$lib/images/feature1.svg';
	import feature2 from '$lib/images/feature2.svg';
	import feature3 from '$lib/images/feature3.svg';
	import feature4 from '$lib/images/feature4.svg';
	import feature5 from '$lib/images/feature5.svg';
	import Label from './Label.svelte';

	// Define your carousel items
	const items = [
		{
			id: 1,
			image: feature1,
			label: 'sunrise-features.feature-1.label',
			description: 'sunrise-features.feature-1.description'
		},
		{
			id: 2,
			image: feature2,
			label: 'sunrise-features.feature-2.label',
			description: 'sunrise-features.feature-2.description'
		},
		{
			id: 3,
			image: feature3,
			label: 'sunrise-features.feature-3.label',
			description: 'sunrise-features.feature-3.description'
		},
		{
			id: 4,
			image: feature4,
			label: 'sunrise-features.feature-4.label',
			description: 'sunrise-features.feature-4.description'
		},
		{
			id: 5,
			image: feature5,
			label: 'sunrise-features.feature-5.label',
			description: 'sunrise-features.feature-4.description'
		}
	];

	let currentIndex = writable(0);

	let timer: any;

	// Function to handle transitioning to the next slide
	function nextSlide() {
		currentIndex.update((n) => (n + 2) % items.length);
	}

	// Function to start autoplay
	function startAutoplay() {
		timer = setInterval(nextSlide, 3000);
	}

	// Function to stop autoplay
	function stopAutoplay() {
		clearInterval(timer);
	}

	// Lifecycle hook to start autoplay when the component mounts
	onMount(startAutoplay);

	// Lifecycle hook to stop autoplay when the component is destroyed
	onDestroy(stopAutoplay);
</script>

<div class="flex gap-5">
	{#each items.slice($currentIndex, $currentIndex + 2) as item (item.id)}
		<div
			class="w-[646px] px-[30px] py-12 text-white rounded-[20px]"
			style="background: var(--Sunrise-Degragee, linear-gradient(180deg, #EDBC64 0%, #6495ED 100%))"
		>
			<img
				class="w-[382px] h-[353px] mx-auto"
				src={item.image}
				alt={$_(`Image of ${item.label}`)}
			/>
			<div class="py-6 px-3 mt-[23px] bg-blue-700 bg-opacity-10">
				<Label
					className={'font-orbitron text-3xl font-extrabold tracking-wide'}
					text={$_(item.label)}
				/>
				<Label className={'mt-[23px] text-2xl font-normal'} text={$_(item.description)} />
			</div>
		</div>
	{/each}
</div>
