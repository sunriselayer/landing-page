<script lang="ts">
	import { _ } from 'svelte-i18n';
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
		class="z-20 xl:w-[1140px] mx-auto gap-8 text-base-100 flex flex-col justify-center items-center md:p-0 p-6"
	>
		<div class="flex flex-col lg:max-w-[46.625rem] max-w-[100%] text-center gap-[0.75rem]">
			<h1
				class="text-center text-[1rem] leading-5 font-medium md:text-[3rem] md:leading-[3.725rem] tracking-wide"
			>
				{@html $_('sunrise-question')}
			</h1>
			<p
				class="md:text-[1rem] md:leading-[1.25rem] text-[0.75rem] leading-[0.88rem] md:px-5 text-opacity-70 font-light"
			>
				{@html $_('sunrise-definition')}
			</p>
		</div>
		<div class="md:overflow-hidden overflow-auto md:w-auto w-[calc(100vw-3rem)]">
			<div
				class="flex mx-auto flex-row gap-[2.25rem] items-center md:py-[10rem] py-6 md:w-auto w-max"
			>
				<div class="flex flex-col flex-0 md:gap-[2.8125rem] gap-[1.7rem] md:w-[20em] w-[12em]">
					{#each concepts as { label, activeIconSrc, iconSrc, index }}
						<div
							class="flex md:gap-5 gap-4 md:text-2xl text-[0.75rem] font-medium tracking-widest hover:cursor-pointer transition-all duration-300 {activeConcept ===
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
				<div class="concept-content md:rounded-[1.25rem] rounded-lg overflow-clip">
					{#each concepts as { index, description, imageSrc }}
						{#if activeConcept === index}
							<div
								class="flex flex-row items-center justify-between md:p-10 p-3 ease-in-out md:gap-[1.125rem] {activeConcept ===
									0 || 'pr-0'} {activeConcept === 0 ||
									activeConcept === 3 ||
									'md:pb-0'} md:w-[47.5rem] md:min-w-[47.5rem] w-full max-w-[150vw] flex-1 md:min-h-[450px] min-h-[20rem] md:[h-450px]"
							>
								<p class="font-sans text-xs sm:text-sm md:text-[1rem] leading-5">
									{@html $_(description)}
								</p>
								<img
									class="md:w-full {index === 2 ? 'w-[30%]' : 'w-[40%]'} md:h-[fit-content] h-[50%]"
									src={imageSrc}
									alt={`concept-${activeConcept}`}
								/>
							</div>
						{/if}
					{/each}
				</div>
			</div>
		</div>
	</section>
</main>

<style>
	.concept-content {
		flex: 1 1 auto;
		background: radial-gradient(
				112.9% 500.79% at 9.68% 100%,
				rgba(255, 255, 255, 0.08) 0%,
				rgba(255, 255, 255, 0.03) 100%
			),
			linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2));
	}
</style>
