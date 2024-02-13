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
	<img src={images.TopBG} alt="TopBG" class="absolute z-0 h-full w-full object-cover" />
	<img
		src={images.TopMask}
		alt="TopBG"
		class="absolute z-0 opacity-95 h-full w-full object-cover"
	/>
	<div class="z-10 2xl:max-w-[1517px] 2xl:mx-auto">
		<div class="flex flex-col lg:gap-[140px] gap-20 md:pt-[50px] sm:pt-3">
			<div
				class="flex sm:flex-row flex-col justify-between lg:px-36 md:px-16 pl-10 sm:px-14 py-5 flex-auto"
			>
				<div class="flex gap-2 items-center text-2xl">
					<img src={images.logo} alt="SvelteKit" />
					<span>{appTitle}</span>
				</div>

				<nav class="flex items-center">
					<ul class="flex sm:gap-8 gap-3 text-xl">
						<li
							class="flex items-center"
							aria-current={$page.url.pathname === '/' ? 'page' : undefined}
						>
							<button on:click={toggleLanguage} class="items-center">
								{isEnglish ? 'English' : 'Japanese'}
							</button>
						</li>
						<li aria-current={$page.url.pathname === '/learn' ? 'page' : undefined}>
							<a href="/">Learn</a>
						</li>
						<li aria-current={$page.url.pathname === '/build' ? 'page' : undefined}>
							<a href="/">Build</a>
						</li>
						<li aria-current={$page.url.pathname === '/run-node' ? 'page' : undefined}>
							<a href="/">Run a Node</a>
						</li>
					</ul>
				</nav>
			</div>
			<div class="flex flex-col lg:gap-12 gap-4 md:gap-6 sm:px-[50px] px-8 items-center">
				<Label
					className={'md:max-w-[1076px] lg:max-w-full text-center font-orbitron lg:text-[70px] md:text-[60px] text-4xl font-normal sm:leading-[80px] sm:tracking-[1.4px] text-textPrimary'}
					text={appDescription}
				/>
				<Label
					className={'max-w-[1076px] lg:max-w-full text-center font-overpass sm:text-[30px] text-xl font-medium tracking-wide text-textPrimary'}
					text={$_('app-description')}
				/>
			</div>
			<div class="flex sm:gap-9 gap-2 justify-center pb-4">
				<button
					class="items-center sm:px-[30px] sm:py-5 px-3 py-2 rounded-md bg-gradient-to-b to-[#0A204A] from-[#0F1C364D]"
					><Label
						className="text-white text-center font-overpass text-xl font-bold leading-5 tracking-tighter"
						text="Build for Modular"
					/></button
				>
				<button
					class="items-center md:px-[30px] md:py-5 sm:px-3 sm:py-3 rounded-md border-2 border-black"
					><Label
						className="text-textPrimary text-center text-xl font-bold leading-5 tracking-tighter"
						text="Explore"
					/></button
				>
			</div>
		</div>
	</div>
</div>
<Concept />
<div
	class=" p-4 lg:py-[100px] lg:px-16 sm:px-12 pt-10"
	style="background: linear-gradient(to top right, #FCECCF 0%, #D7E5FB 50%) top right / 100% 100% no-repeat, linear-gradient(to top left, #FCECCF 0%, #D7E5FB 50%) top left / 100% 100% no-repeat;
box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);"
>
	<Label
		className={'text-textPrimary text-center font-orbitron lg:text-6xl sm:text-4xl text-2xl font-bold tracking-wider 2xl:max-w-[1517px] 2xl:mx-auto'}
		text={$_('sunrise-features.label')}
	/>
	<div class="flex justify-center pb-[135px]">
		<Label
			className={'w-[892px] text-textPrimary text-center pt-12 font-overpass text-2xl font-medium 2xl:max-w-[1517px] 2xl:mx-auto'}
			text={$_('sunrise-features.description')}
		/>
	</div>
	<Feature />
