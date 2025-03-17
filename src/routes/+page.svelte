<script lang="ts">
	import { _ } from 'svelte-i18n';

	import { appTitle } from '../consts';

	import Header from '$lib/sections/header.svelte';
	import Footer from '$lib/sections/footer.svelte';
	import Concepts from '$lib/sections/concepts.svelte';
	import Features from '$lib/sections/features.svelte';
	import Testnet from '$lib/sections/testnet.svelte';
	import Top from '$lib/sections/top.svelte';
</script>

<svelte:head>
	<title>{appTitle}</title>
	<meta name="description" content={$_('app.name')} />
	<meta name="theme-color" content="#050f21" media="(prefers-color-scheme: dark)" />
	<style>
		.app {
			background-color: #050f21;
		}
	</style>
</svelte:head>

<main class="w-full md:gap-0 gap-6">
	<first>
		<Header />
		<Top />
	</first>
	<second>
		<Concepts />
	</second>
	<third>
		<Features />
	</third>
	<fourth>
		<Testnet />
	</fourth>
	<Footer />
</main>

<style>
	first {
		background-image: url(../lib/images/main-dark_sp.svg),
			linear-gradient(to bottom, transparent 40%, rgba(1, 14, 37, 1) 90%),
			linear-gradient(to bottom, transparent 0%, transparent 70%, rgba(1, 14, 37, 0.103) 100%);
		background-blend-mode: overlay;
		background-repeat: no-repeat;
		background-position-x: center;
		background-position-y: top;
		background-size: cover;
		flex: 1;
		display: flex;
		flex-direction: column;
		width: 100%;
		gap: 24px;
	}

	@media (min-width: 768px) {
		first {
			background-image: url(../lib/images/main-dark.svg);
			background-position-x: center;
			background-position-y: top;
			background-size: cover;
			gap: 0px;
		}
	}

	fourth {
		background-image: url(../lib/images/bg-testnet.png);
		background-blend-mode: overlay;
		background-repeat: no-repeat;
		background-position-x: center;
		background-position-y: 112%;
		background-size: cover;
	}

	@media (max-width: 768px) {
		fourth {
			background-size: 167vw 206vw;
			background-position-y: 113%;
		}
	}
	main {
		background-image: url(../lib/images/footer-overlay.png);
		background-blend-mode: overlay;
		background-repeat: no-repeat;
		background-position-x: center;
		background-position-y: bottom;
		background-size: 100% 45%;
	}

	@media (max-width: 768px) {
		main {
			background-size: 200% 20%;
		}
	}
</style>
