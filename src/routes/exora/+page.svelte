<script lang="ts">
	import { _ } from 'svelte-i18n';
	import {
		build1,
		build1_sp,
		build2,
		build2_sp,
		discord,
		hero1,
		hero1_sp,
		hero2,
		hero2_sp,
		logo,
		logoText,
		plus,
		powered,
		twitter,
		union,
		sunrise
	} from '../../consts/exora-image';

	interface Props {
		active?: string;
	}

	let { active }: Props = $props();

	const menus = [
		{ key: 'build', label: 'build', link: '#build' },
		{ key: 'faq', label: 'faq', link: '#faq' }
	];
</script>

<main class="mx-auto w-full flex flex-col text-white overflow-hidden relative z-20">
	<header
		class="header md:h-[6.111vw] py-[1.6111vw] px-[5.5555vw] flex items-center justify-between bg-black/10 backdrop-blur-[80px] z-50"
	>
		<div class="flex items-center gap-[6px]">
			<img class="md:h-[1.6667vw]" src={logo} alt="" />
			<img class="h-fit" src={logoText} alt="" />
		</div>
		<div class="md:flex hidden">
			<div class="flex gap-[10px] pr-4 items-center justify-between">
				{#each menus as menu}
					<a href={menu.link} class="md:px-4 leading-[150%] md:text-[1.111vw] hover:text-white/70"
						>{@html $_(menu.label)}</a
					>
				{/each}
			</div>
			<div class="border-r border-l border-white/10"></div>
			<div class="pl-4">
				<a
					href="/#"
					class="px-6 py-2 button-border leading-[150%] hover:bg-gradient-to-br hover:from-[#00F6FF] hover:to-[#9b59b6] md:text-[1.111vw]"
					>{@html $_('btn-stake')}</a
				>
			</div>
		</div>

		<details class="dropdown dropdown-end md:hidden">
			<summary
				class="btn btn-outline border-none text-white w-full gap-2 md:w-auto md:px-8 px-0 py-0"
			>
				<span class="material-symbols-outlined">menu</span>
				<span class="hidden md:inline">Menu</span>
			</summary>
			<ul class="p-2 shadow menu dropdown-content bg-[#191837] rounded-box w-max text-white">
				{#each menus as menu}
					<li>
						<a
							class={active === menu.key
								? 'active'
								: 'hover:bg-[#9b59b6] transition-all duration-300'}
							href={menu.link}
						>
							{@html $_(menu.label)}
						</a>
					</li>
				{/each}
			</ul>
		</details>
	</header>
	<div class="w-full relative z-50">
		<div
			class="hero z-50 top-0 left-0 relative flex flex-col justify-center items-center md:gap-y-14 gap-10 md:py-[16.67vw] md:px-[11.12vw] py-[30.53vw] px-[6.1vw]"
		>
			<div class="flex flex-col justify-center items-center md:gap-y-8 gap-y-6 z-10">
				<div
					class="flex flex-row justify-center items-center leading-[1.5] font-medium tracking-[0.1em] opacity-60 md:text-[1.111vw] text-[3.05vw]"
				>
					{@html $_('built-in-1')}
					<img class="h-[1.5em] w-auto mx-[0.5em] mb-[0.2em]" alt="sunrise" src={sunrise} />
					{@html $_('built-in-2')}
				</div>
				<h4
					class="text-white md:text-[5.5vw] text-[8.14vw] tracking-[-0.5px] leading-[150%] font-medium"
				>
					{@html $_('hero-title')}
				</h4>
				<div
					class="text-white/80 leading-[150%] md:w-[38.2vw] w-[83.96vw] text-center md:text-[1.111vw] text-[3.56vw]"
				>
					{@html $_('hero-desc')}
				</div>
			</div>
			<div class="flex flex-col gap-6 justify-center items-center z-10">
				<div class="grid grid-cols-2 justify-evenly items-center">
					<div
						class="font-medium text-white/80 md:text-[1.11vw] text-[3.05vw] flex justify-end items-center gap-5 border-r border-white/10 pr-6"
					>
						{@html $_('apr')}
						<span class="md:text-[2.2vw] text-[3.56vw] tracking-[2%] text-white md:pr-[2.43vw]"
							>7%</span
						>
					</div>
					<div
						class="font-medium text-white/80 md:text-[1.11vw] text-[3.05vw] flex justify-center items-center gap-5 border-l border-white/10 pl-6"
					>
						{@html $_('tvl')}
						<span class="md:text-[2.2vw] text-[3.56vw] tracking-[2%] text-white">$1,613,822</span>
					</div>
				</div>
				<div class="text-center">
					<a
						href="/#"
						class="px-6 py-2 rounded-full bg-gradient-to-tr from-[#00F6FF] to-[#9b59b6] leading-[150%] hover:from-[#0D1A38] hover:to-[#25205E] hover-button-border"
						>{@html $_('btn-stake')}</a
					>
				</div>
			</div>
			<div class="absolute top-0 left-0 w-full h-full z-0">
				<img class="md:block hidden absolute left-0 top-0 md:h-[33.64vw]" src={hero1} alt="" />
				<img class="md:block hidden absolute right-0 bottom-0 md:h-[38.627vw]" src={hero2} alt="" />
				<img class="md:hidden block absolute left-0 top-0 md:h-[33.64vw]" src={hero1_sp} alt="" />
				<img
					class="md:hidden block absolute right-0 bottom-0 md:h-[38.627vw]"
					src={hero2_sp}
					alt=""
				/>
			</div>
		</div>
		<div
			class="earn z-50 top-0 left-0 relative flex md:flex-row flex-col justify-center gap-14 md:py-[16.67vw] md:px-[11.12vw] px-[6.1vw] py-[20.35vw]"
		>
			<div
				class="flex flex-col md:justify-start justify-center md:items-start items-center md:gap-[2.77vw] gap-y-[6.1vw]"
			>
				<div
					class="leading-[120%] md:text-[4.44vw] text-[8.14vw] font-medium md:text-start text-center tracking-[-0.5px] md:pr-[4.5vw]"
				>
					{@html $_('earn')}
				</div>
				<a
					href="/#"
					class="px-6 py-2 button-border-blue leading-[150%] font-normal hover:bg-gradient-to-br hover:from-[#00F6FF] hover:to-[#9b59b6]"
					>{@html $_('btn-stake')}</a
				>
			</div>
			<div class="flex flex-col flex-1 gap-4">
				<div
					class="text-center border border-white/20 font-medium leading-[150%] md:text-[1.667vw] text-[6.1vw] py-2"
				>
					{@html $_('symbol')}
				</div>
				<div class="flex md:flex-row flex-col gap-4">
					<div
						class="border border-white/20 text-white/80 leading-[150%] md:p-[1.66667vw] md:min-h-[17.7vw] min-h-[50.8vw] flex flex-col justify-between flex-1 md:text-[1.111vw] p-[6.1vw] text-[3.56vw]"
					>
						<div>
							<img class="md:h-[3.75vw]" src={union} alt="" />
						</div>
						{@html $_('liquid')}
					</div>
					<div
						class="border border-white/20 text-white/80 leading-[150%] md:p-[1.66667vw] md:min-h-[17.7vw] min-h-[50.8vw] flex flex-col justify-between flex-1 md:text-[1.111vw] p-[6.1vw] text-[3.56vw]"
					>
						<div>
							<img class="md:h-[3.75vw]" src={union} alt="" />
						</div>
						{@html $_('backed')}
					</div>
					<div
						class="border border-white/20 text-white/80 leading-[150%] md:p-[1.66667vw] md:min-h-[17.7vw] min-h-[50.8vw] flex flex-col justify-between flex-1 md:text-[1.111vw] p-[6.1vw] text-[3.56vw]"
					>
						<div>
							<img class="md:h-[3.75vw]" src={union} alt="" />
						</div>
						{@html $_('earn-reward')}
					</div>
				</div>
			</div>
		</div>
	</div>
	<div
		id="build"
		class="build w-full md:py-[5.5vw] md:px-[11.11vw] py-[30.53vw] px-[6.1vw] relative backdrop-blur-[200px] z-50"
		style="background: linear-gradient(95.58deg, rgba(1, 22, 37, 0.6) 7.76%, rgba(1, 22, 37, 0.36) 113.13%);"
	>
		<div class="flex flex-col gap-8 items-center justify-center z-10">
			<span class="font-medium leading-[150%] tracking-[0.1em] text-white"
				>{@html $_('build-title')}</span
			>
			<span class="leading-[150%] text-white/80 md:w-[23.89vw] text-center"
				>{@html $_('build-desc')}</span
			>
			<a
				href="/#"
				class="px-6 py-2 button-border-blue leading-[150%] hover:bg-gradient-to-br hover:from-[#00F6FF] hover:to-[#9b59b6] md:text-[1.111vw] z-20"
				>{@html $_('view-docs')}</a
			>
		</div>
		<div class="absolute top-0 left-0 w-full h-full">
			<img class="absolute right-0 top-[-50%] h-[32.684vw] md:block hidden" src={build1} alt="" />
			<img class="absolute left-0 bottom-[-80%] h-[45.726vw] md:block hidden" src={build2} alt="" />
			<img class="absolute right-0 top-[-39%] h-[83.8vw] md:hidden" src={build1_sp} alt="" />
			<img class="absolute left-0 bottom-[-35%] h-[87.2vw] md:hidden" src={build2_sp} alt="" />
		</div>
	</div>
	<div class="w-fullrelative z-50">
		<div
			class="powerd-by w-full md:pt-[13.89vw] md:pb-[9.5vw] md:px-[11.11vw] justify-center items-center flex flex-col md:gap-14 pb-[19.53vw] px-[6.1vw] pt-[45.8vw] gap-10"
		>
			<div class="flex flex-col md:gap-8 gap-6 justify-center items-center">
				<h4
					class="text-white md:text-[4.44vw] text-[32px] leading-[120%] font-medium tracking-[-0.5px]"
				>
					{@html $_('powered-by')}
				</h4>
				<span class="text-white/80 leading-[150%] md:text-[1.111vw] text-sm"
					>{@html $_('powered-desciption')}</span
				>
				<a
					href="/#"
					class="px-6 py-2 button-border-blue leading-[150%] hover:bg-gradient-to-br hover:from-[#00F6FF] hover:to-[#9b59b6] md:text-[1.111vw]"
					>{@html $_('learn-more')}</a
				>
			</div>
			<img class="md:w-[25.97vw] md:p-0 px-6" src={powered} alt="" />
		</div>
		<div
			id="faq"
			class="faq w-full flex flex-col md:py-[5.55vw] md:px-[27.78vw] py-[30.53vw] px-[6.1vw] justify-center items-center gap-6 z-50"
		>
			<span class="font-medium leading-[150%] tracking-[0.1em] md:text-[1.111vw]"
				>{@html $_('faq')}</span
			>
			<div class="flex flex-col gap-4">
				<div
					class="border border-white/20 leading-[150%] md:p-[1.66667vw] p-[6.1vw] flex flex-col justify-between flex-1 gap-4 backdrop-blur-[20px]"
				>
					<div class="flex flex-row gap-x-4 text-white md:text-[1.111vw]">
						<img class="" src={plus} alt="" />
						{@html $_('staking')}
					</div>
					<span class="text-white/80 md:text-[1.111vw] text-sm">
						{@html $_('staking-desc')}
					</span>
				</div>
				<div
					class="border border-white/20 leading-[150%] md:p-[1.66667vw] p-[6.1vw] flex flex-col justify-between flex-1 gap-4 backdrop-blur-[20px]"
				>
					<div class="flex flex-row gap-x-4 text-white md:text-[1.111vw]">
						<img class="" src={plus} alt="" />
						{@html $_('how-to-stake')}
					</div>
					<span class="text-white/80 md:text-[1.111vw] text-sm">
						{@html $_('how-to-stake-desc')}
					</span>
				</div>
				<div
					class="border border-white/20 leading-[150%] md:p-[1.66667vw] p-[6.1vw] flex flex-col justify-between flex-1 gap-4 backdrop-blur-[20px]"
				>
					<div class="flex flex-row gap-x-4 text-white md:text-[1.111vw]">
						<img class="" src={plus} alt="" />
						{@html $_('fee')}
					</div>
					<span class="text-white/80 md:text-[1.111vw] text-sm">
						{@html $_('fee-desc')}
					</span>
				</div>
				<div
					class="border border-white/20 leading-[150%] md:p-[1.66667vw] p-[6.1vw] flex flex-col justify-between flex-1 gap-4 backdrop-blur-[20px]"
				>
					<div class="flex flex-row gap-x-4 text-white md:text-[1.111vw]">
						<img class="" src={plus} alt="" />
						{@html $_('what-is-rise')}
					</div>
					<span class="text-white/80 md:text-[1.111vw] text-sm">
						{@html $_('what-is-rise-desc')}
					</span>
				</div>
				<div
					class="border border-white/20 leading-[150%] md:p-[1.66667vw] p-[6.1vw] flex flex-col justify-between flex-1 gap-4 backdrop-blur-[20px]"
				>
					<div class="flex flex-row gap-x-4 text-white md:text-[1.111vw]">
						<img class="" src={plus} alt="" />
						{@html $_('what-is-lsts')}
					</div>
					<span class="text-white/80 md:text-[1.111vw] text-sm">
						{@html $_('what-is-lsts-desc')}
					</span>
				</div>
				<div
					class="border border-white/20 leading-[150%] md:p-[1.66667vw] p-[6.1vw] flex flex-col justify-between flex-1 gap-4 backdrop-blur-[20px]"
				>
					<div class="flex flex-row gap-x-4 text-white md:text-[1.111vw]">
						<img class="" src={plus} alt="" />
						{@html $_('l1-l2')}
					</div>
					<span class="text-white/80 md:text-[1.111vw] text-sm">
						{@html $_('l1-l2-desc')}
					</span>
				</div>
			</div>
		</div>
	</div>
	<div
		class="footer md:h-[5vw] md:py-[1.6667vw] md:px-[5.555vw] px-[6.1vw] py-[5.089vw] flex justify-between items-center bg-black/10 backdrop-blur-[80px] z-50"
	>
		<div class="flex justify-center items-center">
			<img class="md:h-[1.6667vw] h-[6.1vw]" src={logo} alt="" />
			<img class="h-fit" src={logoText} alt="" />
		</div>
		<div class="md:flex gap-[10px] pr-4 hidden">
			<a href="/#" class="md:px-4 leading-[150%] md:text-[1.111vw] hover:text-white/70">Docs</a>
			<a href="/#" class="md:px-4 leading-[150%] md:text-[1.111vw] hover:text-white/70">Blog</a>
		</div>
		<div class="flex gap-6">
			<a href="https://x.com/" class="hover:animate-pulse" target="_blank">
				<img
					class="md:size-[1.6667vw] transition-transform duration-300 hover:scale-110"
					src={twitter}
					alt=""
				/>
			</a>
			<a href="https://discord.gg/" class="hover:animate-pulse" target="_blank">
				<img
					class="md:size-[1.6667vw] transition-transform duration-300 hover:scale-110"
					src={discord}
					alt=""
				/>
			</a>
		</div>
	</div>
	<div class="absolute top-0 left-0 w-full h-full z-0 overflow-hidden opacity-75">
		<div class="md:block hidden elipse-1 rounded-full z-0"></div>
		<div class="md:block hidden elipse-2 rounded-full z-0"></div>
		<div class="md:block hidden elipse-3 rounded-full z-0"></div>
		<div class="md:block hidden elipse-4 rounded-full z-0"></div>
		<div class="md:hidden sp-elipse-1 rounded-full z-0"></div>
		<div class="md:hidden sp-elipse-2 rounded-full z-0"></div>
		<div class="md:hidden sp-elipse-3 rounded-full z-0"></div>
		<div class="md:hidden sp-elipse-4 rounded-full z-0"></div>
	</div>
</main>

<style>
	main {
		background-image: url(../../lib/images/exora/BG.png),
			linear-gradient(177.74deg, #011625 1.99%, #893eff 98.24%);
		background-blend-mode: overlay;
	}
	.powerd-by {
		background-image: url(../../lib/images/exora/powerd-transparent_sp.png);
		background-size: contain;
	}
	@media (min-width: 768px) {
		.powerd-by {
			background-image: url(../../lib/images/exora/powerd-transparent.png);
			background-size: contain;
		}
	}
	.elipse-1 {
		position: absolute;
		width: 70.625vw;
		height: 73.88vw;
		left: calc(50% - 70.625vw / 2 - 14.6875vw);
		top: -8.05vw;

		background: radial-gradient(
			99.8% 149.35% at 98.88% 56.74%,
			rgba(1, 22, 37, 0) 0%,
			#011625 100%
		);
		filter: blur(149.5px);
	}
	.elipse-2 {
		position: absolute;
		width: 74.375vw;
		height: 77.94vw;
		left: calc(50% - 74.375vw / 2 + 24.96vw);
		top: -13.68vw;

		background: radial-gradient(
			99.8% 149.35% at 98.88% 56.74%,
			rgba(1, 22, 37, 0) 0%,
			#011625 100%
		);
		filter: blur(100px);
	}
	.elipse-3 {
		position: absolute;
		width: 124.58vw;
		height: 964px;
		left: -20.13vw;
		bottom: calc(1687px * 0.85);

		background: radial-gradient(
			99.8% 149.35% at 98.88% 56.74%,
			rgba(1, 22, 37, 0) 0%,
			#011625 100%
		);
		transform: matrix(-1, 0, 0, 1, 0, 0);
		filter: blur(149.5px);
	}
	.elipse-4 {
		position: absolute;
		width: 172vw;
		height: 1687px;
		left: -26.527vw;
		bottom: -7.01389vw;

		background: radial-gradient(
			69.03% 115.5% at 100.89% 2.37%,
			rgba(1, 22, 37, 0) 0%,
			#011625 100%
		);
		filter: blur(149.5px);
	}
	.sp-elipse-1 {
		position: absolute;
		width: 102.5vw;
		height: 107.379vw;
		right: 10.178vw;
		top: 1px;

		background: radial-gradient(
			99.8% 149.35% at 98.88% 56.74%,
			rgba(1, 22, 37, 0) 0%,
			#011625 100%
		);
		filter: blur(34.825px);
	}
	.sp-elipse-2 {
		position: absolute;
		width: 108.14vw;
		height: 112.977vw;
		right: -50.127vw;
		top: -7.888vw;

		background: radial-gradient(
			99.8% 149.35% at 98.88% 56.74%,
			rgba(1, 22, 37, 0) 0%,
			#011625 100%
		);
		filter: blur(10.5px);
	}
	.sp-elipse-3 {
		position: absolute;
		width: 224.427vw;
		height: 203.56vw;
		right: -45vw;
		top: 542.49vw;

		background: radial-gradient(
			99.8% 149.35% at 98.88% 56.74%,
			rgba(1, 22, 37, 0) 0%,
			#011625 100%
		);
		filter: blur(79.6px);
		transform: matrix(-1, 0, 0, 1, 0, 0);
	}
	.sp-elipse-4 {
		position: absolute;
		width: 327.9898vw;
		height: 399.745vw;
		left: -118.575vw;
		bottom: 13vw;

		background: radial-gradient(
			69.03% 115.5% at 100.89% 2.37%,
			rgba(1, 22, 37, 0) 0%,
			#011625 100%
		);
		filter: blur(99.75px);
	}
</style>
