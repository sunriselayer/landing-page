<script lang="ts">
    import './exora.css';
	import en from '../../i18n/exora/en.json';
	import jp from '../../i18n/exora/jp.json';
	import { addMessages, init } from 'svelte-i18n';

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

{@render children?.()}