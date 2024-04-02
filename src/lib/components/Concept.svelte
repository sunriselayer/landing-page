<script lang="ts">
	import { onDestroy } from 'svelte';
	import { _ } from 'svelte-i18n';
	import Label from '$lib/components/Label.svelte';

	import * as images from '../../consts/images';
	import FeatureItem from '$lib/ui/FeatureItem.svelte';
	import { locale } from 'svelte-i18n';
	import { newLocale } from '../stores/i18nStore';

	// Subscribe to the newLocale store
	const unsubscribe = newLocale.subscribe((value: string) => {
		locale.set(value);
	});

	onDestroy(unsubscribe);

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

<div class="relative">
	<img src={images.BodyBG} alt="BodyBG" class="absolute z-0 w-full h-full object-cover" />
	<img
		src={images.BodyMask}
		alt="BodyMask"
		class="absolute z-0 opacity-50 w-full h-full object-cover"
	/>
	<div
		class="lg:px-16 px-6 w-full flex flex-col justify-center relative 2xl:max-w-[1312px] 2xl:mx-auto"
	>
		<div>
			<div class="flex flex-col justify-center pt-4 sm:pt-[60px] sm:pb-16 pb-5 gap-3">
				<Label
					className="text-center text-white font-orbitron md:text-[68px] text-[30px] font-bold tracking-wider"
					text={$_('sunrise-question')}
				/>
				<Label
					className="text-center text-white font-overpass md:text-[26px] font-medium leading-[25px] tracking-wide max-w-[800px] mx-auto whitespace-pre-wrap"
					text={$_('sunrise-definition')}
				/>
			</div>
		</div>
		<!-- <div class="flex flex-col sm:flex-row gap-y-9 sm:flex-wrap sm:justify-between pb-16"> -->
		<div
			class="flex flex-col sm:flex-row gap-4 sm:flex-wrap pb-16"
		>
			{#each features as { index, label, description, imageSrc }, i}
				<FeatureItem {index} {label} {description} {imageSrc} />
			{/each}
		</div>
	</div>
</div>
