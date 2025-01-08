<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import '$lib/components/styles.css';
	import '../app.css';
	import en from '../i18n/en.json';
	import jp from '../i18n/jp.json';
	import { _, init, addMessages } from 'svelte-i18n';
	import '/node_modules/flag-icons/css/flag-icons.min.css';
	import Thesis from '$lib/components/Thesis.svelte';
	import Features from '$lib/components/Features.svelte';
	import Summaries from '$lib/components/Summaries.svelte';
	import SalesDetails from '$lib/components/SalesDetails.svelte';
	import Tokenomics from '$lib/components/Tokenomics.svelte';
	import FlyWheel from '$lib/components/FlyWheel.svelte';
	import Schedule from '$lib/components/Schedule.svelte';
	import Ecosystem from '$lib/components/Ecosystem.svelte';
	import CoreTeam from '$lib/components/CoreTeam.svelte';
	import Roadmap from '$lib/components/Roadmap.svelte';
	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();

	const defaultLocale = 'en';

	addMessages('en', en);
	addMessages('jp', jp);

	init({
		fallbackLocale: defaultLocale,
		initialLocale: defaultLocale
	});
</script>

<div class="app">
	<main class="h-[524px] min-h-[524px]">
		<Header />
		{@render children?.()}
	</main>
	<div class="divider m-10 md:w-[422px] md:mx-auto md:my-20"></div>
	<Thesis />
	<div class="divider m-10 md:w-[422px] md:mx-auto md:my-20"></div>
	<Features />
	<div class="divider m-10 md:w-[422px] md:mx-auto md:my-20"></div>
	<Summaries />
	<div class="divider m-10 md:w-[422px] md:mx-auto md:my-20"></div>
	<SalesDetails />
	<div class="divider m-10 md:w-[422px] md:mx-auto md:my-20"></div>
	<Tokenomics />
	<div class="divider m-10 md:w-[422px] md:mx-auto md:my-20"></div>
	<FlyWheel />
	<div class="divider m-10 md:w-[422px] md:mx-auto md:my-20"></div>
	<Schedule />
	<div class="divider m-10 md:w-[422px] md:mx-auto md:my-20"></div>
	<Roadmap />
	<div class="divider m-10 md:w-[422px] md:mx-auto md:my-20"></div>
	<Ecosystem />
	<div class="divider m-10 md:w-[422px] md:mx-auto md:my-20"></div>
	<CoreTeam />
</div>

<style>
	main {
		background-image: url($lib/images/main.png);
		background-position-y: 120px;
		background-position-x: center;
		background-size: 933px;
		background-repeat: no-repeat;
	}

	@media (min-width: 768px) {
		main {
			background-position-x: center;
			background-position-y: center;
			background-size: contain;
		}
	}

	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	.divider {
		height: 0px;
		border: 1px solid #edbc64;
		flex: none;
		order: 0;
		flex-grow: 0;
	}
</style>
