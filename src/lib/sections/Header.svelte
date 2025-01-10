<script lang="ts">
	import * as images from '../../consts/images';
	let isEnglish = true;
	import { newLocale } from '../../lib/stores/i18nStore';
	import { _, locale } from 'svelte-i18n';

	import LinkButton from '$lib/components/LinkButton.svelte';
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
		{ key: 'build', label: 'header-footer.build', link: '/build', isSelf: true },
		{
			key: 'explorer',
			label: 'header-footer.explorer',
			link: 'https://testnet.risescan.sunriselayer.io/'
		},
		{ key: 'docs', label: 'header-footer.docs', link: 'https://docs.sunriselayer.io' },
		{ key: 'git', label: 'header-footer.git', link: 'https://github.com/SunriseLayer' }
	];
</script>

<header>
	<div
		class="navbar sticky min-h-12 top-0 px-4 lg:px-20 md:py-10 xl:px-[7.5rem] md:text-[1.25rem] md:leading-[1.5rem]"
	>
		<a class="flex z-50 gap-4" href="/">
			<img class="fill-current filter" src={images.logo} alt="logo" />
			<img class="filter" src={images.sunriseWhite} alt={$_('app.name')} />
		</a>

		<div class="flex-auto justify-around">
			<ul class="p-2 md:flex flex-row hidden gap-11 text-white">
				{#each menus as menu}
					<li>
						<a
							class={active === menu.key ? 'highlight-text' : ''}
							href={menu.link}
							target={menu.isSelf ? '_self' : '_blank'}>{@html $_(menu.label)}</a
						>
					</li>
				{/each}
			</ul>
		</div>

		<LinkButton text={$_('try-testnet')} link={testNetLink} />

		<details class="dropdown dropdown-end md:hidden">
			<summary class="btn btn-outline text-base-100 w-full gap-2 md:w-auto md:px-8">
				<span class="material-symbols-outlined">menu</span>
				<span class="hidden md:inline">Menu</span>
			</summary>
			<ul class="p-2 shadow menu dropdown-content bg-base-100 z-50 rounded-box w-52">
				{#each menus as menu}
					<li>
						<a
							class={active === menu.key ? 'active' : ''}
							href={menu.link}
							target={menu.isSelf ? '_self' : '_blank'}>{@html $_(menu.label)}</a
						>
					</li>
				{/each}
			</ul>
		</details>
	</div>
</header>
