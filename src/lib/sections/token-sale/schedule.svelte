<script lang="ts">
	import { _ } from 'svelte-i18n';
	import { logo, distribution, sunrise, emission } from '../../../consts/images';
</script>

<main class="xl:w-[1104px] w-full md:py-[7.5rem] md:mx-auto md:p-0 px-5 py-12">
	<section class="md:pb-[7.5rem]">
		<div class="flex justify-center content-center mx-auto">
			<div class="flex gap-3 items-center">
				<img class="w-[45px]" src={logo} alt="logo" />
				<img class="w-[106px]" src={sunrise} alt="sunrise" />
			</div>
		</div>
		<div class="md:px-5 flex flex-col md:gap-[5.625rem] gap-10">
			<h2
				class="normal-text font-medium md:text-[3.125rem] text-[2rem] text-center tracking-wider leading-none pt-8"
			>
				{@html $_('schedule-title')}
			</h2>
			<div class="md:mx-[3.125rem] border border-[#FFC851] rounded-box-custom">
				<table class="text-center text-sm overflow-hidden rounded-box-custom border-none">
					<thead>
						<tr
							class="bg-gradient-to-r from-[#FF7E2D] to-[#FFAA17] text-white uppercase tracking-wider"
						>
							{#each [1, 2, 3] as field}
								<th
									class="{field > 1
										? 'w-[36%]'
										: 'w-[28%]'}  font-medium md:text-lg text-xs md:p-4 py-5 px-3 border-[#FFC851] border-x {field ==
										1 && 'border-l-0'} {field == 3 && 'border-r-0'}"
								>
									<p
										class="min-h-[2.8125rem] flex items-center justify-center flex-col md:text-[1.56rem] font-semimedium"
									>
										{@html $_(`schedule-table.headers.${field}`)}
									</p>
								</th>
							{/each}
						</tr>
					</thead>
					<tbody>
						{#each [1, 2, 3, 4, 5, 6, 7] as row}
							<tr class="">
								{#each [1, 2, 3] as field}
									<td
										class="{field > 1
											? 'w-[36%]'
											: 'w-[28%]'} md:h-[8.125rem] h-auto md:text-lg md:py-8 md:px-2 text-[0.625rem] leading-[0.875rem] p-4 border border-l-0 border-[#FFC851] {field ==
											3 && 'border-r-0'} {row == 7 && 'border-b-0'}"
									>
										<p
											class="min-h-[6.125rem] md:min-h-[4.125rem] flex flex-col gap-4 items-center justify-center normal-text font-medium"
										>
											{@html $_(`schedule-table.row-${row}.${field}`)}
										</p>
									</td>
								{/each}
							</tr>
						{/each}
					</tbody>
				</table>
			</div>
			<div class="text-center">
				<h4
					class="normal-text font-medium md:text-2xl text-[1.5rem] text-center tracking-wider leading-none md:pb-[3.75rem] pb-6"
				>
					{@html $_('token-distribution-schedule')}
				</h4>
				<img class="w-full md:px-20" src={distribution} alt={$_('token-distribution-schedule')} />
			</div>
			<div class="text-center">
				<h4
					class="normal-text font-medium md:text-2xl text-[1.5rem] text-center tracking-wider leading-none md:pb-[3.75rem] pb-10"
				>
					{@html $_('token-emission-schedule')}
				</h4>
				<img
					class="w-full md:px-20 pb-[3.125rem]"
					src={emission}
					alt={$_('token-emission-schedule')}
				/>
				<div
					class="flex sm:flex-row flex-wrap flex-col font-semimedium md:gap-[0.875rem] gap-5 md:px-20 justify-center"
				>
					<div class="flex items-center justify-center md:text-sm text-[0.625rem]">
						<div class="w-[21px] h-[10px] bg-[#FFA24F]"></div>
						<span class="pl-2 pr-3 font-eudoxus text-[#FF7B04]">20%</span>
						<span class="normal-text font-medium tracking-wide uppercase"
							>{@html $_('schedule-table.row-4.1').replaceAll('<br>', ' ')}</span
						>
					</div>
					<div class="flex items-center justify-center md:text-sm text-[0.625rem]">
						<div class="w-[21px] h-[10px] bg-[#FFBD81]"></div>
						<span class="pl-2 pr-3 font-eudoxus text-[#FF7B04]">20%</span>
						<span class="normal-text font-medium tracking-wide uppercase"
							>{@html $_('schedule-table.row-3.1').replaceAll('<br>', ' ')}</span
						>
					</div>
					<div class="flex items-center justify-center md:text-sm text-[0.625rem]">
						<div class="w-[21px] h-[10px] bg-[#FF7B04]"></div>
						<span class="pl-2 pr-3 font-eudoxus text-[#FF7B04]">15.5%</span>
						<span class="normal-text font-medium tracking-wide uppercase"
							>{@html $_('schedule-table.row-7.1').replaceAll('<br>', ' ')}</span
						>
					</div>
					<div class="flex items-center justify-center md:text-sm text-[0.625rem]">
						<div class="w-[21px] h-[10px] bg-[#FF881D]"></div>
						<span class="pl-2 pr-3 font-eudoxus text-[#FF7B04]">14.5%</span>
						<span class="normal-text font-medium tracking-wide uppercase"
							>{@html $_('schedule-table.row-2.1').replaceAll('<br>', ' ')}</span
						>
					</div>
					<div class="flex items-center justify-center md:text-sm text-[0.625rem]">
						<div class="w-[21px] h-[10px] bg-[#FFD7B3]"></div>
						<span class="pl-2 pr-3 font-eudoxus text-[#FF7B04]">10%</span>
						<span class="normal-text font-medium tracking-wide uppercase"
							>{@html $_('schedule-table.row-5.1').replaceAll('<br>', ' ')}</span
						>
					</div>
					<div class="flex items-center justify-center md:text-sm text-[0.625rem]">
						<div class="w-[21px] h-[10px] bg-[#FFE5CD]"></div>
						<span class="pl-2 pr-3 font-eudoxus text-[#FF7B04]">10%</span>
						<span class="normal-text font-medium tracking-wide uppercase"
							>{@html $_('schedule-table.row-6.1').replaceAll('<br>', ' ')}</span
						>
					</div>
					<div class="flex items-center justify-center md:text-sm text-[0.625rem]">
						<div class="w-[21px] h-[10px] bg-[#FFF2E6]"></div>
						<span class="pl-2 pr-3 font-eudoxus text-[#FF7B04]">10%</span>
						<span class="normal-text font-medium tracking-wide uppercase"
							>{@html $_('schedule-table.row-1.1').replaceAll('<br>', ' ')}</span
						>
					</div>
				</div>
			</div>
		</div>
	</section>
</main>
