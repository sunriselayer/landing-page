<script lang="ts">
	import { _ } from 'svelte-i18n';
	import * as images from '../../../consts/images';
</script>

<main class="lg:w-[851px] w-full md:mx-auto">
	<section class="flex flex-col gap-10 md:py-[7.5rem] md:px-0 md:w-[600px] mx-auto px-5 py-12">
		<div class="flex flex-col justify-center items-center mx-auto">
			<h2
				class="font-bold text-[#183973] md:text-[3.125rem] text-[2rem] text-center tracking-wider leading-none pt-6 md:pb-[0.625rem]"
			>
				{@html $_('community')}
			</h2>
		</div>
		<div class="flex md:flex-row justify-between flex-col md:gap-[1.875rem] gap-2">
			<p
				class="flex flex-col w-full normal-text md:text-base text-sm leading-[0.75rem] rounded-box-custom py-10 px-6 text-center gap-6"
			>
				<b class="highlight-text font-eudoxus md:text-[2.125rem] text-[1.5rem] leading-none">
					{@html $_(`twitter.title`)}
				</b>
				{@html $_(`twitter.label`)}
			</p>
			<p
				class="flex flex-col w-full normal-text md:text-base text-sm leading-[0.75rem] rounded-box-custom py-10 px-6 text-center gap-6"
			>
				<b class="highlight-text font-eudoxus md:text-[2.125rem] text-[1.5rem] leading-none">
					{@html $_(`discord.title`)}
				</b>
				{@html $_(`discord.label`)}
			</p>
		</div>
		<div class="flex flex-row justify-center md:gap-[0.8rem] gap-4">
			<a
				href="/#"
				class="uppercase hover:opacity-60 cursor-pointer text-white bg-gradient-to-r py-4 px-5 rounded-2xl from-[#FF9104] to-[#FFAA17] shadow-[0px_4px_5px_0px_#00000026]"
			>
				{@html $_(`twitter.btn`)}
			</a>
			<a
				href="/#"
				class="uppercase hover:opacity-60 cursor-pointer text-white bg-gradient-to-r py-4 px-5 rounded-2xl from-[#FF9104] to-[#FFAA17] shadow-[0px_4px_5px_0px_#00000026]"
			>
				{@html $_(`discord.btn`)}
			</a>
		</div>
	</section>
	<section class="flex flex-col gap-10 md:py-[7.5rem] md:px-0 px-5 py-12">
		<div class="flex flex-col justify-center items-center mx-auto">
			<img class="h-full" src={images.full_logo} alt="sunrise" />
			<h2
				class="normal-text font-bold md:text-[3.125rem] text-[2rem] text-center tracking-wider leading-none py-6"
			>
				{@html $_('join-sunrise')}
			</h2>
			<p class="normal-text md:text-[1.25rem] leading-6 md:pb-[3.125rem] pb-6 text-center">
				{@html $_('join-sunrise-desc')}
			</p>
			<a
				href="/#"
				class="hover:opacity-60 bg-gradient-to-r from-[#003F92] to-[#0163D3] md:from-[#003F92] md:to-[#0163D3] shadow-[#014093] border-[#0162D3] border text-white uppercase tracking-wider md:px-5 md:py-4 rounded-2xl md:text-[1.25rem] text-lg py-3 px-4 leading-6 cursor-pointer shadow-[0px_4px_5px_0px_#00000026]"
			>
				{@html $_('join-sunrise-button')}
			</a>
		</div>
	</section>
	<section
		class="z-20 mx-auto gap-6 md:py-[7.5rem] md:px-0 text-base-100 lg:w-[852px] w-[calc(100vw-2.5rem)] px-5 py-12"
	>
		<h2
			class="normal-text font-bold md:text-[1.25rem] text-[2rem] md:leading-none leading-[1.3125rem] pb-6"
		>
			{@html $_('glosarry')}
		</h2>
		<div class="flex flex-col md:gap-4 gap-4">
			{#each [1, 2, 3, 4, 5, 6] as i}
				<h4
					class="normal-text flex gap-4 flex-row items-start md:text-[1rem] leading-5 md:leading-[1.57rem] text-sm"
				>
					<img src={images.right} alt="arrow right" />
					<p class="tracking-wide">
						{@html $_(`glosarry-${i}`)}
					</p>
				</h4>
			{/each}
		</div>
	</section>
</main>
