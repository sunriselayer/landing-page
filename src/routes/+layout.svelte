<script lang="ts">
	import './styles.css';
	import '../app.css';
	import en from '../i18n/en.json';
	import jp from '../i18n/jp.json';
	import { _, init, addMessages } from 'svelte-i18n';
	import '/node_modules/flag-icons/css/flag-icons.min.css';
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
	{@render children?.()}
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}
</style>
