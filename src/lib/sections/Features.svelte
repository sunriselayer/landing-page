<script lang="ts">
	import { _ } from 'svelte-i18n';
	import * as images from '../../consts/images';
	import LinkButton from '$lib/components/LinkButton.svelte';
	import { docsLink } from '../../consts';

	const features = Array.from({ length: 5 }).map((_, i) => {
		return {
			index: i,
			label: `sunrise-features.feature-${i + 1}.label`,
			description: `sunrise-features.feature-${i + 1}.description`,
			imageSrc: (images as Record<string, string>)[`feature${i + 1}`],
			imageSrcSP: (images as Record<string, string>)[`feature${i + 1}_sp`]
		};
	});
</script>

<main>
	<section class="md:gap-[3.75rem] gap-6 xl:w-[1140px] mx-auto md:p-0 p-6">
		<h1
			class="text-[1rem] leading-5 xs:text-base md:text:xl text-center sm:text-lg xl:text-2xl highlight-text md:w-[41.25rem]"
		>
			{@html $_('sunrise-features.description')}
		</h1>
		<div class="flex flex-col gap-5">
			<div class="flex md:flex-row flex-col gap-5">
				{#each features.slice(0, 3) as feature}
					<div
						class="feature-box md:pt-10 md:pl-10 pt-6 pl-6 flex flex-col {feature.index === 0 &&
							'md:w-[32.89%] md:pr-10 pr-6'} {feature.index === 2 &&
							'md:w-[40.375%]'} gap-[0.625rem] flex-auto"
					>
						<h2 class="text-[0.875rem] leading-[1.125rem] md:text-[1.5rem] md:leading-[1.875rem] tracking-wider text-white">
							{@html $_(feature.label)}
						</h2>
						<div
							class="flex flex-auto {feature.index === 2
								? 'md:flex-row flex-col'
								: 'flex-col justify-between'}"
						>
							<p class="md:text-[1rem] md:leading-5 text-[0.75rem] leading-4 text-white text-opacity-55">
								{$_(feature.description)}
							</p>
							<img
								class="h-auto {feature.index === 2
									? 'md:mt-[0.875rem] md:ml-[-1.5rem] self-end md:w-[50%] w-[45%]'
									: feature.index === 1
										? 'mt-4 md:w-full w-[50%] self-end'
										: 'mt-4 md:w-full'}"
								src={feature.imageSrc}
								alt="feature"
							/>
						</div>
					</div>
				{/each}
			</div>
			<div class="flex md:flex-row flex-col gap-5">
				{#each features.slice(-2) as feature}
					<div
						class="feature-box flex md:pt-10 md:pl-10 pt-6 pl-6 flex-col gap-[0.625rem] flex-1 {feature.index ===
							3 && 'md:pr-10'}"
					>
						<h2 class="text-[0.875rem] leading-[1.125rem] md:text-[1.5rem] md:leading-[1.875rem] tracking-wider text-white">
							{@html $_(feature.label)}
						</h2>
						<div class="flex flex-auto flex-col justify-between md:items-end">
							<p
								class="md:text-[1rem] md:leading-5 text-[0.75rem] leading-4 text-white text-opacity-55 lg:pr-[4.5rem] md:pr-16"
							>
								{$_(feature.description)}
							</p>
							{#if feature.index === 3}
								<img
									class="h-auto mt-4 w-fit hidden md:block"
									src={feature.imageSrc}
									alt="feature"
								/>
								<img
									class="h-auto mt-4 w-fit md:hidden self-center"
									src={feature.imageSrcSP}
									alt="feature"
								/>
							{:else}
								<img class="h-auto md:mt-4 mt-[1.375rem] md:w-fit w-[85%] self-end " src={feature.imageSrc} alt="feature" />
							{/if}
						</div>
					</div>
				{/each}
			</div>
		</div>
		<LinkButton text={$_('learn-more')} link={docsLink} className={'md:py-4 md:px-[4.615rem] px-8'} />
	</section>
</main>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}
	.feature-box {
		background: radial-gradient(
			575.31% 1171.77% at 9.68% 100%,
			rgba(255, 255, 255, 0.03) 0%,
			rgba(255, 255, 255, 0.05) 100%
		);
		height: auto;
		border-radius: 1.25rem;
		border: 1px solid;
		border-image-source: linear-gradient(
			339.9deg,
			rgba(102, 102, 102, 0.02) 19.06%,
			rgba(102, 102, 102, 0.2) 80.94%
		);
		overflow: clip;
	}
</style>
