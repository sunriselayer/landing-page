<script lang="ts">
	import { _, locale } from 'svelte-i18n';
	import Label from '$lib/components/Label.svelte';

	import { appDescription } from '../consts';
	import { appTitle } from '../consts';
	import Feature from '$lib/components/Feature.svelte';
	import { page } from '$app/stores';
	import * as images from '../consts/images';
	import { newLocale } from '../lib/stores/i18nStore';
	import Concept from '$lib/components/Concept.svelte';

	let isEnglish = true;

	function toggleLanguage() {
		isEnglish = !isEnglish;
		locale.set(isEnglish ? 'en' : 'jp');
		newLocale.set(isEnglish ? 'en' : 'jp');
	}
</script>

<svelte:head>
	<title>{appTitle}</title>
	<meta name="description" content="Sunrise" />
</svelte:head>

<div class="flex justify-center relative">
	<img src={images.main} alt="main" class="absolute z-0 h-full w-full object-cover" />
	<div class="z-10 w-full">
		<div class="flex flex-col lg:gap-[140px] md:gap-20 gap-10 md:pt-[50px] sm:pt-3 w-full">
			<div
				class="flex md:flex-row flex-col gap-4 justify-between lg:px-36 md:px-16 pl-10 sm:px-14 py-5 flex-auto"
			>
				<div class="flex gap-2 items-center text-2xl">
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

				<nav class="flex items-center">
					<ul class="flex sm:gap-8 gap-3 text-xl">
						<li
							class="text-white"
							aria-current={$page.url.pathname === '/learn' ? 'page' : undefined}
						>
							<a href="/">Learn</a>
						</li>
						<li
							class="text-white"
							aria-current={$page.url.pathname === '/build' ? 'page' : undefined}
						>
							<a href="/">Build</a>
						</li>
						<li
							class="text-white"
							aria-current={$page.url.pathname === '/run-node' ? 'page' : undefined}
						>
							<a href="/">Run a Node</a>
						</li>
						<li
							class="flex items-center text-white"
							aria-current={$page.url.pathname === '/' ? 'page' : undefined}
						>
							<button on:click={toggleLanguage} class="items-center">
								{isEnglish ? 'EN' : 'JP'}
							</button>
						</li>
					</ul>
				</nav>
			</div>
			<div
				class="flex flex-col lg:gap-12 gap-4 md:gap-6 sm:px-[50px] px-8 items-center 2xl:mx-auto"
			>
				<Label
					className={'font-orbitron xl:text-[70px] md:text-[50px] sm:text-4xl text-3xl font-extrabold md:leading-[70px] leading-9 tracking-wider text-center text-white max-w-[962px]'}
					text={appDescription}
				/>
				<Label
					className={'max-w-[721px] text-center font-overpass md:text-[26px] text-xl font-normal leading-[30px] text-white'}
					text={$_('app-description')}
				/>
			</div>
			<div class="flex sm:gap-9 gap-2 justify-center pb-32">
				<button class="items-center sm:px-[30px] sm:py-5 px-2 py-1 rounded-md bg-white"
					><Label
						className="text-[#4988FF] text-center font-overpass text-xl font-bold leading-5 tracking-tighter"
						text="Build for Modular"
					/></button
				>
				<button
					class="items-center sm:px-[30px] sm:py-5 px-2 py-1 rounded-md border-2 border-white bg-white/20"
					><Label
						className="text-white text-center font-overpass text-xl font-bold leading-5 tracking-tighter"
						text="Explore"
					/></button
				>
			</div>
		</div>
	</div>
</div>
<div
	class="md:py-36 sm:py-12 py-4 lg:px-[60px] md:px-10 text-textPrimary flex sm:flex-row relative justify-center"
