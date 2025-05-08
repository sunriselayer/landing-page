<script lang="ts">
	import { _ } from 'svelte-i18n';
</script>

<main class="md:my-0 md:pb-[7.5rem] md:mx-auto md:p-0 px-5 py-12 justify-center">
	<section
		class="z-20 flex flex-col mx-auto md:gap-[3.125rem] gap-6 md:py-[7.5rem] text-base-100 lg:w-[880px] w-[calc(100vw-2.5rem)]"
	>
		<h2
			class="normal-text font-medium md:text-[3.125rem] text-[2rem] md:leading-none leading-[1.3125rem] md:tracking-wider"
		>
			{@html $_('tokenomics')}
		</h2>
		<div class="flex flex-col md:gap-[1.875rem] gap-6">
			<h4
				class="normal-text flex gap-4 flex-row items-start md:text-[1.5625rem] leading-5 md:leading-[1.58rem] text-sm font-medium"
			>
				{@html $_('dual-token-system')}
			</h4>
			<div>
				<div>
					<h6
						class="flex flex-row gap-2 highlight-text md:text-xl text-sm leading-6 font-medium tracking-wider"
					>
						<span class="mx-1 font-eudoxus text-[16px]">1</span>
						{@html $_('dual-token-system-1')}
					</h6>
					<p class="normal-text leading-5 ml-12 pl-1 list-disc">
						<span class="list-item">{@html $_('dual-token-system-1-desc-1')}</span>
						<span class="list-item">{@html $_('dual-token-system-1-desc-2')}</span>
						<span class="list-item">{@html $_('dual-token-system-1-desc-3')}</span>
						<span class="list-item">{@html $_('dual-token-system-1-desc-4')}</span>
					</p>
				</div>
				<div class="mt-[0.9375rem]">
					<h6
						class="flex flex-row gap-2 highlight-text md:text-xl text-sm leading-6 font-medium tracking-wider"
					>
						<span class="mx-1 font-eudoxus text-[16px]">2</span>
						{@html $_('dual-token-system-2')}
					</h6>
					<p class="normal-text leading-5 ml-12 pl-1 list-disc">
						<span class="list-item">{@html $_('dual-token-system-2-desc-1')}</span>
						<span class="list-item">{@html $_('dual-token-system-2-desc-2')}</span>
						<span class="list-item">{@html $_('dual-token-system-2-desc-3')}</span>
						<span class="list-item">{@html $_('dual-token-system-2-desc-4')}</span>
						<span class="list-item">{@html $_('dual-token-system-2-desc-5')}</span>
						<span class="list-item">{@html $_('dual-token-system-2-desc-6')}</span>
					</p>
				</div>
			</div>
			<div class="">
				<h6 class="normal-text md:text-xl text-lg leading-5 font-medium tracking-wider ml-2">
					{@html $_('token-description')}
				</h6>
				<p class="normal-text ml-6 font-medium tracking-wide text-sm md:mt-0 mt-[15px]">
					<span class="mx-2 font-medium uppercase highlight-text">{@html $_('ticker')}: </span>
					RISE
				</p>
			</div>
		</div>
		<div
			class="flex flex-col gap-[1.25rem] h-auto rounded-box-custom md:py-10 md:px-[3.125rem] p-6"
		>
			<h3 class="normal-text font-medium md:text-[1.625rem] text-lg leading-none md:mt-[1.875rem]">
				{@html $_('token-usecase')}
			</h3>
			<div class="flex flex-col gap-[1.875rem]">
				{#each [1, 2, 3] as i}
					<div class="flex flex-col gap-5">
						<h4
							class="normal-text flex gap-[0.625rem] flex-row items-center md:text-[1.25rem] text-sm tracking-wide"
						>
							<b class="min-w-3 text-base highlight-text font-eudoxus">{i}</b>
							<p class="uppercase font-medium">
								{@html $_(`token-usecase-${i}`)}
							</p>
						</h4>
						<div class="tracking-wide gap-[10px]">
							{#if i == 3}
								<p class="normal-text ml-5 md:text-base text-sm">
									{@html $_(`token-usecase-${i}-desc-1`)}
								</p>
								<p class="normal-text ml-5 md:text-base text-sm md:mt-4 mt-5">
									{@html $_(`token-usecase-${i}-desc-2`)}
								</p>
							{:else}
								<p class="normal-text ml-6 md:text-base text-sm">
									{@html $_(`token-usecase-${i}-desc`)}
								</p>
								{#if i == 1}
									<p class="normal-text ml-5 font-medium tracking-wide">
										<span class="font-medium uppercase highlight-text">{@html $_('ticker')}: </span>
										RISE
									</p>
								{/if}
							{/if}
						</div>
					</div>
				{/each}
			</div>
		</div>
	</section>
</main>

<style>
</style>
