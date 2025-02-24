<script lang="ts">
	import { _ } from 'svelte-i18n';
	const fields = ['daLayer', 'throughput', 'confirmationTime', 'verification', 'networkSecurity'];
</script>

<main class="xl:w-[1104px] w-full md:py-[7.5rem] md:mx-auto md:p-0 px-5 py-12">
	<section class="">
		<h2
			class="normal-text font-medium md:text-[2.5rem] text-[2rem] text-start md:mb-[3.125rem] mb-6 tracking-wider leading-none"
		>
			{@html $_('closer-title')}
		</h2>
		<div class="h-auto overflow-clip px-1 md:mt-[3.125rem] md:mb-[1.875rem] my-6 relative">
			<h4
				class="normal-text rounded-[50px] border-[1px] border-[#183973] font-eudoxus uppercase md:text-2xl text-xs md:px-[1.8125rem] md:py-5 p-3 md:leading-4 leading-[1.125rem] md:w-max md:mx-auto mx-12 z-20 bg-white relative font-extrabold text-center"
			>
				{@html $_('data-availability')}
			</h4>
			<div
				class="absolute w-[calc(100%-29px)] h-[200%] md:mt-[-28px] mt-[-30px] rounded-[30px] border-[1px] border-[#183973] md:mx-0 mx-[14.5px]"
			></div>
		</div>
		<div class="border border-[#FFC851] rounded-box-custom">
			<table class="text-center text-sm overflow-hidden rounded-box-custom border-none break-words">
				<thead>
					<tr
						class="bg-gradient-to-r from-[#FF7E2E] to-[#FFA004] text-white uppercase tracking-wider"
					>
						{#each fields as field}
							<th
								class="font-medium md:text-lg text-[0.625rem] md:p-4 py-4 border-[#FFC851] border-x {field ==
									'daLayer' && 'border-l-0'} {field == 'networkSecurity' && 'border-r-0'}"
								>{@html $_(`closer-table.headers.${field}`)}</th
							>
						{/each}
					</tr>
				</thead>
				<tbody>
					{#each [1, 2, 3, 4, 5] as row}
						<tr class="">
							{#each fields as field}
								<td
									class="w-1/5 md:h-[6.25rem] h-auto normal-text md:text-lg text-[0.625rem] md:p-4 py-4 border {row ==
									1
										? 'bg-[#FECD45CC] border-[#FFC851]'
										: 'border-[#FFC851]'} border-l-0 {field == 'networkSecurity' &&
										'border-r-0'} {row == 5 && 'border-b-0'}"
									>{@html $_(`closer-table.row-${row}.${field}`)}</td
								>
							{/each}
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
		<div class="flex justify-center md:mt-[4.375rem] pt-6">
			<a
				href="/#"
				class="hover:opacity-60 bg-gradient-to-r from-[#003F92] to-[#0163D3] md:from-[#003F92] md:to-[#0163D3] shadow-[#014093] shadow-[0px_4px_5px_0px_#00000026] text-white uppercase tracking-wider md:px-10 md:py-[1.875rem] rounded-2xl md:text-[1.5rem] text-lg p-6 leading-6 cursor-pointer"
			>
				{@html $_('learn-more')}
			</a>
		</div>
	</section>
</main>

<style>
	h2 {
		background: linear-gradient(90deg, #003f92 0.13%, #0063d3 100.13%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
		text-fill-color: transparent;
	}
</style>
