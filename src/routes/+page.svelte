<script lang="ts">
	import { _ } from 'svelte-i18n';
	import Header from './Header.svelte';
</script>

<svelte:head>
	<title>SunRise</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<div class=" h-[796px]">
		<div class="flex flex-col gap-[140px] pt-[50px]">
			<Header />
			<div class="flex flex-col gap-12">
				<p>{$_('app-description')}</p>
			</div>
		</div>
	</div>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	h1 {
		width: 100%;
	}

	.welcome {
		display: block;
		position: relative;
		width: 100%;
		height: 0;
		padding: 0 0 calc(100% * 495 / 2048) 0;
	}

	.welcome img {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		display: block;
	}
</style>
