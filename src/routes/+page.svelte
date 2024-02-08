<script lang="ts">
	import { _, locale } from 'svelte-i18n';
	import Label from '$lib/components/Label.svelte';
	import logo from '$lib/images/icon.svg';
	import { appDescription } from '../consts';
	import { appTitle } from '../consts';
	import Feature from '$lib/components/Feature.svelte';
	import { page } from '$app/stores';
	import monolithic from '../lib/images/monolithic.svg';
	import modular from '../lib/images/modular.svg';
	import build from '../lib/images/build.svg';
	import value from '../lib/images/value.svg';
	import validiums from '../lib/images/validiums.svg';
	import rollups from '../lib/images/rollups.svg';
	import pol from '../lib/images/pol.svg';
	import union from '../lib/images/Union.svg';
	import sunrise from '../lib/images/SUNRISE.svg';
	import discord from '../lib/images/discord.svg';
	import twitter from '../lib/images/twitter.svg';
	import linkedin from '../lib/images/linkedin.svg';
	import youtube from '../lib/images/youtube.svg';
	import linktree from '../lib/images/linktree.svg';
	import TopBG from '../lib/images/TopBG.png';
	import TopMask from '../lib/images/TopMask.png';
	import BodyMask from '../lib/images/Mask group.png';
	import BodyBG from '../lib/images/Rectangle 9.png';
	import { newLocale } from '../lib/stores/i18nStore';

	let isEnglish = true;

	function toggleLanguage() {
		isEnglish = !isEnglish;
		newLocale.set(isEnglish ? 'en' : 'jp');
		locale.set(isEnglish ? 'en' : 'jp');
	}
</script>

<svelte:head>
	<title>SunRise</title>
	<meta name="description" content="SunRise" />
</svelte:head>

