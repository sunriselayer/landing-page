<script>
	import Header from './Header.svelte';
	import './styles.css';
	import '../app.css';
	import en from '../i18n/en.json';
	import jp from '../i18n/jp.json';
	import { _, init, addMessages } from 'svelte-i18n';
	import '/node_modules/flag-icons/css/flag-icons.min.css';
	import Footer from './Footer.svelte';
	import Concepts from './Concepts.svelte';
	import Features from './Features.svelte';
	import Summaries from './Summaries.svelte';

	const defaultLocale = 'en';

	addMessages('en', en);
	addMessages('jp', jp);

	init({
		fallbackLocale: defaultLocale,
		initialLocale: defaultLocale
	});
</script>

<div class="app">
	<main>
		<Header />
		<slot />
	</main>
	<second>
		<Concepts />
	</second>
	<third>
		<Features />
	</third>
	<fourth>
		<Summaries />
	</fourth>

	<Footer />
</div>

<style>
	main {
		background-image: url(../lib/images/main.png);
		background-position-x: center;
		background-position-y: center;
	}

	second {
		background-image: url(../lib/images/secondary.png);
		background-size: cover;
	}

	third {
		background:
			linear-gradient(to top right, #fceccf 0%, #d7e5fb 50%) top right / 100% 100% no-repeat,
			linear-gradient(to top left, #fceccf 0%, #d7e5fb 50%) top left / 100% 100% no-repeat;
		box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
	}

	fourth {
		background: linear-gradient(to bottom right, #fceccf 0%, #d7e5fb 50%) top left / 100% 100%
			no-repeat;
	}
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}
</style>
