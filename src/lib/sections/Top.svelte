<script lang="ts">
	import { _ } from 'svelte-i18n';

	import { appDescription, buildLink, testNetLink } from '../../consts';
	import LinkButton from '$lib/components/LinkButton.svelte';
</script>

<section class="z-20 mx-auto md:pt-[6.25rem] md:pb-[25rem] text-base-100">
	<h1 class="text-center text-4xl font-extrabold md:text-5xl xl:text-[4.375rem]">
		{@html appDescription}
	</h1>
	<h2 class="md:text:xl text-center sm:text-lg xl:text-2xl md:pt-5">
		{@html $_('app-description')}
	</h2>
	<div class="flex gap-4 md:pt-20 justify-center">
		<LinkButton text={$_('try-testnet')} link={testNetLink} />
		<LinkButton text={$_('build-sunrise')} link={buildLink} transparent={true} />
	</div>
</section>

<style>
	h1 {
		width: 100%;
	}
</style>
