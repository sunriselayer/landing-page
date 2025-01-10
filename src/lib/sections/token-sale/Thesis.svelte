<script lang="ts">
	import { _ } from 'svelte-i18n';
	import { right } from '../../../consts/images';
</script>

<main class="md:h-[982px] md:my-0 md:mx-auto md:p-0 px-5 py-6 justify-center">
	<section
		class="z-20 mx-auto gap-8 md:my-[7.5rem] text-base-100 lg:w-[854px] w-[calc(100vw-2.5rem)]"
	>
		<h2
			class="normal-text font-bold md:text-[2.25rem] text-[2rem] md:leading-none leading-[1.3125rem]"
		>
			{@html $_('core-thesis')}
		</h2>
		<div class="flex flex-col md:gap-[1.875rem] gap-4 md:mt-[3.125rem] md:mb-[4.375rem] my-6">
			{#each [1, 2, 3] as i}
				<h4
					class="normal-text flex gap-4 flex-row items-start md:text-[1.25rem] leading-5 md:leading-[1.58rem] text-sm"
				>
					<img src={right} alt="arrow right" />
					{@html $_(`thesis-${i}`)}
				</h4>
			{/each}
		</div>
		<div
			class="flex flex-col gap-[1.25rem] h-auto md:h-[325px] rounded-box-custom md:py-10 md:px-[3.125rem] p-6"
		>
			<h3 class="normal-text font-bold md:text-[1.625rem] text-lg leading-none">
				{@html $_('why-sunrise')}
			</h3>
			<div class="flex flex-col gap-5">
				{#each [1, 2, 3, 4] as i}
					<h4
						class="normal-text flex gap-4 md:gap-3 flex-row items-start md:text-[1.25rem] text-sm"
					>
						<b class="highlight-text">{i}</b>
						{#if i == 4}
							<p>
								{@html $_(`answer-${i}`)}
							</p>
						{:else}
							{@html $_(`answer-${i}`)}
						{/if}
					</h4>
				{/each}
			</div>
		</div>
	</section>
</main>
