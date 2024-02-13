<script lang="ts">
	import Label from '$lib/components/Label.svelte';
	import { newLocale } from '../stores/i18nStore';
	import { _, locale } from 'svelte-i18n';
	import { onDestroy } from 'svelte';

	export let index: string;
	export let label: string;
	export let description: string;
	export let imageSrc: string;

	// Subscribe to the newLocale store
	const unsubscribe = newLocale.subscribe((value: string) => {
		locale.set(value);
	});

	onDestroy(unsubscribe);
</script>

<div
	class="w-full md:w-[47%] sm:max-w-[330px] md:max-w-[500px] lg:max-w-[800px] xl:max-w-[2000px] mx-auto flex flex-col gap-3 md:gap-[23px] sm:gap-3 px-5 md:px-8 py-3 sm:py-[30px] rounded-[20px] mb-2"
	style="background: var(--Dark, linear-gradient(180deg, rgba(15, 28, 54, 0.30) 0%, #0A204A 100%))"
>
	<Label
		className="font-orbitron lg:text-4xl sm:text-2xl font-extrabold tracking-widest text-white"
		text={$_(index)}
	/>
	<Label
		className="font-orbitron lg:text-4xl sm:text-2xl font-extrabold tracking-widest text-white"
		text={$_(label)}
	/>
	<Label
		className="font-sans lg:text-2xl sm:text-xl font-normal text-white"
		text={$_(description)}
	/>
	<img class="sm:w-[70%] w-[200px] mx-auto" src={imageSrc} alt={label} />
</div>
