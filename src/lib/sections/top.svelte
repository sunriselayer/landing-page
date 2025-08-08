<script lang="ts">
	import { _ } from 'svelte-i18n';

	import { appDescription, buildLink, appLink } from '../../consts';
	import LinkButton from '$lib/components/link-button.svelte';
</script>

<section class="z-20 mx-auto md:pt-[6.25rem] lg:pb-[25rem] md:pb-[15rem] text-base-100 p-10">
	<h1
		class="text-center text-[1.5rem] leading-[1.3] font-semibold md:text-[3rem] xl:text-[4.375rem] w-max mx-auto"
	>
		{@html appDescription}
	</h1>
	<h2 class="text-center text-[0.875rem] leading-none md:text-[1.5rem] pt-5 px-2">
		{@html $_('app-description')}
	</h2>
	<div class="flex gap-4 md:pt-20 pt-6 justify-center">
		<LinkButton className="md:block hidden" text={$_('open-app')} link={appLink} />
		<LinkButton
			className="md:block hidden"
			text={$_('build-sunrise')}
			link={buildLink}
			transparent={true}
		/>
		<LinkButton className="md:hidden block" text={$_('learn')} link={appLink} />
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
