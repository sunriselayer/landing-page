<script lang="ts">
	import { _ } from 'svelte-i18n';

	const timelines = Array.from({ length: 3 }).map((_, i) => {
		return {
			label: `timeline.step-${i + 1}.label`,
			time: `timeline.step-${i + 1}.time`
		};
	});
</script>

<main class="xl:w-[880px] w-full md:py-[7.5rem] md:mx-auto md:p-0 px-5 py-12">
	<section class="">
		<h2
			class="normal-text font-bold md:text-[3.125rem] text-[2rem] text-start tracking-wider leading-none md:pb-[4.375rem] pb-6"
		>
			{@html $_('timeline.title')}
		</h2>
		<div class="flex flex-col md:gap-[3.25rem] gap-[3.75rem] border border-[#FFC851] rounded-box-custom md:p-24 px-[1.625rem] py-[3.75rem]">
			{#each timelines as timeline}
				<div class="flex flex-row md:gap-[3.125rem] gap-6 justify-between border-b-2 border-dashed border-[#FFC851]">
					<h4
						class="flex-none normal-text md:text-[1.5rem] text-[0.875rem] leading-none md:leading-6 self-end md:w-max w-24"
					>
						{@html $_(timeline.label)}
					</h4>
					<span class="highlight-text font-semibold uppercase md:text-[1.5rem] text-[1.125rem] leading-none text-right self-end">{@html $_(timeline.time)}</span>
				</div>
			{/each}
		</div>
	</section>
</main>
