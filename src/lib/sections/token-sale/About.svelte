<script lang="ts">
	import { _ } from 'svelte-i18n';
	import * as images from '../../../consts/images';

	const metrics = Array.from({ length: 3 }).map((_, i) => {
		return {
			index: i,
			title: `key-metrics.metric-${i + 1}.title`,
			label: `key-metrics.metric-${i + 1}.label`,
			description: `key-metrics.metric-${i + 1}.description`,
			imgSrc: (images as Record<string, string>)[`metric${i + 1}`]
		};
	});

	const ultraSteps = Array.from({ length: 5 }).map((_, i) => {
		return {
			index: i,
			label: `fundamentals.step-${i + 1}.label`,
			description: `fundamentals.step-${i + 1}.description`,
			icon: (images as Record<string, string>)[`ultra${i + 1}`]
		};
	});
</script>

<main class="md:h-[982px] justify-center">
	<section
		class="z-20 mx-auto gap-8 md:py-[7.5rem] text-base-100 lg:w-[854px] w-[calc(100vw-2.5rem)] md:px-0 py-12"
	>
		<h2
			class="normal-text font-medium md:text-[2.25rem] text-[2rem] md:leading-none leading-[1.3125rem]"
		>
			{@html $_('about-sunrise')}
		</h2>
		<div class="flex flex-col md:gap-[1.875rem] gap-4 md:mt-[3.125rem] md:mb-[4.375rem] my-6">
			{#each [1, 2] as i}
				<h4
					class="normal-text flex gap-4 flex-row items-start md:text-[1.25rem] leading-5 md:leading-[1.58rem] text-sm"
				>
					<img src={images.right} alt="arrow right" />
					{@html $_(`about-${i}`)}
				</h4>
			{/each}
		</div>
		<div
			class="flex flex-col gap-[1.25rem] h-auto md:h-[354px] rounded-box-custom md:py-10 md:px-[3.125rem] p-6 relative"
		>
			<h3
				class="flex gap-3 items-center normal-text font-medium md:text-[1.5625rem] text-lg leading-none"
			>
				<img class="block md:hidden" src={images.whyHaruSP} alt="" />
				<span>
					{@html $_('why-sunrise')}
				</span>
			</h3>
			<div class="flex flex-col gap-5">
				{#each [1, 2, 3, 4] as i}
					<h4
						class="normal-text flex gap-4 md:gap-3 flex-row items-start md:text-[1.25rem] text-sm"
					>
						<b class="highlight-text">{i}</b>
						<p>
							{@html $_(`answer-${i}`)}
						</p>
					</h4>
				{/each}
			</div>
			<img class="absolute left-0 hidden md:block ml-[-16.375rem]" src={images.whyHaru} alt="" />
		</div>
	</section>
	<section
		class="z-20 mx-auto gap-8 md:pt-[7.5rem] md:pb-0 text-base-100 lg:w-[920px] w-[calc(100vw-2.5rem)] md:my-0 md:px-0 py-12"
	>
		<h2
			class="normal-text md:text-center font-medium md:text-[3.125rem] text-[2rem] md:leading-none leading-[1.3125rem] md:pt-[7.5rem] md:pb-20 pb-6"
		>
			{@html $_('key-metrics.title')}
		</h2>
		<div class="flex flex-row md:gap-4 gap-2 md:pb-[3.75rem] pb-6">
			{#each metrics as metric}
				<div
					class="flex flex-col gap-[1.25rem] md:min-h-[20.5rem] min-h-[10.25rem] flex-1 bg-[#fff1cb] md:rounded-lg rounded-[0.25rem] overflow-clip relative justify-between md:p-6 p-3"
				>
					<div>
						<h3
							class="highlight-text font-medium font-eudoxus md:text-[3.375rem] text-[1.5rem] leading-none"
						>
							{@html $_(metric.title)}
						</h3>
						<h6
							class="normal-text md:font-medium md:text-[2rem] text-[0.875rem] leading-none mt-[0.3em]"
						>
							{@html $_(metric.label)}
						</h6>
					</div>

					<img class="w-[60%] right-0 bottom-0 absolute" src={metric.imgSrc} alt="" />
					<p
						class="normal-text items-start md:text-[1.625rem] md:leading-[1.58rem] text-[0.75rem] leading-[0.7rem]"
					>
						{@html $_(metric.description)}
					</p>
				</div>
			{/each}
		</div>
		<div class="video-background rounded-lg overflow-hidden">
			<video class="scale-[1.01]" src={images.opendoor} autoplay muted loop playsinline></video>
		</div>
	</section>
	<section class="z-10">
		<div
			class="md:w-[100%] md:mt-[-16.625rem] md:pt-[16.625rem] mt-[-10rem] pt-[7rem] bg-[#FFF1CB] md:pb-[7.5rem] pb-[3.75rem]"
		>
			<div class="mx-auto lg:w-[920px] w-[calc(100vw-2.5rem)]">
				<div class="md:pt-[5.875rem] md:pb-20 md:px-[2.3125rem] pb-10 pt-6">
					<h2
						class="normal-text font-medium md:text-[3.125rem] text-[1.5rem] text-center tracking-wider leading-none md:pb-8 pb-4"
					>
						{@html $_('fundamentals.title')}
					</h2>
					<p
						class="normal-text text-center md:text-[1.5rem] md:leading-7 text-[0.875rem] leading-none"
					>
						{@html $_('fundamentals.description')}
					</p>
				</div>
				<div class="grid grid-cols-4 md:gap-4 gap-2">
					{#each ultraSteps as step, index}
						{#if index === 2}
							<div class="col-span-1"></div>
						{/if}
						<div
							class="md:min-h-[9.625rem] flex-1 bg-[#FFF9EA] rounded-lg overflow-clip relative justify-between md:p-6 p-3 col-span-2"
						>
							<img class="md:w-7 md:h-7 w-[0.875rem] h-[0.875rem]" src={step.icon} alt="" />
							<h3
								class="md:pt-5 pt-3 md:pb-4 pb-1 highlight-text font-medium font-eudoxus md:text-[2rem] text-sm leading-none"
							>
								{@html $_(step.label)}
							</h3>
							<p class="normal-text items-start md:text-[1.25rem] text-xs">
								{@html $_(step.description)}
							</p>
						</div>
						{#if index === 2}
							<div class="col-span-1"></div>
						{/if}
					{/each}
				</div>
			</div>
		</div>
	</section>
</main>
