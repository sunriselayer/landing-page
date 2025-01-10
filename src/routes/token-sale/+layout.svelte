<script lang="ts">
	import './styles.css';
	import '../../app.css';
	import en from '../../i18n/token-sale/en.json';
	import jp from '../../i18n/token-sale/jp.json';
	import { _, init, addMessages } from 'svelte-i18n';
	import '/node_modules/flag-icons/css/flag-icons.min.css';

	import Header from '$lib/sections/token-sale/Header.svelte';
	import Thesis from '$lib/sections/token-sale/Thesis.svelte';
	import Features from '$lib/sections/token-sale/Features.svelte';
	import Summaries from '$lib/sections/token-sale/Summaries.svelte';
	import SalesDetails from '$lib/sections/token-sale/SalesDetails.svelte';
	import Tokenomics from '$lib/sections/token-sale/Tokenomics.svelte';
	import FlyWheel from '$lib/sections/token-sale/FlyWheel.svelte';
	import Schedule from '$lib/sections/token-sale/Schedule.svelte';
	import Ecosystem from '$lib/sections/token-sale/Ecosystem.svelte';
	import CoreTeam from '$lib/sections/token-sale/CoreTeam.svelte';
	import Roadmap from '$lib/sections/token-sale/Roadmap.svelte';
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

	.divider {
		height: 0px;
		border: 1px solid #edbc64;
		flex: none;
		order: 0;
		flex-grow: 0;
	}
</style>
