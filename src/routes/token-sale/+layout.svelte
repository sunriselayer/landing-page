<script lang="ts">
	import './styles.css';
	import '../../app.css';
	import en from '../../i18n/token-sale/en.json';
	import jp from '../../i18n/token-sale/jp.json';
	import { _, init, addMessages } from 'svelte-i18n';
	import '/node_modules/flag-icons/css/flag-icons.min.css';

	import Header from '$lib/sections/token-sale/header.svelte';
	import About from '$lib/sections/token-sale/about.svelte';
	import Features from '$lib/sections/token-sale/features.svelte';
	import Summaries from '$lib/sections/token-sale/summaries.svelte';
	import SalesDetails from '$lib/sections/token-sale/sales-details.svelte';
	import Tokenomics from '$lib/sections/token-sale/tokenomics.svelte';
	import Schedule from '$lib/sections/token-sale/schedule.svelte';
	import Ecosystem from '$lib/sections/token-sale/ecosystem.svelte';
	import Roadmap from '$lib/sections/token-sale/roadmap.svelte';
	import Timeline from '$lib/sections/token-sale/timeline.svelte';
	import Community from '$lib/sections/token-sale/community.svelte';
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

<main class="min-h-[524px] relative">
	<Header />
	{@render children?.()}
</main>
<About />
<Features />
<Tokenomics />
<Ecosystem />
<Schedule />
<Roadmap />
<Community />

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
</style>
