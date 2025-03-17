<script lang="ts">
	import { _ } from 'svelte-i18n';

	import { appTitle } from '../../consts';
</script>

<svelte:head>
	<title>{appTitle}</title>
	<meta name="description" content="Sunrise" />
</svelte:head>

<main class="md:mx-auto md:mt-10 mt-0">
	<section class="z-20 m-auto max-w-[842px] gap-6">
		<h1
			class="text-center text-[3.75rem] font-medium md:text-[7.5rem] highlight-text tracking-wide md:leading-[6rem] leading-[3rem]"
		>
			{@html appTitle}
		</h1>
		<h2 class="md:text-2xl text-center text-base normal-text tracking-wider md:px-0 px-2 pb-10">
			{@html $_('app-description')}
		</h2>
	</section>
</main>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.4;
	}
	@media screen and (min-width: 768px) {
		section {
			justify-content: flex-start;
			flex: 1;
		}
	}

	h1 {
		width: 100%;
	}
</style>
