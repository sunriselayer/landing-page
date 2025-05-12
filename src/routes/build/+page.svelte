<script lang="ts">
	import { _, addMessages } from 'svelte-i18n';
	import en from '../../i18n/build/en.json';
	import jp from '../../i18n/build/jp.json';
	import Footer from '$lib/sections/footer.svelte';
	import Header from '$lib/sections/header.svelte';
	import { appTitle, deployLink, learnLink } from '../../consts';
	import LinkButton from '$lib/components/link-button.svelte';
	import {
		beacon1,
		beacon2,
		beacon3,
		beacon4,
		deployBeacon,
		deployBeaconSP,
		deployOP,
		deployOPSP,
		deployRollkit,
		deployRollkitSP,
		hero,
		hero_sp,
		learn1,
		learn2
	} from '../../consts/build-image';

	addMessages('en', en);
	addMessages('jp', jp);

	const page = 'build';
</script>

<svelte:head>
	<title>{appTitle}</title>
	<meta name="description" content={appTitle} />
	<meta name="theme-color" content="#050F21" media="(prefers-color-scheme: dark)" />
	<style>
		body {
			background-color: #050f21;
		}
	</style>
</svelte:head>

<main class="w-full bg-[#050F21] md:pb-0 pb-6">
	<Header active={page} />
	<div class="flex flex-col md:gap-y-0">
		<section class="z-20 flex flex-row md:max-h-[660px] overflow-clip relative">
			<div class="flex flex-col md:pl-[10.4vw] md:pt-[8.333vw] p-6 pr-0">
				<h1
					class="font-semibold text-white md:text-[4.375rem] text-[1.5rem] md:leading-[5.385rem] leading-[1.875rem]"
				>
					{@html $_('hero-title')}
				</h1>
				<p
					class="md:text-[1.5rem] text-white text-[0.875rem] md:leading-[1.875rem] leading-[1.125rem] pt-5 md:pb-20 md:pr-[20vw] pr-[22.5vw] -tracking-[0.01em] pb-6"
				>
					{@html $_('hero-description')}
				</p>
				<div class="flex gap-[0.8125rem]">
					<LinkButton className="md:!px-[3.2vw]" text={$_('deploy')} link={deployLink} />
					<LinkButton
						className="md:!px-[3.2vw]"
						text={$_('learn')}
						link={learnLink}
						transparent={true}
					/>
				</div>
			</div>
			<div class="md:w-[32vw] w-[18vw] overflow-clip flex justify-end md:relative">
				<img class="md:hidden absolute h-full top-10" src={hero_sp} alt="" />
				<img class="md:block hidden w-full h-fit absolute md:top-9" src={hero} alt="" />
			</div>
		</section>
		<section class="z-20 flex flex-col md:px-[9.375rem] md:py-20 p-6 pt-20 md:gap-12 gap-6">
			<h1 class="font-semibold text-white md:text-[3rem] md:leading-[3.75rem]">
				{@html $_('learn-title')}
			</h1>
			<div class="flex md:flex-row flex-col md:w-full md:gap-10 gap-3">
				<div class="rounded-content md:flex-[50%] flex-col md:p-10 md:pb-0 p-3 pb-0">
					<h4 class="text-[#FDA60B] md:text-[2rem] text-[0.875rem] md:leading-10 leading-[1.1rem]">
						{@html $_('learn-asset-1.title')}
					</h4>
					<p
						class="md:text-[1rem] text-opacity-80 text-white text-[0.75rem] md:leading-5 leading-[0.9rem] pt-[1.125rem] md:pb-[1.375rem]"
					>
						{@html $_('learn-asset-1.description')}
					</p>
					<div class="flex md:w-full justify-end">
						<img class="md:w-3/5 w-3/5 self-end md:mr-0 mr-[-1rem]" src={learn1} alt="" />
					</div>
				</div>
				<div class="rounded-content md:flex-[50%] flex-col md:p-10 md:pb-0 p-3 pb-0">
					<h4 class="text-[#FDA60B] md:text-[2rem] text-[0.875rem] md:leading-10 leading-[1.1rem]">
						{@html $_('learn-asset-2.title')}
					</h4>
					<p
						class="md:text-[1rem] text-opacity-80 text-white text-[0.75rem] md:leading-5 leading-[0.9rem] pt-[1.125rem] md:pb-[1.375rem]"
					>
						{@html $_('learn-asset-2.description')}
					</p>
					<div class="flex md:w-full md:mt-[-2.5rem] justify-end">
						<img class="md:w-[70%] w-3/5 self-end md:mr-[-2rem]" src={learn2} alt="" />
					</div>
				</div>
			</div>
		</section>
		<section class="z-20 flex flex-col md:px-[9.375rem] md:py-20 p-6 md:gap-12 gap-6">
			<h1 class="font-semibold text-white md:text-[3rem] md:leading-[3.75rem]">
				{@html $_('deploy-title')}
			</h1>
			<div class="flex flex-col">
				<div class="rounded-content flex-col md:p-10 p-6 pb-0">
					<div class="flex md:flex-row flex-col z-50">
						<div>
							<h4
								class="text-[#FDA60B] md:text-[2rem] text-[0.875rem] md:leading-10 leading-[1.1rem]"
							>
								{@html $_('deploy-item-2.title')}
							</h4>
							<p
								class="md:text-[1rem] text-white text-[0.75rem] md:leading-5 leading-[0.9rem] pt-[1.125rem] md:pb-10 md:pr-24"
							>
								{@html $_('deploy-item-2.description')}
							</p>
						</div>
						<div class="flex md:w-[55%] md:h-auto h-28 w-2/5 md:self-start self-end relative">
							<img
								class="self-end absolute md:block hidden top-6 -right-10"
								src={deployRollkit}
								alt=""
							/>
							<img
								class="self-end absolute top-0 -right-6 md:hidden"
								src={deployRollkitSP}
								alt=""
							/>
						</div>
					</div>
					<div
						class="md:flex hidden rounded-lg box-border flex-grow md:flex-row flex-col md:p-10 p-6 md:gap-32 justify-between !bg-black/20 z-0"
					>
						<div>
							<h4
								class="text-[#FDA60B] md:text-[2rem] text-[0.875rem] md:leading-10 leading-[1.1rem]"
							>
								{@html $_('deploy-item-3.title')}
							</h4>
							<p
								class="md:text-[1rem] text-white text-opacity-80 text-[0.75rem] md:leading-5 leading-[0.9rem] py-[1.125rem]"
							>
								{@html $_('deploy-item-3.description')}
							</p>
							<div class="flex flex-col gap-3">
								<p
									class="flex text-white gap-[0.6125rem] items-center md:text-[1rem] text-opacity-80 text-[0.75rem] md:leading-5 leading-[0.9rem]"
								>
									<img class="h-5" src={beacon1} alt="" />
									{@html $_('deploy-item-3.item-1')}
								</p>
								<p
									class="flex text-white gap-[0.6125rem] items-center md:text-[1rem] text-opacity-80 text-[0.75rem] md:leading-5 leading-[0.9rem]"
								>
									<img class="h-5" src={beacon2} alt="" />
									{@html $_('deploy-item-3.item-2')}
								</p>
								<p
									class="flex text-white gap-[0.6125rem] items-center md:text-[1rem] text-opacity-80 text-[0.75rem] md:leading-5 leading-[0.9rem]"
								>
									<img class="h-5" src={beacon3} alt="" />
									{@html $_('deploy-item-3.item-3')}
								</p>
								<p
									class="flex text-white gap-[0.6125rem] items-center md:text-[1rem] text-opacity-80 text-[0.75rem] md:leading-5 leading-[0.9rem]"
								>
									<img class="h-5" src={beacon4} alt="" />
									{@html $_('deploy-item-3.item-4')}
								</p>
							</div>
						</div>
						<div class="flex md:w-2/5 w-2/5 self-end relative">
							<img class="self-end absolute md:-right-20" src={deployBeacon} alt="" />
						</div>
					</div>
				</div>
				<div class="pl-4">
					<div
						class="rounded-content md:!hidden md:flex-row flex-col md:p-10 p-6 md:gap-32 justify-between !rounded-t-none"
					>
						<div>
							<h4
								class="text-[#FDA60B] md:text-[2rem] text-[0.875rem] md:leading-10 leading-[1.1rem]"
							>
								{@html $_('deploy-item-3.title')}
							</h4>
							<p
								class="md:text-[1rem] text-white text-opacity-80 text-[0.75rem] md:leading-5 leading-[0.9rem] py-[1.125rem]"
							>
								{@html $_('deploy-item-3.description')}
							</p>
							<div class="flex flex-col gap-3">
								<p
									class="flex text-white gap-[0.6125rem] items-center md:text-[1rem] text-opacity-80 text-[0.75rem] md:leading-5 leading-[0.9rem]"
								>
									<img class="h-5" src={beacon1} alt="" />
									{@html $_('deploy-item-3.item-1')}
								</p>
								<p
									class="flex text-white gap-[0.6125rem] items-center md:text-[1rem] text-opacity-80 text-[0.75rem] md:leading-5 leading-[0.9rem]"
								>
									<img class="h-5" src={beacon2} alt="" />
									{@html $_('deploy-item-3.item-2')}
								</p>
								<p
									class="flex text-white gap-[0.6125rem] items-center md:text-[1rem] text-opacity-80 text-[0.75rem] md:leading-5 leading-[0.9rem]"
								>
									<img class="h-5" src={beacon3} alt="" />
									{@html $_('deploy-item-3.item-3')}
								</p>
								<p
									class="flex text-white gap-[0.6125rem] items-center md:text-[1rem] text-opacity-80 text-[0.75rem] md:leading-5 leading-[0.9rem]"
								>
									<img class="h-5" src={beacon4} alt="" />
									{@html $_('deploy-item-3.item-4')}
								</p>
							</div>
						</div>
						<div class="flex md:w-2/5 md:h-auto h-28 w-2/5 self-end relative">
							<img class="self-end absolute top-0 -right-6" src={deployBeaconSP} alt="" />
						</div>
					</div>
				</div>
				<div class="rounded-content md:flex-row flex-col md:gap-32 md:mt-12 mt-6 md:pb-0 pb-3">
					<div class="md:p-10 p-6 pb-0">
						<h4
							class="text-[#FDA60B] md:text-[2rem] text-[0.875rem] md:leading-10 leading-[1.1rem]"
						>
							{@html $_('deploy-item-1.title')}
						</h4>
						<p
							class="md:text-[1rem] text-white text-[0.75rem] md:leading-5 leading-[0.9rem] pt-[1.125rem] md:pb-[1.375rem]"
						>
							{@html $_('deploy-item-1.description')}
						</p>
					</div>
					<div class="flex md:w-3/5 md:h-auto h-32 w-2/5 self-end relative">
						<img class="self-end md:block hidden" src={deployOP} alt="" />
						<img class="self-end md:hidden absolute top-0 -right-0" src={deployOPSP} alt="" />
					</div>
				</div>
			</div>
		</section>
	</div>
	<Footer />
</main>

<style>
	.rounded-content {
		display: flex;
		box-sizing: border-box;
		background: linear-gradient(0deg, rgba(0, 0, 0, 0.12), rgba(0, 0, 0, 0.2)),
			radial-gradient(
				112.9% 500.79% at 9.68% 100%,
				rgba(255, 255, 255, 0.08) 0%,
				rgba(255, 255, 255, 0.03) 100%
			);
		backdrop-filter: blur(119px);
		flex-grow: 1;
		border-radius: 8px;
	}
	@media (min-width: 768px) {
		.rounded-content {
			border-radius: 20px;
		}
	}
</style>
