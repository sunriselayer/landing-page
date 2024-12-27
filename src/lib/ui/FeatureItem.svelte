<script lang="ts">
	import Label from '$lib/components/Label.svelte';
	import { newLocale } from '../stores/i18nStore';
	import { _, locale } from 'svelte-i18n';
	import { onDestroy } from 'svelte';

	interface Props {
		index: string;
		label: string;
		description: string;
		imageSrc: string;
	}

	let {
		index,
		label,
		description,
		imageSrc
	}: Props = $props();

	// Subscribe to the newLocale store
	const unsubscribe = newLocale.subscribe((value: string) => {
		locale.set(value);
	});

	onDestroy(unsubscribe);
</script>

<div
	class="xl:w-[49%] md:w-[48%] sm:w-full px-[30px] py-5 flex flex-col gap-3 rounded-[20px]"
	style="background: var(--Dark, linear-gradient(180deg, rgba(15, 28, 54, 0.30) 0%, #0A204A 100%))"
>
	<Label
		className="font-orbitron 2xl:text-3xl lg:text-2xl sm:text-xl font-extrabold tracking-widest "
		text={$_(index)}
	/>
	<Label
		className="font-orbitron 2xl:text-3xl lg:text-2xl sm:text-xl font-extrabold tracking-widest "
		text={$_(label)}
	/>
	<img class="md:w-full w-[60%] max-w-60 mx-auto max-h-60" src={imageSrc} alt={label} />
	<Label
		className="font-sans font-normal  whitespace-pre-wrap sm:text-base text-xs"
		text={$_(description)}
	/>
</div>
