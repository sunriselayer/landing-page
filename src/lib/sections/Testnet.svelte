<script lang="ts">
	import { _ } from 'svelte-i18n';

	import LinkButton from '$lib/components/LinkButton.svelte';
	import { testNetLink } from '../../consts';
	import * as images from '../../consts/images';
</script>

<main>
	<section class="gap-4 pt-[16.875rem] text-base-100">
		<div class="flex gap-4 justify-center">
			<img src={images.color} alt="logo" />
			<img class="filter invert" src={images.sunrise} alt="sunrise" />
		</div>
		<h1
			class="text-center text-4xl font-semibold md:text-6xl xl:text-[6rem] xl:leading-[7.375rem] md:leading-[6rem] tracking-wide"
		>
			Testnet is live
		</h1>
		<LinkButton text={$_('try-testnet')} link={testNetLink} />
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
