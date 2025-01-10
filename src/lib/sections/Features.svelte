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
			imageSrc: (images as Record<string, string>)[`feature${i + 1}`]
		};
	});
</script>

<main>
	<section class="gap-[3.75rem] xl:w-[1140px] mx-auto">
		<h1
			class="text-sm xs:text-base md:text:xl text-center sm:text-lg xl:text-2xl highlight-text md:w-[41.25rem]"
		>
			{@html $_('sunrise-features.description')}
		</h1>
		<div class="flex flex-col gap-5">
			<div class="flex md:flex-row flex-col gap-5">
				{#each features.slice(0, 3) as feature}
					<div
						class="feature-box flex flex-col {feature.index === 0 &&
							'md:w-[32.89%] pr-10'} {feature.index === 2 &&
							'md:w-[40.375%]'} gap-[0.625rem] flex-auto"
					>
						<h2 class="text-xl md:text-[1.5rem] md:leading-[1.875rem] tracking-wider text-white">
							{@html $_(feature.label)}
						</h2>
						<div
							class="flex flex-auto {feature.index === 2 ? 'flex-row' : 'flex-col justify-between'}"
						>
							<p class="md:text-[1rem] md:leading-5 text-white text-opacity-65">
								{$_(feature.description)}
							</p>
							<img
								class="h-auto {feature.index === 2
									? 'md:mt-[0.875rem] ml-[-1.5rem]'
									: 'mt-4 w-full'}"
								src={feature.imageSrc}
								alt="feature"
							/>
						</div>
					</div>
				{/each}
			</div>
			<div class="flex flex-row gap-5">
				{#each features.slice(-2) as feature}
					<div
						class="feature-box flex flex-col gap-[0.625rem] flex-1 {feature.index === 3 &&
							'md:pr-10'}"
					>
						<h2 class="text-xl md:text-[1.5rem] md:leading-[1.875rem] tracking-wider text-white">
							{@html $_(feature.label)}
						</h2>
						<div class="flex flex-auto flex-col justify-between items-end">
							<p
								class="md:text-[1rem] md:leading-5 text-white text-opacity-65 lg:pr-[4.5rem] md:pr-16"
							>
								{$_(feature.description)}
							</p>
							<img class="h-auto mt-4 w-fit" src={feature.imageSrc} alt="feature" />
						</div>
					</div>
				{/each}
			</div>
		</div>
		<LinkButton text={$_('learn-more')} link={docsLink} className={'py-4 px-[4.615rem]'} />
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
		padding-top: 2.5rem;
		padding-left: 2.5rem;
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
