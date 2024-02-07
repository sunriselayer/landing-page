<script lang="ts">
	import { _ } from 'svelte-i18n';
	import Label from '$lib/components/Label.svelte';
	import logo from '$lib/images/icon.svg';
	import { appDescription } from '../consts';
	import { appTitle } from '../consts';
	import { page } from '$app/stores';
	import monolithic from '../lib/images/monolithic.svg';
	import modular from '../lib/images/modular.svg';
	import build from '../lib/images/build.svg';
	import value from '../lib/images/value.svg';
	import Feature from '$lib/components/Feature.svelte';

	let isEnglish = true;

	function toggleLanguage() {
		isEnglish = !isEnglish;
	}
</script>

<svelte:head>
	<title>SunRise</title>
	<meta name="description" content="SunRise" />
</svelte:head>

<div class="flex justify-center">
	<div class="w-[1413px]">
		<div class="flex flex-col gap-[140px] pt-[50px]">
			<div class="flex justify-between">
				<div class="flex gap-2 items-center text-2xl">
					<img src={logo} alt="SvelteKit" />
					<span>{appTitle}</span>
				</div>

				<nav class="flex items-center">
					<ul class="flex gap-8">
						<li
							class="flex items-center"
							aria-current={$page.url.pathname === '/' ? 'page' : undefined}
						>
							<button on:click={toggleLanguage} class="items-center">
								{isEnglish ? 'English' : 'Japanese'}
							</button>
						</li>
						<li aria-current={$page.url.pathname === '/learn' ? 'page' : undefined}>
							<a href="/learn">Learn</a>
						</li>
						<li aria-current={$page.url.pathname === '/build' ? 'page' : undefined}>
							<a href="/build">Build</a>
						</li>
						<li aria-current={$page.url.pathname === '/run-node' ? 'page' : undefined}>
							<a href="/run-node">Run a Node</a>
						</li>
					</ul>
				</nav>
			</div>
			<div class="flex flex-col gap-12 px-[50px] items-center">
				<Label
					className={'w-[1076px] text-center font-orbitron text-[70px] font-normal leading-[80px] tracking-[1.4px] text-textPrimary'}
					text={appDescription}
				/>
				<Label
					className={'w-full text-center font-overpass text-[26px] font-medium text-base leading-normal tracking-tighter text-textPrimary'}
					text={$_('app-description')}
				/>
			</div>
			<div class="flex gap-9 justify-center">
				<button
					class="flex justify-center items-center px-[30px] py-5 rounded-md bg-gradient-to-b to-[#0A204A] from-[#0F1C364D]"
					><Label
						className="text-white text-center font-overpass text-xl font-bold leading-5 tracking-tighter"
						text="Build for Modular"
					/></button
				>
				<button
					class="flex justify-center items-center px-[30px] py-5 rounded-md border-2 border-black"
					><Label
						className="text-textPrimary text-center text-xl font-bold leading-5 tracking-tighter"
						text="Explore"
					/></button
				>
			</div>
		</div>
	</div>
</div>
<div>
	<div class="px-[50px] text-white w-full flex flex-col justify-center">
		<div>
			<div class="flex flex-col justify-center pt-[60px] pb-16">
				<Label
					className="text-center font-orbitron text-6xl font-bold leading-[80px] tracking-wide"
					text={$_('sunrise-question')}
				/>
				<Label
					className="text-center font-overpass text-2xl font-medium tracking-tighter"
					text={$_('sunrise-definition')}
				/>
			</div>
		</div>
		<div
			class="flex flex-wrap gap-x-5 gap-y-9 mx-auto"
			style="background: var(--Sunirse, linear-gradient(to bottom right, #FFC75F 0%, #4988FF 50%) bottom right / 50% 50% no-repeat, linear-gradient(to bottom left, #FFC75F 0%, #4988FF 50%) bottom left / 50% 50% no-repeat, linear-gradient(to top left, #FFC75F 0%, #4988FF 50%) top left / 50% 50% no-repeat, linear-gradient(to top right, #FFC75F 0%, #4988FF 50%) top right / 50% 50% no-repeat);
mix-blend-mode: overlay;"
		>
			<div
				class="w-[646px] flex flex-col gap-[23px] px-5 py-[30px]"
				style="background: var(--Dark, linear-gradient(180deg, rgba(15, 28, 54, 0.30) 0%, #0A204A 100%));"
			>
				<Label className="font-orbitron text-4xl font-extrabold" text={'01'} />
				<Label className="font-orbitron text-4xl font-extrabold" text={$_('sunrise-01.label')} />
				<Label className="font-sans text-2xl font-normal" text={$_('sunrise-01.description')} />
				<img class="w-full" src={monolithic} alt="monolithic" />
			</div>
			<div
				class="w-[646px] flex flex-col gap-[23px] px-5 py-[30px] bg-gradient-to-b from-[rgba(15,28,54,0.30)] to-Blue-dark"
				style="background: var(--Dark, linear-gradient(180deg, rgba(15, 28, 54, 0.30) 0%, #0A204A 100%));"
			>
				<Label className="font-orbitron text-4xl font-extrabold" text={'02'} />
				<Label className="font-orbitron text-4xl font-extrabold" text={$_('sunrise-02.label')} />
				<Label className="font-sans text-2xl font-normal" text={$_('sunrise-02.description')} />
				<img class="w-full" src={modular} alt="modular" />
			</div>
			<div
				class="w-[646px] flex flex-col gap-[23px] px-5 py-[30px] bg-gradient-to-b from-[rgba(15,28,54,0.30)] to-Blue-dark"
				style="background: var(--Dark, linear-gradient(180deg, rgba(15, 28, 54, 0.30) 0%, #0A204A 100%));"
			>
				<Label className="font-orbitron text-4xl font-extrabold" text={'03'} />
				<Label className="font-orbitron text-4xl font-extrabold" text={$_('sunrise-03.label')} />
				<Label className="font-sans text-2xl font-normal" text={$_('sunrise-03.description')} />
				<img class="w-full" src={build} alt="build" />
			</div>
			<div
				class="w-[646px] flex flex-col gap-[23px] px-5 py-[30px] bg-gradient-to-b from-[rgba(15,28,54,0.30)] to-Blue-dark"
				style="background: var(--Dark, linear-gradient(180deg, rgba(15, 28, 54, 0.30) 0%, #0A204A 100%));"
			>
				<Label className="font-orbitron text-4xl font-extrabold" text={'04'} />
				<Label className="font-orbitron text-4xl font-extrabold" text={$_('sunrise-04.label')} />
				<Label className="font-sans text-2xl font-normal" text={$_('sunrise-04.description')} />
				<img class="w-full" src={value} alt="value" />
			</div>
		</div>
	</div>
</div>
<div class="p-[100px]">
	<Label
		className={'text-textPrimary text-center font-orbitron text-6xl font-bold tracking-tight'}
		text={$_('sunrise-features.label')}
	/>
	<div class="flex justify-center pb-[135px]">
		<Label
			className={'w-[892px] text-textPrimary text-center pt-12 font-overpass text-2xl font-medium'}
			text={$_('sunrise-features.description')}
		/>
	</div>
	<Feature />
</div>

<style>
	/* section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	} */

	h1 {
		width: 100%;
	}

	.welcome {
		display: block;
		position: relative;
		width: 100%;
		height: 0;
		padding: 0 0 calc(100% * 495 / 2048) 0;
	}

	.welcome img {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		display: block;
	}
</style>