</div>
<div
	class="mx-auto pb-6 md:pb-10 md:px-10 sm:px-6 pt-5"
	style="background: linear-gradient(to top left, #D7E5FB 0%, #FCECCF 50%) top left / 100% 100% no-repeat, linear-gradient(to top right, #D7E5FB 0%, #FCECCF 50%) top right / 100% 100% no-repeat;"
>
	<div class="text-textPrimary 2xl:max-w-[1517px] 2xl:mx-auto">
		<Label
			className="mx-auto text-center font-orbitron md:text-6xl sm:text-3xl text-2xl font-extrabold tracking-wide pt-5"
			text={$_('sunrise-products.label')}
		/>
		<Label
			className="sm:mt-12 mt-8 text-center font-overpass text-2xl 2xl:text-[40px] font-medium tracking-tighter"
			text={$_('sunrise-products.description')}
		/>
	</div>
	<div
		class="flex justify-center 2xl:justify-between sm:gap-[35px] md:flex-row flex-col px-4 gap-4 mt-[35px] 2xl:max-w-[1517px] 2xl:mx-auto"
	>
		<div
			class="flex flex-col sm:gap-[23px] gap-2 py-5 px-3 2xl:px-5 max-w-[700px] 2xl:max-w-full rounded-[20px] border border-solid border-indigo-500 border-opacity-50"
			style="background: var(--PURPLE-LINEAR, linear-gradient(174deg, #71AFFB 0%, #A134F9 100%))"
		>
			<Label
				className="text-center text-[32px] 2xl:text-[50px] font-extrabold leading-[50px] text-white"
				text={$_('sunrise-products.product-validiums.label')}
			/>
			<img class="w-[138.438px] h-[248px] mx-auto" src={images.validiums} alt="validiums" />
			<Label
				className="text-2xl 2xl:text-4xl font-normal text-white"
				text={$_('sunrise-products.product-validiums.description')}
			/>
		</div>
		<div
			class="flex flex-col gap-[23px] py-5 px-3 2xl:px-5 max-w-[700px] 2xl:max-w-full rounded-[20px] border border-solid border-indigo-500 border-opacity-50"
			style="background: var(--BLUE-LINEAR, linear-gradient(174deg, #71AFFB 0%, #3E34F9 100%)"
		>
			<Label
				className="text-center text-[32px] 2xl:text-[50px] font-extrabold leading-[50px] text-white"
				text={$_('sunrise-products.product-rollups.label')}
			/>
			<img class="w-60 h-60 mx-auto" src={images.rollups} alt="rollups" />
			<Label
				className="text-2xl 2xl:text-4xl font-normal text-white"
				text={$_('sunrise-products.product-rollups.description')}
			/>
		</div>
		<div
			class="flex flex-col gap-[23px] py-5 px-3 max-w-[700px] 2xl:px-5 2xl:max-w-full rounded-[20px] border border-solid border-indigo-500 border-opacity-50"
			style="background: linear-gradient(186deg, #F9348C -64.12%, #A134F9 88.98%)"
		>
			<Label
				className="text-center text-[28px] 2xl:text-[50px] font-extrabold text-white"
				text={$_('sunrise-products.product-pol.label')}
			/>
			<img class="w-60 h-60 mx-auto" src={images.pol} alt="pol" />
			<Label
				className=" text-2xl 2xl:text-4xl font-normal text-white"
				text={$_('sunrise-products.product-pol.description')}
			/>
		</div>
	</div>
</div>

<div
	class="md:py-36 sm:py-20 py-4 lg:px-[60px] md:px-10 text-textPrimary flex sm:flex-row relative justify-center"
	style="background: var(--Sunirse, linear-gradient(to bottom right, #FFC75F 0%, #4988FF 50%) bottom right / 50% 50% no-repeat, linear-gradient(to bottom left, #FFC75F 0%, #4988FF 50%) bottom left / 50% 50% no-repeat, linear-gradient(to top left, #FFC75F 0%, #4988FF 50%) top left / 50% 50% no-repeat, linear-gradient(to top right, #FFC75F 0%, #4988FF 50%) top right / 50% 50% no-repeat);"
