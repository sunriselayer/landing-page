<script lang="ts">
	import { _ } from 'svelte-i18n';

	import { appTitle } from '../consts';

	import Header from '$lib/sections/Header.svelte';
	import Footer from '$lib/sections/Footer.svelte';
	import Concepts from '$lib/sections/Concepts.svelte';
	import Features from '$lib/sections/Features.svelte';
	import Testnet from '$lib/sections/Testnet.svelte';
	import Top from '$lib/sections/Top.svelte';
</script>

<svelte:head>
	<title>{appTitle}</title>
	<meta name="description" content={$_('app.name')} />
	<meta name="theme-color" content="#010E25" media="(prefers-color-scheme: dark)" />
	<style>
		body {
			background-color: #010e25;
		}
	</style>
</svelte:head>

<main class="max-w-[1440px] mx-auto w-full">
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
		background-image: url(../lib/images/main-dark.png),
			linear-gradient(to bottom, transparent 20%, rgba(1, 14, 37, 1) 80%),
			linear-gradient(to bottom, transparent 0%, transparent 70%, rgba(1, 14, 37, 0.103) 100%);
		background-blend-mode: overlay;
		background-repeat: no-repeat;
		background-position-y: 20px;
		background-position-x: center;
		background-size: 140%;
		flex: 1;
		display: flex;
		flex-direction: column;
		width: 100%;
	}

	@media (min-width: 768px) {
		first {
			background-position-x: center;
			background-position-y: top;
			background-size: cover;
		}
	}

	fourth {
		background-image: url(../lib/images/bg-testnet.png);
		background-blend-mode: overlay;
		background-repeat: no-repeat;
		background-position-x: center;
		background-position-y: 118%;
		background-size: cover;
	}
	main {
		background-image: url(../lib/images/footer-overlay.png);
		background-blend-mode: overlay;
		background-repeat: no-repeat;
		background-position-x: center;
		background-position-y: bottom;
		background-size: 100% 45%;
	}
</style>
