<script lang="ts">
	import { _ } from 'svelte-i18n';
	import * as images from '../../../consts/images';

	const coreTeam = [
		{
			name: 'team-core-member-1.name',
			role: 'team-core-member-1.role',
			image: images.teamcore1,
			image_mobile: images.teamcore1_mobile,
			description: Array.from({ length: 4 }, (val, i) => `team-core-member-1.desc-${i + 1}`)
		},
		{
			name: 'team-core-member-2.name',
			role: 'team-core-member-2.role',
			image: images.teamcore2,
			image_mobile: images.teamcore2_mobile,
			description: Array.from({ length: 4 }, (val, i) => `team-core-member-2.desc-${i + 1}`)
		}
	];
	const members = Array.from({ length: 5 }, (val, i) => {
		return {
			name: `team-member-${i + 1}.name`,
			role: `team-member-${i + 1}.role`,
			image: (images as Record<string, string>)[`team${i + 1}`]
		};
	});
</script>

<main class="lg:w-[851px] w-full md:py-[7.5rem] md:mx-auto md:p-0 px-5 py-6">
	<section class="flex flex-col gap-10">
		<div class="flex flex-col justify-center items-center mx-auto">
			<img class="h-full" src={images.full_logo} alt="sunrise" />
			<h2
				class="normal-text font-medium md:text-[3.125rem] text-[2rem] text-center tracking-wider leading-none pt-6 md:pb-[0.625rem]"
			>
				{@html $_('coreteam-title')}
			</h2>
		</div>
		<div class="flex flex-col">
			<div class="rounded-box-custom md:px-[3.375rem] md:py-12 px-3 py-6">
				<div class="flex flex-col md:gap-[3.125rem] gap-6">
					{#each coreTeam as person}
						<div class="flex flex-row md:gap-[1.875rem] gap-3">
							<img class="h-[100%] md:block hidden" src={person.image} alt={person.name} />
							<img class="h-[100%] md:hidden block" src={person.image_mobile} alt={person.name} />
							<div class="flex flex-col">
								<h5 class="uppercase normal-text font-semibold md:text-3xl text-[1.25rem]">
									{$_(person.name)}
								</h5>
								<h6 class="highlight-text font-medium md:text-2xl text-[1.125rem] pb-[1.125rem]">
									{$_(person.role)}
								</h6>
								<div class="px-[0.625rem]">
									{#each person.description as desc}
										<div class="flex flex-row">
											<div
												class="rounded-full p-[0.15rem] h-[0.3rem] md:mt-2 mx-2 my-auto bg-[#183973]"
											></div>
											<p class="md:text-[1rem] text-sm normal-text">{$_(desc)}</p>
										</div>
									{/each}
								</div>
							</div>
						</div>
					{/each}
					<div class="flex md:flex-row flex-col gap-6">
						<div class="md:w-[calc(50%-0.8rem)] flex flex-col flex-wrap gap-6">
							{#each members.slice(0, 3) as person}
								<div
									class="flex flex-row rounded-xl overflow-clip border border-[#FFC851] bg-[#FFEBA8]"
								>
									<img class="h-full" src={person.image} alt={person.name} />
									<div class="flex flex-col px-4 justify-center">
										<h5 class="uppercase normal-text font-semibold md:text-xl">
											{$_(person.name)}
										</h5>
										<h6 class="highlight-text font-medium md:text-base">
											{$_(person.role)}
										</h6>
									</div>
								</div>
							{/each}
						</div>
						<div class="md:w-[calc(50%-0.8rem)] flex flex-col flex-wrap gap-6">
							{#each members.slice(-2) as person}
								<div
									class="flex flex-row rounded-xl overflow-clip border border-[#FFC851] bg-[#FFEBA8]"
								>
									<img class="h-full" src={person.image} alt={person.name} />
									<div class="flex flex-col px-4 justify-center">
										<h5 class="uppercase normal-text font-semibold md:text-xl">
											{$_(person.name)}
										</h5>
										<h6 class="highlight-text font-medium md:text-base">
											{$_(person.role)}
										</h6>
									</div>
								</div>
							{/each}
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</main>
