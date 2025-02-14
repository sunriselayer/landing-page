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
	function openDoc() {
		if (
			confirm(
				'This crypto-asset marketing communication has not been reviewed or approved by any competent authority in any Member State of the European Union. The person seeking admission to trading of the crypto-asset is solely responsible for the content of this crypto-asset marketing communication.\r\n\r\n Do you acknowledge and agree to the above disclaimer?'
			)
		) {
			open('https://docs.sunriselayer.io', '_blank');
		}
	}
</script>

<header>
	<div class="navbar sticky top-0 z-50 gap-4 px-4 md:px-20">
		<img class="fill-current filter invert" src={images.logo} alt="logo" />
		<img class="filter invert" src={images.sunrise} alt="sunrise" />

		<span class="flex-auto"></span>

		<details class="dropdown dropdown-end">
			<summary class="btn btn-outline text-base-100 w-full gap-2 md:w-auto md:px-8">
				<span class="material-symbols-outlined">menu</span>
				<span class="hidden md:inline">Menu</span>
			</summary>
			<ul class="p-2 shadow menu dropdown-content bg-base-100 z-50 rounded-box w-52">
				<li><a href="https://testnet.app.sunriselayer.io" target="_blank">App (Testnet)</a></li>
				<li>
					<a href="https://testnet.risescan.sunriselayer.io" target="_blank">Explorer (Testnet)</a>
				</li>
				<li><button class="text-left" on:click={openDoc}> Docs</button></li>
				<li><a href="https://github.com/SunriseLayer" target="_blank">GitHub</a></li>
			</ul>
		</details>
	</div>
</header>
