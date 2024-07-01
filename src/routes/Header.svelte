<script>
	import * as images from '../consts/images';
	let isEnglish = true;
	import { newLocale } from '../lib/stores/i18nStore';
	import { locale } from 'svelte-i18n';

	function toggleLanguage() {
		isEnglish = !isEnglish;
		locale.set(isEnglish ? 'en' : 'jp');
		newLocale.set(isEnglish ? 'en' : 'jp');
	}
</script>

<header>
	<div class="navbar sticky top-0 z-50 gap-4 px-4 md:px-20">
		<img
			class="fill-current"
			style="filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(95deg) brightness(100%) contrast(100%);"
			src={images.logo}
			alt="logo"
		/>
		<img
			style="filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(95deg) brightness(100%) contrast(100%);"
			src={images.sunrise}
			alt="sunrise"
		/>

		<span class="flex-auto"></span>

		<details class="dropdown dropdown-end">
			<summary class="btn btn-outline text-base-100 w-full gap-2 md:w-auto md:px-8">
				<span class="material-symbols-outlined">menu</span>
				<span class="hidden md:inline">Menu</span>
			</summary>
			<ul class="p-2 shadow menu dropdown-content bg-base-100 z-50 rounded-box w-52">
				<li><a href="https://testnet.app.sunriselayer.io" target="_blank">App (Testnet)</a></li>
				<li><a>Explorer (coming soon)</a></li>
				<li><a href="https://docs.sunriselayer.io" target="_blank">Docs</a></li>
				<li><a href="https://github.com/SunriseLayer" target="_blank">GitHub</a></li>
			</ul>
		</details>
	</div>
</header>
