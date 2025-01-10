<script lang="ts">
	import { _ } from 'svelte-i18n';
	import {
		arrowright,
		berachain,
		berachain_small,
		down,
		downlong,
		extended,
		extended_small,
		flywheel,
		flywheelsmall,
		infrared,
		leftright,
		replicated,
		replicated_small,
		rightwhite,
		updown
	} from '../../../consts/images';
</script>

<main class="xl:w-[1172px] w-full md:my-[7.5rem] md:mx-auto mx-0 px-5 py-6">
	<section class="w-full">
		<h2
			class="normal-text font-bold md:text-[2.5rem] text-[2rem] text-start md:mb-[3.125rem] mb-6 tracking-wider leading-none"
		>
			{@html $_('flywheel')}
		</h2>
		<div class="md:px-[4.375rem] pt-[4.375rem] px-0 w-full relative">
			<div class="flex flex-row justify-center md:gap-8 w-full">
				<div class="rounded-tile w-1/3">
					{@html $_('flywheel-desc-tile-1')}
				</div>
				<div class="rounded-tile w-1/3">
					{@html $_('flywheel-desc-tile-2')}
				</div>
			</div>
			<div class="flex flex-row justify-around mx-auto w-full md:py-[66px] py-[22px] relative">
				<div
					class="w-1/3 flex flex-col mx-auto justify-around md:content-center flex-wrap content-end items-stretch gap-4"
				>
					<div class="rounded-tile">
						{@html $_('flywheel-desc-tile-3')}
					</div>
					<div class="rounded-tile">
						{@html $_('flywheel-desc-tile-5')}
					</div>
				</div>
				<div class="w-1/3 text-center items-center flex">
					<img class="m-auto w-5/6 md:hidden block" src={flywheelsmall} alt="Flywheel" />
					<img class="m-auto md:block hidden" src={flywheel} alt="Flywheel" />
				</div>
				<div
					class="w-1/3 flex flex-col mx-auto justify-around md:content-center flex-wrap content-start items-stretch gap-4"
				>
					<div class="rounded-tile">
						{@html $_('flywheel-desc-tile-4')}
					</div>
					<div class="rounded-tile">
						{@html $_('flywheel-desc-tile-6')}
					</div>
				</div>
			</div>
			<div class="flex flex-row justify-center md:gap-8 mx-auto w-full">
				<div class="rounded-tile w-1/3">
					{@html $_('flywheel-desc-tile-7')}
				</div>
				<div class="rounded-tile w-1/3">
					{@html $_('flywheel-desc-tile-8')}
				</div>
			</div>
		</div>
		<div class="flex flex-col sm:px-14 relative">
			<div class="h-auto overflow-clip md:mt-[3.125rem] mb-[1.875rem] mt-6 relative">
				<h4
					class="normal-text rounded-[50px] border-[1px] border-[#183973] font-eudoxus uppercase md:text-lg text-xs md:px-[1.8125rem] md:py-5 p-3 md:leading-3 leading-[1.125rem] md:mx-[43px] mx-12 z-20 bg-white relative font-extrabold text-center"
				>
					{@html $_('flywheel-vs-title')}
				</h4>
				<div
					class="absolute w-[100%] h-[200%] md:mt-[-3%] sm:mt-[-5%] mt-[-7%] rounded-[30px] border-[1px] border-[#183973]"
				></div>
			</div>
			<div
				class="flex md:flex-row flex-col md:justify-between px-1 gap-6 md:gap-[2.5rem] items-start"
			>
				<div class="md:w-[calc(50%-1.25rem)] rounded-[1.625rem] overflow-clip shadow-xl">
					<p
						class="uppercase md:tracking-wider text-white font-bold leading-3 md:p-[2.33rem] text-[2rem] md:text-[3.3rem] p-6 text-center bg-gradient-to-r from-[#FF9601] to-[#FFC401]"
					>
						{@html $_('flywheel-extended')}
					</p>
					<div class="flex flex-col md:py-11 py-6 items-center md:text-xs text-[0.5rem]">
						<div
							class="rounded-tile-left normal-text text-center w-[7.425rem] px-5 py-2 md:px-1 md:py-3"
						>
							{@html $_('flywheel-extended-tile-top')}
						</div>
						<div class="flex flex-row justify-between gap-3">
							<div class="flex flex-col w-max gap-3 my-auto">
								<div
									class="rounded-tile-left normal-text py-3 md:px-2 md:w-[8.25rem] px-[0.625rem] w-[6.6275rem]"
								>
									<p class="font-bold uppercase">
										{@html $_('flywheel-tile-user-want')}:
									</p>
									<div class="list-disc md:ml-6 ml-2">
										<p class="list-item">{@html $_('flywheel-extended-tile-user-want-1')}</p>
										<p class="list-item">{@html $_('flywheel-tile-user-want-2')}</p>
									</div>
								</div>
								<div
									class="rounded-tile-left normal-text text-center py-3 md:px-2 md:w-[8.25rem] px-[0.625rem] w-[6.6275rem] font-medium"
								>
									{@html $_('flywheel-extended-tile-contribute')}
								</div>
								<div
									class="rounded-tile-left normal-text text-center py-3 md:px-2 md:w-[8.25rem] px-[0.625rem] w-[6.6275rem]"
								>
									{@html $_('flywheel-extended-tile-convert')}
								</div>
							</div>
							<div class="flex flex-col w-max justify-center">
								<img class="md:hidden block" src={extended_small} alt={$_('flywheel-extended')} />
								<img class="md:block hidden" src={extended} alt={$_('flywheel-extended')} />
							</div>
							<div class="flex flex-col w-max gap-3">
								<div
									class="rounded-tile-left normal-text text-center py-3 md:px-2 px-[0.625rem] w-[6rem] md:w-[7.425rem]"
								>
									{@html $_('flywheel-tile-stake')}
								</div>
								<div
									class="rounded-tile-left normal-text text-center py-3 md:px-2 px-[0.625rem] w-[6rem] md:w-[7.425rem]"
								>
									{@html $_('flywheel-extended-tile-earn')}
								</div>
								<div
									class="rounded-tile-left normal-text text-center py-3 md:px-2 px-[0.625rem] w-[6rem] md:w-[7.425rem]"
								>
									{@html $_('flywheel-tile-earn-reward')}
								</div>
								<div
									class="rounded-tile-left normal-text text-center py-3 md:px-5 px-[0.625rem] w-[6rem] md:w-[7.425rem]"
								>
									{@html $_('flywheel-tile-rollup')}
								</div>
							</div>
						</div>
						<div
							class="rounded-tile-left normal-text text-center py-3 md:px-5 w-[7.425rem] mb-[1.125rem]"
						>
							{@html $_('flywheel-extended-tile-bottom')}
						</div>
						<p class="normal-text md:text-xs">{@html $_('flywheel-extended-description-1')}</p>
						<p class="normal-text md:text-xs">{@html $_('flywheel-extended-description-2')}</p>
					</div>
					<div
						class="py-[2.375rem] px-[1.3125rem] bg-gradient-to-r from-[#FF9500] to-[#FFC400] text-white text-center"
					>
						<div class="flex flex-row">
							<div class="flex flex-col justify-around gap-1 h-max text-[0.625rem]">
								<div class="flex flex-row">
									<div class="flex flex-col">
										<img class="h-5 mb-3" src={updown} alt="" />
										<div
											class="rounded-[1.05rem] bg-[#f4f4f4] p-5 flex-1 flex flex-col gap-[0.625rem]"
										>
											<img class="mx-[-1.25rem]" src={infrared} alt="" />
											<div class="list-disc pl-4 text-start">
												<p class="list-item normal-text">
													{@html $_('flywheel-infrared-1')}
												</p>
												<p class="list-item normal-text">
													{@html $_('flywheel-infrared-2')}
												</p>
												<p class="list-item normal-text">
													{@html $_('flywheel-infrared-3')}
												</p>
											</div>
											<p class="normal-text">
												{@html $_('flywheel-infrared-desc-1')}
											</p>
										</div>
									</div>
									<img class="w-[1.255] mx-1" src={leftright} alt="" />
									<div class="flex flex-col">
										<img class="h-5 mb-3" src={down} alt="" />
										<div class="flex rounded-[1.05rem] bg-[#f4f4f4] p-5 flex-1 items-center">
											<div class="flex flex-col justify-center gap-[1.02rem]">
												<p class="normal-text md:text-[0.625rem]">
													{@html $_('flywheel-infrared-desc-2')}
												</p>
												<p class="normal-text md:text-[0.625rem]">
													{@html $_('flywheel-infrared-desc-3')}
												</p>
											</div>
										</div>
									</div>
								</div>
								<div
									class="flex flex-row w-[calc(50%-0.725rem)] justify-center pt-[0.625rem] pb-[0.875rem]"
								>
									<img class="h-5" src={updown} alt="" />
								</div>
							</div>
							<img class="w-max" src={downlong} alt="" />
						</div>
						<img class="md:block hidden" src={berachain} alt="" />
						<img class="md:hidden block w-full" src={berachain_small} alt="" />
					</div>
				</div>
				<div class="md:w-[calc(50%-1.25rem)] rounded-[1.625rem] overflow-clip shadow-xl">
					<p
						class="uppercase md:tracking-wider text-white font-bold leading-3 md:p-[2.33rem] text-[2rem] md:text-[3.3rem] p-6 text-center bg-gradient-to-r from-[#FF7B04] to-[#FF9F04]"
					>
						{@html $_('flywheel-replicated')}
					</p>
					<div class="flex flex-col md:py-11 pt-6 items-center text-[0.5rem] md:text-xs">
						<div
							class="rounded-tile-left normal-text text-center w-[7.425rem] px-5 py-2 md:px-1 md:py-3"
						>
							{@html $_('flywheel-replicated-tile-top')}
						</div>
						<div class="flex flex-row justify-between gap-3">
							<div class="flex flex-col w-max gap-3 my-auto">
								<div
									class="rounded-tile-left normal-text md:py-3 md:px-2 md:w-[8.25rem] px-[0.625rem] w-[6.6275rem]"
								>
									<p class="font-bold uppercase md:text-xs">
										{@html $_('flywheel-tile-user-want')}:
									</p>
									<div class="list-disc md:ml-6">
										<p class="list-item">{@html $_('flywheel-replicated-tile-user-want-1')}</p>
										<p class="list-item">{@html $_('flywheel-tile-user-want-2')}</p>
										<p class="list-item">{@html $_('flywheel-replicated-tile-user-want-3')}</p>
									</div>
								</div>
								<div
									class="rounded-tile-left normal-text text-center md:py-3 md:px-2 md:w-[8.25rem] px-[0.625rem] w-[6.6275rem] font-medium"
								>
									{@html $_('flywheel-replicated-tile-validators')}
								</div>
							</div>
							<div class="flex flex-col w-max justify-center">
								<img
									class="md:hidden block"
									src={replicated_small}
									alt={$_('flywheel-replicated')}
								/>
								<img class="md:block hidden" src={replicated} alt={$_('flywheel-replicated')} />
							</div>
							<div class="flex flex-col w-max gap-3">
								<div
									class="rounded-tile-left normal-text text-center py-3 px-[0.625rem] w-[6rem] md:px-2 md:w-[7.425rem]"
								>
									{@html $_('flywheel-tile-stake')}
								</div>
								<div
									class="rounded-tile-left normal-text text-center py-3 px-[0.625rem] w-[6rem] md:px-2 md:w-[7.425rem]"
								>
									{@html $_('flywheel-replicated-tile-earn')}
								</div>
								<div
									class="rounded-tile-left normal-text text-center py-3 px-[0.625rem] w-[6rem] md:px-2 md:w-[7.425rem]"
								>
									{@html $_('flywheel-tile-earn-reward')}
								</div>
								<div
									class="rounded-tile-left normal-text text-center py-3 px-[0.625rem] w-[6rem] md:px-5 md:w-[7.425rem]"
								>
									{@html $_('flywheel-tile-rollup')}
								</div>
							</div>
						</div>
						<div
							class="rounded-tile-left normal-text text-center py-3 px-[0.625rem] w-[6rem] md:px-5 md:w-[7.425rem] mb-[1.875rem]"
						>
							{@html $_('flywheel-replicated-tile-bottom')}
						</div>
						<p class="normal-text md:text-xs md:pb-0 pb-6">
							{@html $_('flywheel-replicated-description')}
						</p>
					</div>
					<div
						class="gradient-bg py-[2.375rem] px-[1.3125rem] text-white md:text-center text-start md:py-[4.625rem] md:px-11 gap-[1.875rem] flex flex-col"
					>
						<div>
							<h4 class="md:text-[1.105rem] text-[1rem] font-medium">
								{@html $_('flywheel-aggregate-title')}
							</h4>
							<div class="flex flex-col ml-8 md:pt-5 md:gap-[0.625rem]">
								{#each [1, 2, 3] as i}
									<p class="flex flex-row">
										<img class="mr-2" src={rightwhite} alt="" />
										<span class="md:text-[0.88375rem] text-[0.875rem]"
											>{@html $_(`flywheel-aggregate-list-${i}`)}</span
										>
									</p>
								{/each}
							</div>
						</div>
						<div class="flex flex-row md:text-[0.625rem] text-[0.5rem]">
							<div
								class="rounded-tile-right normal-text text-center md:p-5 p-4 md:w-[12rem] flex items-center flex-1"
							>
								{@html $_('flywheel-aggregate-tile-1')}
							</div>
							<img class="mx-[0.625rem]" src={arrowright} alt="" />
							<div class="rounded-tile-right normal-text text-start md:p-5 p-4 flex-1">
								{@html $_('flywheel-aggregate-tile-example')}
								<div class="list-disc ml-3">
									{#each [1, 2, 3, 4] as i}
										<p class="list-item">{@html $_(`flywheel-aggregate-tile-example-${i}`)}</p>
									{/each}
								</div>
							</div>
						</div>
						<div class="flex flex-col md:text-[0.625rem] text-[0.5rem]">
							<div class="rounded-tile-right normal-text text-center md:p-5 p-4 w-full">
								{@html $_('flywheel-aggregate-tile-2')}
							</div>
							<img class="my-[0.625rem] h-8" src={down} alt="" />
							<div class="rounded-tile-right normal-text text-center py-6 px-12 w-full">
								<p class="md:pb-[0.625rem]">{@html $_('flywheel-aggregate-tile-3-1')}</p>
								<p>{@html $_('flywheel-aggregate-tile-3-2')}</p>
							</div>
						</div>
						<div class="flex flex-row md:text-[0.625rem] text-[0.5rem] items-center">
							<div
								class="md:rounded-[1.05rem] rounded-xl bg-white md:text-[0.625rem] normal-text text-center px-5 py-6 md:w-[12rem] flex items-center justify-center flex-1"
							>
								{@html $_('flywheel-aggregate-tile-4')}
							</div>
							<img class="mx-[0.625rem] md:w-8" src={leftright} alt="" />
							<div
								class="md:rounded-[1.05rem] rounded-xl bg-white md:text-[0.625rem] normal-text text-center px-5 py-6 flex-1"
							>
								{@html $_('flywheel-aggregate-tile-5')}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</main>

<style>
	.rounded-tile {
		border: 1px solid #ffc851;
		background: linear-gradient(0deg, rgba(255, 14, 14, 0.2), rgba(255, 14, 14, 0.2)),
			linear-gradient(90deg, #ff9500 0.13%, #ffc400 100.13%);
		color: white;
		border-radius: 8px;
		padding: 0.5rem;
		margin: 0 11px;
		font-size: 0.5rem;
		text-align: center;
	}
	@media (min-width: 768px) {
		.rounded-tile {
			border-radius: 22px;
			padding: 2rem;
			font-size: 22px;
			line-height: 1.5rem;
		}
	}
	.rounded-tile-left {
		border-radius: 0.5rem;
		background-color: #f4f4f4;
	}
	@media (min-width: 768px) {
		.rounded-tile-left {
			font-size: 0.75rem;
		}
	}
	.rounded-tile-right {
		border-radius: 0.75rem;
		background-color: #f4f4f4;
	}
	@media (min-width: 768px) {
		.rounded-tile-right {
			border-radius: 1.05rem;
		}
	}
	.gradient-bg {
		background: linear-gradient(0deg, rgba(255, 14, 14, 0.2), rgba(255, 14, 14, 0.2)),
			linear-gradient(90deg, #ff9500 0.13%, #ffc400 100.13%);
	}
</style>
