<script lang="ts">
	import { _ } from 'svelte-i18n';
	import { onMount } from 'svelte';

	const start = '2024';
	const end = '2025';
	const months = [
		'jan',
		'feb',
		'mar',
		'apr',
		'may',
		'jun',
		'jul',
		'aug',
		'sep',
		'oct',
		'nov',
		'dec'
	];
	const topSteps = [
		{
			id: 'step1',
			title: 'step1.title',
			description: 'step1.desc',
			target: `${months[0]}_${start}`
		},
		{
			id: 'step3',
			title: 'step3.title',
			description: 'step3.desc',
			target: `${months[6]}_${start}`
		},
		{ id: 'step5', title: 'step5.title', description: 'step5.desc', target: `${months[0]}_${end}` }
	];
	const bottomSteps = [
		{
			id: 'step2',
			title: 'step2.title',
			description: 'step2.desc',
			target: `${months[3]}_${start}`
		},
		{
			id: 'step4',
			title: 'step4.title',
			description: ['step4.desc-1', 'step4.desc-2'],
			target: `${months[9]}_${start}`
		},
		{
			id: 'step6',
			title: 'step6.title',
			description: ['step6.desc-1', 'step6.desc-2'],
			target: `${months[3]}_${end}`
		}
	];

	onMount(() => {
		const updatePositions = () => {
			topSteps.forEach((step) => {
				const targetElement = document.getElementById(step.id);
				const specificElement = document.getElementById(step.target);
				if (specificElement === null) return;
				const specificElementRect = specificElement.getBoundingClientRect();
				if (!targetElement) return;
				const partnetRect = specificElement.parentElement?.getBoundingClientRect();
				if (!partnetRect) return;
				targetElement.style.top = `${specificElementRect.bottom - partnetRect.bottom}px`;
				targetElement.style.left = `${specificElementRect.left + specificElementRect.width / 2 - partnetRect.left}px`;
				if (targetElement?.parentElement?.style) {
					targetElement.parentElement.style.height = targetElement.clientHeight + 'px';
				}
			});
			bottomSteps.forEach((step) => {
				const targetElement = document.getElementById(step.id);
				const specificElement = document.getElementById(step.target);
				if (specificElement === null) return;
				const specificElementRect = specificElement.getBoundingClientRect();
				if (!targetElement) return;
				const partnetRect = specificElement.parentElement?.getBoundingClientRect();
				if (!partnetRect) return;
				targetElement.style.left = `${specificElementRect.left + specificElementRect.width / 2 - partnetRect.left}px`;
				if (targetElement?.parentElement?.style) {
					targetElement.parentElement.style.height = targetElement.clientHeight + 'px';
				}
			});
		};

		updatePositions();
		window.addEventListener('resize', updatePositions);

		return () => {
			window.removeEventListener('resize', updatePositions);
		};
	});
</script>

<main class="xl:w-[1128px] w-full md:my-[7.5rem] md:mx-auto mx-0 px-5 py-6">
	<section class="w-full relative">
		<h2
			class="normal-text font-bold md:text-[3.125rem] text-[2rem] text-start tracking-wider leading-none md:pb-[4.375rem] pb-10"
		>
			{@html $_('roadmap-title')}
		</h2>
		<div class="relative">
			{#each topSteps as step}
				<div id={step.id} class="roadmap-steps bottom-3 px-[0.2675rem]">
					<p
						class="highlight-text font-bold tracking-wider md:text-[1.25rem] text-[9.45px] md:leading-5"
					>
						{$_(step.title)}
					</p>
					<p class="md:text-xs text-[6.14px] normal-text text-opacity-70">
						{@html $_(step.description)}
					</p>
				</div>
			{/each}
		</div>
		<div
			class="flex border border-[#FFC851] bg-[#FFF4D5] justify-between items-center md:px-5 px-[6px] py-[5.24px] md:py-4"
		>
			<p class="highlight-text md:text-[1.5rem] text-[7.28px] font-bold tracking-wider">{start}</p>
			{#each months as m}
				<span
					id={`${m}_${start}`}
					class="md:text-sm normal-text text-[4.66px] uppercase font-medium">{$_(m)}</span
				>
			{/each}
			<p class="highlight-text md:text-[1.5rem] text-[7.28px] font-bold tracking-wider">{end}</p>
			{#each months.slice(0, 6) as m}
				<span id={`${m}_${end}`} class="md:text-sm normal-text text-[4.66px] uppercase font-medium"
					>{$_(m)}</span
				>
			{/each}
		</div>
		<div class="relative">
			{#each bottomSteps as step}
				<div id={step.id} class="roadmap-steps mt-3 px-[0.3125rem]">
					{#if typeof step.description !== 'string'}
						{#each step.description as desc}
							<p class="md:text-xs text-[6.14px] normal-text text-opacity-70 md:pr-12 pr-4">
								{@html $_(desc)}
							</p>
						{/each}
					{:else}
						<p class="md:text-xs text-[6.14px] normal-text text-opacity-70 md:pr-12 pr-4">
							{@html $_(step.description)}
						</p>
					{/if}
					<p
						class="highlight-text font-bold tracking-wider md:text-[1.25rem] text-[9.45px] md:leading-5"
					>
						{$_(step.title)}
					</p>
				</div>
			{/each}
		</div>
	</section>
</main>

<style>
	.roadmap-steps {
		border-left: 0.15rem solid;
		border-image: linear-gradient(0deg, #ff7b04 -0.87%, #ff9f04 92.16%) 1;
		max-width: 77.5px;
		position: absolute;
		height: max-content;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: flex-start;
		gap: 5px;
	}
	@media screen and (min-width: 768px) {
		.roadmap-steps {
			gap: 20px;
			max-width: 165px;
			border-left: 0.5rem solid;
			gap: 20px;
		}
	}
</style>
