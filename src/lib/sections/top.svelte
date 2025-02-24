<script lang="ts">
	import { _ } from 'svelte-i18n';

	import { appDescription, buildLink, testNetLink } from '../../consts';
	import LinkButton from '$lib/components/link-button.svelte';
</script>

<section class="z-20 mx-auto md:pt-[6.25rem] md:pb-[25rem] text-base-100 p-6 pb-20 md:px-0">
	<h1
		class="text-center text-[1.5rem] leading-7 font-semibold md:text-5xl xl:text-[4.375rem] w-max mx-auto"
	>
		{@html appDescription}
	</h1>
	<h2 class="md:text:xl text-center text-[0.875rem] leading-none xl:text-2xl pt-5 px-8">
		{@html $_('app-description')}
	</h2>
	<div class="flex gap-4 md:pt-20 pt-6 justify-center">
		<LinkButton className="md:block hidden" text={$_('try-testnet')} link={testNetLink} />
		<LinkButton
			className="md:block hidden"
			text={$_('build-sunrise')}
			link={buildLink}
			transparent={true}
		/>
		<LinkButton className="md:hidden block" text={$_('learn')} link={testNetLink} />
		<LinkButton
			className="md:hidden block"
			text={$_('deploy')}
			link={buildLink}
			transparent={true}
		/>
	</div>
</section>

<style>
</style>
