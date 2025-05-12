<script lang="ts">
	import { _ } from 'svelte-i18n';
	import { check, disable, glassHaru, glassHaruSP } from '../../../consts/images';
</script>

<main class="xl:w-[1030px] w-full md:py-[7.5rem] md:mx-auto md:p-0 px-5 py-24">
	<section class="">
		<h2
			class="flex gap-3 items-center normal-text font-medium md:text-[2.5rem] text-[2rem] text-start md:mb-[3.125rem] mb-6 tracking-wider leading-none"
		>
			<img class="hidden md:block" src={glassHaru} alt="" />
			<img class="block md:hidden" src={glassHaruSP} alt="" />
			{@html $_('deeper-level')}
		</h2>
		<div class="flex flex-col md:gap-[3.125rem] gap-6 md:mt-[1.875rem]">
			<div class="">
				<h4
					class="normal-text md:text-[1.5rem] text-[1.125rem] leading-[0.75rem] md:leading-4 font-medium rounded-box-custom px-[25px] py-[17px] w-max"
				>
					<b class="highlight-text mr-3 font-eudoxus">1</b>
					{@html $_('level-1')}
				</h4>
				<div class="flex flex-col gap-[1.875rem] md:mt-[1.875rem] mt-6">
					<h6
						class="normal-text flex gap-4 flex-row items-start md:text-[1.25rem] md:leading-6 text-sm"
					>
						<p class="pl-[1.5625rem]">
							{@html $_(`level-1-desc`)}
						</p>
					</h6>
				</div>
			</div>
			<div class="">
				<h4
					class="normal-text md:text-[1.5rem] text-[1.125rem] leading-[0.75rem] md:leading-4 font-medium rounded-box-custom px-[25px] py-[17px] w-max"
				>
					<b class="highlight-text mr-3 font-eudoxus">2</b>
					{@html $_('level-2')}
				</h4>
				<div
					class="list-disc md:pl-[1.5625rem] pl-10 flex flex-col md:gap-[1.875rem] gap-4 mt-[1.875rem]"
				>
					{#each [1, 2] as i}
						<p
							class="normal-text items-start md:text-[1.25rem] md:leading-[1.58rem] leading-5 text-sm"
						>
							{@html $_(`level-2-desc-${i}`)}
						</p>
					{/each}
				</div>
			</div>
			<div class="">
				<h4
					class="normal-text md:text-[1.5rem] text-[1.125rem] leading-[0.75rem] md:leading-4 font-medium rounded-box-custom px-[25px] py-[17px] w-max"
				>
					<b class="highlight-text mr-3 font-eudoxus">3</b>
					{@html $_('level-3')}
				</h4>
				<div class="flex flex-col md:gap-[3.125rem] gap-4 md:mt-[1.875rem] mt-6 pl-[1.5625rem]">
					<p class="normal-text items-start md:text-[1.25rem] leading-[1.58rem] text-sm">
						{@html $_(`level-3-desc`)}
					</p>
					<div class="flex flex-col md:mx-[3.125rem]">
						<div
							class="flex flex-col gap-[1.25rem] md:py-10 md:px-[3.125rem] p-6 rounded-box-custom"
						>
							<h3 class="normal-text font-medium md:text-[1.625rem] text-lg leading-none">
								{@html $_('key-feature')}
							</h3>
							<div class="flex flex-col gap-5">
								{#each [1, 2, 3] as i}
									<h4
										class="normal-text flex gap-[0.625rem] md:gap-3 flex-row items-start md:text-[1.25rem] text-sm md:leading-[1.515rem] leading-5"
									>
										<b class="highlight-text font-eudoxus">{i}</b>
										<p>
											{@html $_(`key-feature-${i}`)}
										</p>
									</h4>
								{/each}
							</div>
						</div>
						<div class="h-auto overflow-clip md:mt-[3.125rem] mb-[1.875rem] mt-6 relative">
							<h4
								class="normal-text rounded-[50px] border-[1px] border-[#183973] font-eudoxus uppercase md:text-lg text-xs md:px-7 md:py-5 p-3 md:leading-[1.2em] leading-[1.1em] md:mx-[43px] mx-12 z-20 bg-white relative font-extrabold text-center tracking-normal"
							>
								{@html $_('comparision-title')}
							</h4>
							<div
								class="absolute w-[100%] h-[200%] md:mt-[-3%] sm:mt-[-5%] mt-[-7%] rounded-[30px] border-[1px] border-[#183973]"
							></div>
						</div>
						<div class="flex md:flex-row flex-col md:justify-between px-1 gap-6 md:gap-[2.5rem]">
							<div class="md:w-[calc(50%-1.25rem)] rounded-box-custom overflow-clip">
								<p
									class="text-white font-medium leading-3 text-lg md:text-2xl p-6 text-center bg-gradient-to-r from-[#FF9601] to-[#FFC401]"
								>
									{@html $_('on-chain-title')}
								</p>
								<div class="mx-[3.125rem] my-6 font-plus-jakarta-sans">
									<div class="my-5 flex flex-col gap-5 w-max mx-auto">
										{#each [1, 2, 3, 4, 5] as i}
											<p class="flex flex-row gap-3 normal-text items-start">
												{#if i == 1 || i == 5}
													<img src={check} alt="check" />
													<span class="md:text-base text-sm"
														>{@html $_(`chain-da-option-${i}`)}</span
													>
												{:else}
													<img src={disable} alt="disable" />
													<span class="md:text-base text-sm text-[#DAB777]"
														>{@html $_(`chain-da-option-${i}`)}</span
													>
												{/if}
											</p>
										{/each}
									</div>
									<div class="mx-auto w-max pt-6">
										<b class="text-[#FF7B04] uppercase text-sm">
											{@html $_('example')}:
										</b>
										<div class="flex flex-row items-center normal-text text-sm md:text-base pb-5">
											{@html $_('celestia')}
											<div class="mx-2 rounded-badge p-[0.15rem] bg-[#FF7B04]"></div>
											{@html $_('avail')}
											<div class="mx-2 rounded-badge p-[0.15rem] bg-[#FF7B04]"></div>
											{@html $_('eigenda')}
										</div>
									</div>
								</div>
							</div>
							<div class="md:w-[calc(50%-1.25rem)] rounded-box-custom overflow-clip">
								<p
									class="text-white font-medium leading-3 text-lg md:text-2xl p-6 text-center bg-gradient-to-r from-[#FF7B04] to-[#FF9F04]"
								>
									{@html $_('off-chain-title')}
								</p>
								<div class="mx-[3.125rem] my-6 font-plus-jakarta-sans">
									<div class="my-5 flex flex-col gap-5 w-max mx-auto">
										{#each [1, 2, 3, 4, 5] as i}
											<p class="flex flex-row gap-3 normal-text items-start">
												<img src={check} alt="check" />
												<span class="md:text-base text-sm">{@html $_(`chain-da-option-${i}`)}</span>
											</p>
										{/each}
										<div class="ml-4 w-max pt-6">
											<b class="text-[#FF7B04] uppercase text-sm">
												{@html $_('example')}:
											</b>
											<div class="flex normal-text text-sm md:text-base pb-5">
												{@html $_('sunrise')}
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="">
				<h4
					class="normal-text md:text-[1.5rem] text-[1.125rem] leading-[0.75rem] md:leading-4 font-medium rounded-box-custom px-[25px] py-[17px] w-max"
				>
					<b class="highlight-text mr-3 font-eudoxus">4</b>
					{@html $_('level-4')}
				</h4>
				<div class="md:pl-6 pl-10 flex flex-col md:gap-[1.875rem] gap-4 mt-[1.875rem]">
					<p
						class="normal-text items-start md:text-[1.25rem] md:leading-[1.58rem] leading-5 text-sm"
					>
						{@html $_('level-4-desc')}
					</p>
					<div
						class="flex md:flex-row justify-between flex-col md:gap-[1.875rem] gap-4 md:mx-[2.875rem]"
					>
						{#each [1, 2, 3] as i}
							<p
								class="flex flex-col w-full normal-text md:text-lg text-sm leading-[0.75rem] rounded-box-custom md:py-10 py-6 text-center gap-[22px]"
							>
								<b class="highlight-text font-eudoxus text-xl">{i}</b>
								{@html $_(`revenue-${i}`)}
							</p>
						{/each}
					</div>
				</div>
			</div>
		</div>
	</section>
</main>

<!-- <Feature /> -->

<style>
	h2 {
		background: linear-gradient(90deg, #003f92 0.13%, #0063d3 100.13%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
		text-fill-color: transparent;
	}
</style>
