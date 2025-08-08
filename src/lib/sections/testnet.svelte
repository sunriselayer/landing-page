<script lang="ts">
	import { _ } from 'svelte-i18n';

	import LinkButton from '$lib/components/link-button.svelte';
	import { appLink } from '../../consts';
	import * as images from '../../consts/images';
</script>

<main>
	<section class="gap-4 md:pt-[16.875rem] pt-[7.5rem] text-base-100 md:pb-[13.1215rem] pb-[7.5rem]">
		<div class="flex gap-2 justify-center">
			<img class="md:w-10 w-[1.65rem]" src={images.color} alt="logo" />
			<span class="uppercase tracking-wider leading-none self-center md:text-xl text-sm"
				>sunrise</span
			>
		</div>
		<h1
			class="text-center text-[2rem] leading-10 font-semibold md:text-6xl xl:text-[6rem] xl:leading-[7.375rem] md:leading-[6rem] tracking-wide"
		>
			Mainnet Live Now
		</h1>
		<LinkButton text={$_('open-app')} link={appLink} className="px-8" />
	</section>
</main>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}
</style>
