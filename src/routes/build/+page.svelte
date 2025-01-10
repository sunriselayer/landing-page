<script lang="ts">
	import { _ } from 'svelte-i18n';
	import Footer from '$lib/sections/Footer.svelte';
	import Header from '$lib/sections/Header.svelte';
	import { appTitle } from '../../consts';
	import * as images from '../../consts/images';

	const builds = Array.from({ length: 3 }).map((_, i) => {
		return {
			index: i,
			label: `build.build-${i + 1}.title`,
			description: `build.build-${i + 1}.description`,
			imageSrc: (images as Record<string, string>)[`build${i + 1}`]
		};
	});

	const page = 'build';
</script>

<svelte:head>
	<title>{appTitle}</title>
	<meta name="description" content={appTitle} />
	<meta name="theme-color" content="#010E25" media="(prefers-color-scheme: dark)" />
	<style>
		body {
			background-color: #010e25;
		}
	</style>
</svelte:head>

<main class="max-w-[1440px] mx-auto w-full">
	<Header active={page} />
	<div class="flex flex-col pt-20 gap-10">
		<div class="flex flex-col max-w-[44.875rem] mx-auto text-white text-center gap-[1.25rem]">
			<h1 class="font-semibold md:text-[3rem] md:leading-[3.7125rem]">
				{@html $_('build.question')}
			</h1>
			<p class="md:text-[1.5rem] md:leading-[1.875rem] px-[6.125rem]">
				{@html $_('build.question-description')}
			</p>
		</div>
		<div class="flex md:flex-row flex-col max-w-[71.25rem] mx-auto gap-[2rem]">
			{#each builds as build}
				<div class="flex flex-col flex-1 build-box p-10 gap-10 rounded-2xl">
					<img class="w-[3.25rem] h-[3.25rem]" src={build.imageSrc} alt="" />
					<div class="flex flex-col gap-10">
						<h2 class="md:text-[1.5rem] md:leading-[1.875rem] font-bold text-white">
							{@html $_(build.label)}
						</h2>
						<p class="md:text-[1rem] md:leading-5 text-white text-opacity-55">
							{@html $_(build.description)}
						</p>
					</div>
				</div>
			{/each}
		</div>
	</div>
	<Footer />
</main>

<style>
	.build-box {
		background: radial-gradient(
				446.85% 704.3% at 9.68% 100%,
				rgba(255, 255, 255, 0.065) 0%,
				rgba(255, 255, 255, 0.0325) 100%
			)
			/* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
		border: 1px solid;

		border-image-source: linear-gradient(
			164.71deg,
			rgba(102, 102, 102, 0.05) 16.81%,
			rgba(102, 102, 102, 0.5) 83.19%
		);
	}
</style>
