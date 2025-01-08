<script>
	import * as images from '../../consts/images';
	let isEnglish = true;
	import { newLocale } from '../stores/i18nStore';
	import { locale } from 'svelte-i18n';

	function toggleLanguage() {
		isEnglish = !isEnglish;
		locale.set(isEnglish ? 'en' : 'jp');
		newLocale.set(isEnglish ? 'en' : 'jp');
	}
</script>

<header>
	<div class="navbar sticky top-0 z-50 gap-4 px-[1.25rem] py-4 md:p-[2.5rem]">
		<img class="fill-current filter " src={images.logo} alt="logo" />
		<img class="filter md:block hidden" src={images.sunrise} alt="sunrise" />
	</div>
</header>
