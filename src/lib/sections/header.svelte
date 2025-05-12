<script lang="ts">
	import * as images from '../../consts/images';
	let isEnglish = true;
	import { newLocale } from '../stores/i18nStore';
	import { _, locale } from 'svelte-i18n';

	import LinkButton from '$lib/components/link-button.svelte';
	import { testNetLink } from '../../consts';

	function toggleLanguage() {
		isEnglish = !isEnglish;
		locale.set(isEnglish ? 'en' : 'jp');
		newLocale.set(isEnglish ? 'en' : 'jp');
	}
	interface Props {
		active?: string;
	}

	let { active }: Props = $props();

	const menus = [
		{ key: 'build', label: 'header-footer.build', link: '/build' },
		{
			key: 'explorer',
			label: 'header-footer.explorer',
			link: 'https://testnet.risescan.sunriselayer.io/'
		},
		{ key: 'docs', label: 'header-footer.docs', link: 'https://docs.sunriselayer.io' },
		{ key: 'git', label: 'header-footer.git', link: 'https://github.com/SunriseLayer' }
	];

	function openLink(link: string) {
		if (link.startsWith('/')) {
			open(link, '_self');
		} else {
			open(link, '_blank');
		}
	}
</script>

<header class="z-50">
	<div
		class="navbar sticky min-h-20 top-0 px-6 lg:px-20 md:py-10 xl:px-[7.5rem] md:text-[1.25rem] md:leading-[1.5rem] gap-[0.625rem]"
	>
		<a class="flex z-50 gap-[0.6rem]" href="/">
			<img class="fill-current filter w-8 md:w-[2.6rem]" src={images.logo} alt="logo" />
			<img class="filter hidden md:block" src={images.sunriseWhite} alt={$_('app.name')} />
		</a>

		<div class="flex-auto justify-around">
			<ul class="p-2 md:flex flex-row hidden gap-11 text-white">
				{#each menus as menu}
					<li>
						<button
							class={active === menu.key
								? 'highlight-text'
								: 'hover:text-[#FDA60B] transition-all duration-300'}
							onclick={() => openLink(menu.link)}
						>
							{@html $_(menu.label)}
						</button>
					</li>
				{/each}
			</ul>
		</div>

		<LinkButton text={$_('try-testnet')} link={testNetLink} />

		<details class="dropdown dropdown-end md:hidden">
			<summary
				class="btn btn-outline border-none text-[#F2B445] w-full gap-2 md:w-auto md:px-8 px-0 py-0"
			>
				<span class="material-symbols-outlined">menu</span>
				<span class="hidden md:inline">Menu</span>
			</summary>
			<ul class="p-2 shadow menu dropdown-content bg-slate-800 rounded-box w-max text-white">
				{#each menus as menu}
					<li>
						<button
							class={active === menu.key
								? 'active'
								: 'hover:text-[#FDA60B] transition-all duration-300'}
							onclick={() => openLink(menu.link)}
						>
							{@html $_(menu.label)}
						</button>
					</li>
				{/each}
			</ul>
		</details>
	</div>
</header>