>
	<img
		src={images.BodyBG}
		alt="BodyBG"
		class="absolute z-0 w-full h-full object-cover top-0 left-0"
	/>
	<img
		src={images.BodyMask}
		alt="BodyMask"
		class="absolute z-0 w-full h-full opacity-50 object-cover top-0 left-0"
	/>
	<div class="flex gap-6 text-white relative px-4">
		<div class="flex flex-col gap-4">
			<Label
				className="font-orbitron sm:text-6xl 2xl:text-[70px] text-2xl font-extrabold text-white z-30 xl:w-max-[1000px]"
				text={$_('sunrise-mission.label')}
			/>
			<Label
				className=" font-overpass md:text-3xl 2xl:text-5xl font-medium tracking-tight text-white z-30 xl:max-w-[1000px] xl:mx-auto"
				text={$_('sunrise-mission.description')}
			/>
			<div>
				<button class="sm:px-4 sm:py-5 p-2 items-center rounded-md bg-yellow-300 text-textPrimary"
					><Label
						className="text-center font-overpass text-xl 2xl:text-3xl leading-5 tracking-wide font-bold"
						text="Build with Us"
					/></button
				>
			</div>
		</div>

		<img
			class="lg:w-[427.143px] lg:h-[427.143px] sm:w-60 sm:h-60 w-24 h-24 z-30 opacity-40"
			src={images.union}
			alt="union"
		/>
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
		<div class="w-full flex sm:justify-between sm:flex-row flex-col pr-6">
			<div class=" flex flex-col sm:gap-8 gap-3 ibm-plex-sans">
				<Label className="md:text-[30px] 2xl:text-[40px] font-bold" text="Developers" />
				<Label className="md:text-xl 2xl:text-[30px] font-medium" text="Docs" />
				<Label className="md:text-xl 2xl:text-[30px] font-medium" text="GitHub" />
			</div>
			<div class=" flex flex-col sm:gap-8 gap-3 ibm-plex-sans">
				<Label className="md:text-[30px] 2xl:text-[40px] font-bold" text="Services" />
				<Label className="md:text-xl 2xl:text-[30px] font-medium" text="Portal" />
				<Label className="md:text-xl 2xl:text-[30px] font-medium" text="Explorer" />
				<Label className="md:text-xl 2xl:text-[30px] font-medium" text="Community" />
			</div>
			<div class=" flex flex-col sm:gap-8 gap-3 ibm-plex-sans">
				<Label className="md:text-[30px] 2xl:text-[40px] font-bold" text="Information" />
				<Label className="md:text-xl 2xl:text-[30px] font-medium" text="Whitepaper" />
				<Label className="md:text-xl 2xl:text-[30px] font-medium" text="Blog" />
				<Label className="md:text-xl 2xl:text-[30px] font-medium" text="Jobs" />
				<Label className="md:text-xl 2xl:text-[30px] font-medium" text="Press Kit" />
			</div>
			<div class=" flex flex-col sm:gap-8 gap-3 ibm-plex-sans">
				<Label className="md:text-[30px] 2xl:text-[40px] font-bold" text="Legal" />
				<Label className="md:text-xl 2xl:text-[30px] font-medium" text="Terms and Services" />
				<Label className="md:text-xl 2xl:text-[30px] font-medium" text="Privacy Policy" />
			</div>
		</div>
	</div>
	<div
		class="pt-6 px-8 flex justify-between sm:flex-row flex-col gap-1 2xl:max-w-[1517px] 2xl:mx-auto"
	>
		<Label
			className="md:text-2xl 2xl:text-4xl sm:tracking-wider tracking-tighter"
			text="Sunrise © – All rights reserved. 2024"
		/>
		<div class="flex lg:gap-9 md:gap-3 gap-1 pr-5">
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
