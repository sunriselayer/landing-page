<script lang="ts">
	import { _ } from 'svelte-i18n';
</script>

<main class="xl:w-[1104px] w-full md:py-[7.5rem] md:mx-auto md:p-0 px-5 py-12">
	<section class="">
		<h2
			class="normal-text font-medium md:text-[3.125rem] text-[2rem] text-start tracking-wider leading-none md:pb-[1.875rem] pb-6"
		>
			{@html $_('sales-details')}
		</h2>
		<div class="border border-[#FFC851] rounded-box-custom">
			<table class="text-center text-sm overflow-hidden rounded-box-custom border-none">
				<thead>
					<tr
						class="bg-gradient-to-r from-[#FF7E2E] to-[#FFA004] text-white uppercase tracking-wider"
					>
						<th class="font-medium md:text-lg text-[0.625rem] md:p-4 py-4 border-[#FFC851] border-x"
						></th>
						{#each [1, 2] as field}
							<th
								class="font-medium md:text-lg text-xs md:p-4 py-4 border-[#FFC851] border-x {field ==
									1 && 'border-l-0'} {field == 2 && 'border-r-0'}"
							>
								<p
									class="min-h-[3rem] flex items-center justify-center flex-col md:text-[1.56rem] font-semibold"
								>
									{@html $_(`sales-details-table.columns.${field}`)}
									<br />
									<span
										class="text-white text-opacity-70 md:text-opacity-100 text-[0.625rem] font-medium md:text-[0.9rem]"
									>
										{@html $_(`sales-details-table.headers.${field}`)}
									</span>
								</p>
							</th>
						{/each}
					</tr>
				</thead>
				<tbody>
					{#each [1, 2, 3, 4, 5, 6, 7, 8, 9] as row}
						<tr class="">
							{#each [1, 2, 3] as field}
								<td
									class="{field > 1
										? 'w-[38%]'
										: 'w-[23%]'} md:text-[1.125rem] md:leading-5 md:m-8 text-[0.625rem] leading-[1.2em] border {field ==
									1
										? 'border-[#EEA566] p-6 bg-[#FFC087] font-semibold'
										: 'border-[#FFC851] py-[1.75rem]'} border-l-0 {field == 3 &&
										'border-r-0'} {row == 9 && 'border-b-0'}"
								>
									<p
										class="flex flex-col gap-4 items-center justify-center {field == 1
											? 'text-white uppercase'
											: 'normal-text font-medium ' +
												((row == 7 || row == 8) && 'mx-[0.15rem] md:mx-6')}"
									>
										{@html $_(`sales-details-table.row-${row}.value-${field}`)}
										{#if row == 7 && (field == 2 || field == 3)}
											<span
												class="text-gray-400 text-[0.5rem] md:text-[0.875rem] mx-[0.5em] leading-[0.75rem] md:leading-5 font-normal"
											>
												{@html $_(`note-locked`)}
											</span>
										{/if}
									</p>
								</td>
							{/each}
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
	</section>
</main>