<div class="flex justify-center relative" style="">
	<img src={TopBG} alt="TopBG" class="absolute z-0 h-full w-full object-cover" />
	<img src={TopMask} alt="TopBG" class="absolute z-0 opacity-95 h-full w-full object-cover" />
	<div class="z-10">
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
								<span class={isEnglish ? 'fi fi-jp' : 'fi fi-gb'}></span>
								{isEnglish ? 'Japanese' : 'English'}
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
					className={'max-w-[1076px] text-center font-orbitron text-[70px] font-normal leading-[80px] tracking-[1.4px] text-textPrimary'}
					text={appDescription}
				/>
				<Label
					className={'max-w-[1076px] text-center font-overpass text-[30px] font-medium text-base tracking-wide text-textPrimary'}
					text={$_('app-description')}
				/>
			</div>
			<div class="flex gap-9 justify-center pb-16">
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
<div class="relative">
	<img src={BodyBG} alt="BodyBG" class="absolute z-0 w-full h-full object-cover" />
	<img src={BodyMask} alt="BodyMask" class="absolute z-0 opacity-50 w-full h-full object-cover" />
	<div class="px-[50px] w-full flex flex-col justify-center relative">
		<div>
			<div class="flex flex-col justify-center pt-[60px] pb-16">
				<Label
					className="text-center text-white font-orbitron text-6xl font-bold leading-[80px] tracking-wide"
					text={$_('sunrise-question')}
				/>
				<Label
					className="text-center text-white font-overpass text-2xl font-medium tracking-tighter"
					text={$_('sunrise-definition')}
				/>
			</div>
		</div>
		<div
			class="flex flex-wrap gap-y-9 mx-auto justify-between pb-16"
			style="bottom right / 50% 50% no-repeat, linear-gradient(to bottom left, #FFC75F 0%, #4988FF 50%) bottom left / 50% 50% no-repeat, linear-gradient(to top left, #FFC75F 0%, #4988FF 50%) top left / 50% 50% no-repeat, linear-gradient(to top right, #FFC75F 0%, #4988FF 50%) top right / 50% 50% no-repeat)"
		>
			<div
				class="w-[49.5%] flex flex-col gap-[23px] px-5 py-[30px] rounded-[20px]"
				style="background: var(--Dark, linear-gradient(180deg, rgba(15, 28, 54, 0.30) 0%, #0A204A 100%))"
			>
				<Label className="font-orbitron text-4xl font-extrabold text-white" text={'01'} />
				<Label
					className="font-orbitron text-4xl font-extrabold text-white"
					text={$_('sunrise-01.label')}
				/>
				<Label
					className="font-sans text-2xl font-normal text-white"
					text={$_('sunrise-01.description')}
				/>
				<img class="w-[70%] mx-auto" src={monolithic} alt="monolithic" />
			</div>
			<div
				class="w-[49.5%] flex flex-col gap-[23px] px-5 py-[30px] bg-gradient-to-b from-[rgba(15,28,54,0.30)] to-Blue-dark rounded-[20px]"
				style="background: var(--Dark, linear-gradient(180deg, rgba(15, 28, 54, 0.30) 0%, #0A204A 100%))"
			>
				<Label className="font-orbitron text-4xl font-extrabold text-white" text={'02'} />
				<Label
					className="font-orbitron text-4xl font-extrabold text-white"
					text={$_('sunrise-02.label')}
				/>
				<Label
					className="font-sans text-2xl font-normal text-white"
					text={$_('sunrise-02.description')}
				/>
				<img class="w-[70%] mx-auto" src={modular} alt="modular" />
			</div>
			<div
				class="w-[49.5%] flex flex-col gap-[23px] px-5 py-[30px] bg-gradient-to-b from-[rgba(15,28,54,0.30)] to-Blue-dark rounded-[20px]"
				style="background: var(--Dark, linear-gradient(180deg, rgba(15, 28, 54, 0.30) 0%, #0A204A 100%))"
			>
				<Label className="font-orbitron text-4xl font-extrabold text-white" text={'03'} />
				<Label
					className="font-orbitron text-4xl font-extrabold text-white"
					text={$_('sunrise-03.label')}
				/>
				<Label
					className="font-sans text-2xl font-normal text-white"
					text={$_('sunrise-03.description')}
				/>
				<img class="w-[70%] mx-auto" src={build} alt="build" />
			</div>
			<div
				class="w-[49.5%] flex flex-col gap-[23px] px-5 py-[30px] bg-gradient-to-b from-[rgba(15,28,54,0.30)] to-Blue-dark, rounded-[20px]"
				style="background: var(--Dark, linear-gradient(180deg, rgba(15, 28, 54, 0.30) 0%, #0A204A 100%));"
			>
				<Label className="font-orbitron text-4xl font-extrabold text-white" text={'04'} />
				<Label
					className="font-orbitron text-4xl font-extrabold text-white"
					text={$_('sunrise-04.label')}
				/>
				<Label
					className="font-sans text-2xl font-normal text-white"
					text={$_('sunrise-04.description')}
				/>
				<img class="w-[70%] mx-auto" src={value} alt="value" />
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
<div
	class="p-[100px] w-full"
	style="background: linear-gradient(to bottom right, #D7E5FB 0%, #FCECCF 50%) bottom right / 50% 50% no-repeat, linear-gradient(to bottom left, #D7E5FB 0%, #FCECCF 50%) bottom left / 50% 50% no-repeat, linear-gradient(to top left, #D7E5FB 0%, #FCECCF 50%) top left / 50% 50% no-repeat, linear-gradient(to top right, #D7E5FB 0%, #FCECCF 50%) top right / 50% 50% no-repeat;"
>
	<div class="text-textPrimary">
		<Label
			className="mx-auto text-center font-orbitron text-6xl font-extrabold tracking-wide"
			text={$_('sunrise-products.label')}
		/>
		<Label
			className="mt-12 text-center font-overpass text-2xl font-medium tracking-tighter"
			text={$_('sunrise-products.description')}
		/>
	</div>
	<div class="flex gap-[35px] text-white mt-[35px]">
		<div
			class="flex flex-col gap-[23px] py-5 px-3 rounded-[20px] border border-solid border-indigo-500 border-opacity-50"
			style="background: var(--PURPLE-LINEAR, linear-gradient(174deg, #71AFFB 0%, #A134F9 100%))"
		>
			<Label
				className="text-center text-[32px] font-extrabold leading-[50px]"
				text={$_('sunrise-products.product-validiums.label')}
			/>
			<img class="w-[138.438px] h-[248px] mx-auto" src={validiums} alt="validiums" />
			<Label
				className=" text-2xl font-normal"
				text={$_('sunrise-products.product-validiums.description')}
			/>
		</div>
		<div
			class="flex flex-col gap-[23px] py-5 px-3 rounded-[20px] border border-solid border-indigo-500 border-opacity-50"
			style="background: var(--BLUE-LINEAR, linear-gradient(174deg, #71AFFB 0%, #3E34F9 100%)"
		>
			<Label
				className="text-center text-[32px] font-extrabold leading-[50px]"
				text={$_('sunrise-products.product-rollups.label')}
			/>
			<img class="w-60 h-60 mx-auto" src={rollups} alt="rollups" />
			<Label
				className="text-2xl font-normal"
				text={$_('sunrise-products.product-rollups.description')}
			/>
		</div>
		<div
			class="flex flex-col gap-[23px] py-5 px-3 rounded-[20px] border border-solid border-indigo-500 border-opacity-50"
			style="background: linear-gradient(186deg, #F9348C -64.12%, #A134F9 88.98%)"
		>
			<Label
				className="text-center text-[28px] font-extrabold"
				text={$_('sunrise-products.product-pol.label')}
			/>
			<img class="w-60 h-60 mx-auto" src={pol} alt="pol" />
			<Label
				className=" text-2xl font-normal"
				text={$_('sunrise-products.product-pol.description')}
			/>
		</div>
	</div>
