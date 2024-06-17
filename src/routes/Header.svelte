<script>
	import { page } from '$app/stores';
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
	<div class="flex flex-row px-4 md:px-20 py-2">
		<details class="dropdown sm:hidden">
			<summary class="btn btn-square btn-ghost">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					class="inline-block w-5 h-5 stroke-current"
					style="filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(95deg) brightness(100%) contrast(100%);"
					><path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4 6h16M4 12h16M4 18h16"
					></path>
				</svg>
			</summary>
			<ul class="p-2 shadow menu dropdown-content z-50 bg-base-100 rounded-box w-52">
				<li><a href="https://docs.sunriselayer.io" target="_blank">Learn</a></li>
				<li>
					<a href="https://docs.sunriselayer.io/run-a-sunrise-node/networks" target="_blank"
						>Build</a
					>
				</li>
				<li>
					<button on:click={toggleLanguage} class="items-center">
						{isEnglish ? 'EN' : 'JP'}
					</button>
				</li>
			</ul>
		</details>
		<div class="flex gap-4 items-center text-2xl">
			<img
				class="fill-current text-white"
				style="filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(95deg) brightness(100%) contrast(100%);"
				src={images.logo}
				alt="logo"
			/>
			<img
				style="filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(95deg) brightness(100%) contrast(100%);"
				src={images.sunrise}
				alt="sunrise"
			/>
		</div>
		<span class="flex-auto"></span>

		<div class="hidden sm:flex items-center">
			<nav>
				<ul class="flex gap-8 text-2xl text-white">
					<li
						class="text-white"
						aria-current={$page.url.pathname === '/learn' ? 'page' : undefined}
					>
						<a href="https://docs.sunriselayer.io" target="_blank">Learn</a>
					</li>
					<li
						class="text-white"
						aria-current={$page.url.pathname === '/build' ? 'page' : undefined}
					>
						<a href="https://docs.sunriselayer.io/run-a-sunrise-node/networks" target="_blank"
							>Build</a
						>
					</li>
					<!-- <li
								class="text-white"
								aria-current={$page.url.pathname === '/run-node' ? 'page' : undefined}
							>
								<a href="/">Run a Node</a>
							</li> -->
					<li class="text-white" aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
						<button on:click={toggleLanguage} class="items-center">
							{isEnglish ? 'EN' : 'JP'}
						</button>
					</li>
				</ul>
			</nav>
		</div>
	</div>
</header>