>
	<img
		src={images.BgMission1}
		alt="BgMission1"
		class="absolute z-0 w-full h-full opacity-50 object-cover top-0 left-0"
	/>
	<div class="flex text-white relative max-w-[1255px] text-center px-4">
		<div class="flex flex-col gap-8 mx-auto">
			<Label
				className="font-orbitron md:text-[70px] text-2xl font-extrabold text-white z-30 max-w-[1000px]"
				text={$_('sunrise-mission.label')}
			/>
			<Label
				className="font-overpass md:text-[32px] text-xl font-medium tracking-tight text-white md:p-6 p-2 xl:mx-auto xl:leading-10 max-w-[844px] bg-white/10"
				text={$_('sunrise-mission.description')}
			/>
		</div>
	</div>
</div>
<Concept />
<div
	class=" p-4 lg:py-[100px] lg:px-16 sm:px-12 pt-10"
	style="background: linear-gradient(to top right, #FCECCF 0%, #D7E5FB 50%) top right / 100% 100% no-repeat, linear-gradient(to top left, #FCECCF 0%, #D7E5FB 50%) top left / 100% 100% no-repeat;
box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);"
>
	<div class="flex gap-2 justify-center mb-5">
		<img src={images.logo} alt="logo" />
		<img src={images.sunrise} alt="sunrise" />
	</div>
	<Label
		className={'text-textPrimary text-center font-orbitron lg:text-6xl sm:text-4xl text-2xl font-bold tracking-wider max-w-[1312px] xl:mx-auto'}
		text={$_('sunrise-features.label')}
	/>
	<div class="flex justify-center md:pb-[135px] pb-16">
		<Label
			className={'w-[892px] text-textPrimary text-center pt-12 font-overpass text-2xl font-medium 2xl:max-w-[1517px] 2xl:mx-auto'}
			text={$_('sunrise-features.description')}
		/>
	</div>
	<Feature />
</div>
<div
	class="pb-6 md:pb-10 md:px-10 sm:px-6 pt-5"
	style="background: linear-gradient(to top left, #D7E5FB 0%, #FCECCF 50%) top left / 100% 100% no-repeat, linear-gradient(to top right, #D7E5FB 0%, #FCECCF 50%) top right / 100% 100% no-repeat;"
>
	<div class="text-textPrimary max-w-[1270px] xl:mx-auto">
		<Label
			className="mx-auto text-center font-orbitron xl:text-[60px] lg:text-6xl md:text-5xl text-3xl font-extrabold tracking-wide pt-5 2xl:max-w-[1270px] lg:max-w-[1150px]"
			text={$_('sunrise-products.label')}
		/>
		<Label
			className="sm:mt-12 mt-8 text-center font-overpass text-2xl lg:text-[26px] md:text-2xl font-medium tracking-tighter max-w-[919px] mx-auto"
			text={$_('sunrise-products.description')}
		/>
	</div>
	<div
		class="flex justify-center lg:gap-[35px] gap-6 lg:flex-row flex-col mt-[35px] max-w-[1270px] lg:mx-auto px-5 md:px-0"
	>
		<div
			class="flex flex-col sm:gap-[23px] gap-2 p-5 lg:max-w-[400px] max-w-full rounded-[20px] border border-solid border-indigo-500 border-opacity-50"
			style="background: var(--PURPLE-LINEAR, linear-gradient(174deg, #71AFFB 0%, #A134F9 100%))"
		>
			<Label
				className="text-center text-[32px] font-extrabold leading-[50px] text-white font-sans"
				text={$_('sunrise-products.product-validiums.label')}
			/>
			<img class="w-[138.438px] h-[248px] mx-auto" src={images.validiums} alt="validiums" />
			<Label
				className="text-2xl font-normal text-white font-sans"
				text={$_('sunrise-products.product-validiums.description')}
			/>
		</div>
		<div
			class="flex flex-col sm:gap-[23px] gap-2 p-5 lg:max-w-[400px] max-w-full rounded-[20px] border border-solid border-indigo-500 border-opacity-50"
			style="background: var(--BLUE-LINEAR, linear-gradient(174deg, #71AFFB 0%, #3E34F9 100%)"
		>
			<Label
				className="text-center text-[32px] font-extrabold leading-[50px] text-white font-sans"
				text={$_('sunrise-products.product-rollups.label')}
			/>
			<img class="w-60 h-60 mx-auto" src={images.rollups} alt="rollups" />
			<Label
				className="text-2xl font-normal text-white font-sans"
				text={$_('sunrise-products.product-rollups.description')}
			/>
		</div>
		<div
			class="flex flex-col sm:gap-[23px] gap-2 p-5 lg:max-w-[400px] max-w-full rounded-[20px] border border-solid border-indigo-500 border-opacity-50"
			style="background: linear-gradient(186deg, #F9348C -64.12%, #A134F9 88.98%)"
		>
			<Label
				className="text-center text-[28px] font-extrabold text-white font-sans"
				text={$_('sunrise-products.product-pol.label')}
			/>
			<img class="w-60 h-60 mx-auto" src={images.pol} alt="pol" />
			<Label
				className="text-2xl font-normal text-white font-sans"
				text={$_('sunrise-products.product-pol.description')}
			/>
		</div>
	</div>
	<div class="mt-5 flex justify-center">
		<button class="rounded-md px-[30px] py-5 bg-[#FFC75F] text-center items-center"
			><Label
				className="text-xl font-bold font-overpass tracking-tighter"
				text="Build for Us"
			/></button
		>
	</div>
