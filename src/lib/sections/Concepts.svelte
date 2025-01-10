<script lang="ts">
	import { _ } from 'svelte-i18n';
	import { fade } from 'svelte/transition';
	import * as images from '../../consts/images';

	let activeConcept = 0;

	function setActiveConcept(index: number) {
		activeConcept = index;
	}

	const concepts = Array.from({ length: 4 }).map((_, i) => {
		return {
			index: i,
			label: `sunrise-${i + 1}.label`,
			description: `sunrise-${i + 1}.description`,
			iconSrc: (images as Record<string, string>)[`concept_icon_${i + 1}`],
			activeIconSrc: (images as Record<string, string>)[`concept_icon_active_${i + 1}`],
			imageSrc: (images as Record<string, string>)[`concept${i + 1}`]
		};
	});
</script>

<main>
	<section
		class="z-20 xl:w-[1140px] mx-auto gap-8 text-base-100 flex flex-col justify-center items-center"
	>
		<div class="flex flex-col lg:max-w-[46.625rem] max-w-[100%] text-center md:gap-[0.75rem]">
			<h1
				class="text-center text-4xl font-extrabold md:text-[3rem] md:leading-[3.725rem] tracking-wide"
			>
				{@html $_('sunrise-question')}
			</h1>
			<h2 class="md:text-[1rem] md:leading-[1.25rem] px-5">
				{@html $_('sunrise-definition')}
			</h2>
		</div>
		<div class="flex mx-auto md:flex-row flex-col gap-[2.25rem] items-center py-[10rem]">
			<div class="flex flex-col gap-[2.8125rem]">
				{#each concepts as { label, activeIconSrc, iconSrc, index }}
					<div
						class="flex flex-row gap-5 md:text-2xl font-medium tracking-widest concept-label {activeConcept ===
						index
							? 'highlight-text'
							: ''}"
						role="tab"
						tabindex={index}
						aria-selected={activeConcept === index}
						on:click={() => setActiveConcept(index)}
						on:keydown={(e) =>
							e.key === 'Enter' || e.key === ' ' ? setActiveConcept(index) : null}
					>
						<img src={activeConcept === index ? activeIconSrc : iconSrc} alt={label} />
						<span>
							{$_(label)}
						</span>
					</div>
				{/each}
			</div>
			<div class="concept-content rounded-[1.25rem] overflow-clip">
				{#each concepts as { index, description, imageSrc }}
					{#if activeConcept === index}
						<div
							class="flex flex-row items-center justify-between md:p-10 ease-in-out md:gap-[1.125rem] {activeConcept ===
								0 || 'md:pr-0'} {activeConcept === 0 ||
								activeConcept === 3 ||
								'md:pb-0'} md:w-[47.5rem] md:min-w-[47.5rem] w-full max-w-[100vw]"
						>
							<p class="font-sans text-xs sm:text-sm md:text-[1rem] leading-5">
								{@html $_(description)}
							</p>
							<img
								class="md:w-full w-1/2 h-[fit-content]"
								src={imageSrc}
								alt={`concept-${activeConcept}`}
							/>
						</div>
					{/if}
				{/each}
			</div>
		</div>
	</section>
</main>

<style>
	.concept-label:hover {
		cursor: pointer;
		transform: scale(1.02);
	}
	.concept-content {
		flex: 1;
		background: radial-gradient(
				112.9% 500.79% at 9.68% 100%,
				rgba(255, 255, 255, 0.08) 0%,
				rgba(255, 255, 255, 0.03) 100%
			),
			linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2));
	}
</style>