</div>

<div
	class="py-[190px] pl-32 text-textPrimary flex gap-60 relative"
	style="background: var(--Sunirse, linear-gradient(to bottom right, #FFC75F 0%, #4988FF 50%) bottom right / 50% 50% no-repeat, linear-gradient(to bottom left, #FFC75F 0%, #4988FF 50%) bottom left / 50% 50% no-repeat, linear-gradient(to top left, #FFC75F 0%, #4988FF 50%) top left / 50% 50% no-repeat, linear-gradient(to top right, #FFC75F 0%, #4988FF 50%) top right / 50% 50% no-repeat);"
>
	<img src={BodyBG} alt="BodyBG" class="absolute z-0 w-full h-full object-cover top-0 left-0" />
	<img
		src={BodyMask}
		alt="BodyMask"
		class="absolute z-0 w-full h-full opacity-50 object-cover top-0 left-0"
	/>
	<div class="max-w-[688px] flex flex-col gap-6 text-white relative">
		<Label
			className="font-orbitron text-6xl font-extrabold text-white"
			text={$_('sunrise-vision.label')}
		/>
		<Label
			className="max-w-[688px] font-overpass text-3xl font-medium tracking-tight text-white"
			text={$_('sunrise-vision.description')}
		/>
		<div>
			<button class="px-4 py-5 items-center rounded-md bg-yellow-300 text-textPrimary"
				><Label
					className="text-center font-overpass text-xl leading-5 tracking-wide font-bold"
					text="Build with Us"
				/></button
			>
		</div>
	</div>
	<img class="w-[427.143px] h-[427.143px] z-30 pr-10" src={union} alt="union" />
</div>
<div class="px-[100px] pt-[84px] pb-9">
	<div class="flex gap-44 pb-[114px]">
		<div class="flex justify-between items-start">
			<div class="flex gap-[7.5px]">
				<img src={logo} alt="logo" />
				<img src={sunrise} alt="sunrise" />
			</div>
		</div>
		<div class="w-full justify-between flex font-ibm-plex-sans">
			<div class=" flex flex-col gap-8">
				<Label className="text-[30px] font-bold" text="Developers" />
				<Label className="text-xl font-medium" text="Docs" />
				<Label className="text-xl font-medium" text="GitHub" />
			</div>
			<div class=" flex flex-col gap-8">
				<Label className="text-[30px] font-bold" text="Services" />
				<Label className="text-xl font-medium" text="Portal" />
				<Label className="text-xl font-medium" text="Explorer" />
				<Label className="text-xl font-medium" text="Community" />
			</div>
			<div class=" flex flex-col gap-8">
				<Label className="text-[30px] font-bold" text="Information" />
				<Label className="text-xl font-medium" text="Whitepaper" />
				<Label className="text-xl font-medium" text="Blog" />
				<Label className="text-xl font-medium" text="Jobs" />
				<Label className="text-xl font-medium" text="Press Kit" />
			</div>
			<div class=" flex flex-col gap-8">
				<Label className="text-[30px] font-bold" text="Legal" />
				<Label className="text-xl font-medium" text="Terms and Services" />
				<Label className="text-xl font-medium" text="Privacy Policy" />
			</div>
		</div>
	</div>
	<div class="pt-6 flex justify-between">
		<Label className="text-xl tracking-wider" text="Sunrise © – All rights reserved. 2024" />
		<div class="flex gap-9">
			<img src={discord} alt="discord" />
			<img src={twitter} alt="twitter" />
			<img src={linkedin} alt="linkedin" />
			<img src={youtube} alt="youtube" />
			<img src={linktree} alt="linktree" />
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