</div>
<div class=" px-4 lg:py-20 py-5 bg-white">
	<div
		class="flex xl:gap-32 lg:flex-row lg:mx-auto lg:gap-24 flex-col gap-3 pl-5 lg:pb-[114px] pb-5 md:px-8 lg:max-w-[1517px]"
	>
		<div class="flex justify-between items-start pt-4">
			<div class="flex gap-3 items-center">
				<img class="md:w-full h-full" src={images.logo} alt="logo" />
				<img class="md:w-full h-full" src={images.sunrise} alt="sunrise" />
			</div>
		</div>
		<div class="w-full flex sm:justify-between sm:flex-row flex-col gap-4 pr-6">
			<div class=" flex flex-col sm:gap-8 gap-1 ibm-plex-sans">
				<Label className="md:text-[30px] font-bold text-lg" text="Developers" />
				<Label className="md:text-xl font-medium" text="Docs" />
				<Label className="md:text-xl font-medium" text="GitHub" />
			</div>
			<div class=" flex flex-col sm:gap-8 gap-1 ibm-plex-sans">
				<Label className="md:text-[30px] font-bold text-lg" text="Services" />
				<Label className="md:text-xl font-medium" text="Portal" />
				<Label className="md:text-xl font-medium" text="Explorer" />
				<Label className="md:text-xl font-medium" text="Community" />
			</div>
			<div class=" flex flex-col sm:gap-8 gap-1 ibm-plex-sans">
				<Label className="md:text-[30px] font-bold text-lg" text="Information" />
				<Label className="md:text-xl font-medium" text="Whitepaper" />
				<Label className="md:text-xl font-medium" text="Blog" />
				<Label className="md:text-xl font-medium" text="Jobs" />
				<Label className="md:text-xl font-medium" text="Press Kit" />
			</div>
			<div class=" flex flex-col sm:gap-8 gap-1 ibm-plex-sans">
				<Label className="md:text-[30px]  font-bold text-lg" text="Legal" />
				<Label className="md:text-xl font-medium" text="Terms and Services" />
				<Label className="md:text-xl font-medium" text="Privacy Policy" />
			</div>
		</div>
	</div>
	<div
		class="pt-6 sm:px-8 px-5 flex justify-between sm:flex-row flex-col gap-1 2xl:max-w-[1517px] 2xl:mx-auto"
	>
		<Label
			className="md:text-2xl 2xl:text-3xl sm:tracking-wider tracking-tighter"
			text="Sunrise © – All rights reserved. 2024"
		/>
		<div class="flex lg:gap-9 md:gap-3 gap-1">
			<img src={images.discord} alt="discord" />
			<img src={images.twitter} alt="twitter" />
			<img src={images.linkedin} alt="linkedin" />
			<img src={images.youtube} alt="youtube" />
			<img src={images.linktree} alt="linktree" />
		</div>
	</div>
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
