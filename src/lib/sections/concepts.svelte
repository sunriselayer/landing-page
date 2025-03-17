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
			imageSrc: (images as Record<string, string>)[`concept${i + 1}`],
			imageSrcSP: (images as Record<string, string>)[`concept${i + 1}_sp`]
		};
	});
</script>

<main>
	<section
		class="z-20 md:max-w-[1200px] md:w-full mx-auto gap-10 text-base-100 flex flex-col justify-center items-center md:px-[30px] md:py-0 p-6"
	>
		<div class="flex flex-col max-w-[100%] text-center gap-[0.75rem]">
			<h1
				class="text-center text-[0.875rem] leading-5 font-semibold md:text-[3rem] md:leading-[3.725rem] tracking-wide"
			>
				{@html $_('sunrise-question')}
			</h1>
			<p
				class="md:text-[1rem] md:leading-[1.25rem] text-[0.75rem] leading-[0.88rem] md:px-5 text-opacity-70 font-light"
			>
				{@html $_('sunrise-definition')}
			</p>
		</div>
		<div class="md:overflow-hidden overflow-auto md:w-full w-[calc(100vw-3rem)]">
			<div
				class="flex mx-auto md:flex-row flex-col md:gap-[2.25rem] gap-6 items-center md:py-[10rem] md:w-full"
			>
				<div
					class="md:flex md:flex-col md:flex-0 grid grid-cols-2 md:gap-[2.8125rem] gap-y-5 gap-x-0 md:w-[20rem] w-full"
				>
					{#each concepts as { label, activeIconSrc, iconSrc, index }}
						<div
							class="flex md:gap-5 gap-3 md:text-2xl text-[0.75rem] font-medium hover:cursor-pointer transition-all duration-300 pr-2 {activeConcept ===
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
							<img
								class="md:w-9 w-6"
								src={activeConcept === index ? activeIconSrc : iconSrc}
								alt={label}
							/>
							<span class="content-center">
								{$_(label)}
							</span>
						</div>
					{/each}
				</div>
				<div class="flex-1 overflow-y-auto">
					<div class="concept-content rounded-[1.25rem] overflow-clip md:w-fit">
						{#each concepts as { index, description, imageSrc, imageSrcSP }}
							{#if activeConcept === index}
								<div
									class="flex md:flex-row flex-col items-center justify-between md:p-10 p-6 ease-in-out md:gap-[1.125rem] gap-[0.625rem] {activeConcept ===
										0 || 'md:pr-0'} {activeConcept === 0 ||
										activeConcept === 3 ||
										'md:pb-0'} {activeConcept === 1
										? 'pb-0'
										: activeConcept === 2
											? 'pb-3'
											: ''} md:w-[47.5rem] md:min-w-[47.5rem] w-full md:max-w-[150vw] flex-1 md:min-h-[450px] min-h-[20rem] md:[h-450px]"
								>
									<p class="font-sans text-xs sm:text-sm md:text-[1rem] leading-5">
										{@html $_(description)}
									</p>
									<img
										class="md:w-full {activeConcept === 0
											? 'w-[60%]'
											: activeConcept === 1
												? 'w-[55%] self-end mr-[-1.5rem]'
												: ''} {activeConcept === 3
											? 'mr-[-1.5rem]'
											: ''} md:h-[fit-content] h-[50%] {activeConcept > 1 ? 'md:block hidden' : ''}"
										src={imageSrc}
										alt={`concept-${activeConcept}`}
									/>
									{#if activeConcept > 1}
										<img class="md:hidden" src={imageSrcSP} alt={`concept-${activeConcept}`} />
									{/if}
								</div>
							{/if}
						{/each}
					</div>
				</div>
			</div>
		</div>
	</section>
</main>

<style>
	.concept-content {
		background: radial-gradient(
				112.9% 500.79% at 9.68% 100%,
				rgba(255, 255, 255, 0.08) 0%,
				rgba(255, 255, 255, 0.03) 100%
			),
			linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2));
	}
</style>
