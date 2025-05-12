<script lang="ts">
	import { _ } from 'svelte-i18n';
	import {
		logo,
		sunrise,
		logos,
		logos1,
		logos2,
		logos3,
		logos4,
		branchHaru,
		branchHaruSP
	} from '../../../consts/images';
</script>

<main class="w-full md:pb-[3.125rem] md:p-0 px-5 py-12 relative">
	<img class="absolute left-0 top-0 hidden md:block" src={branchHaru} alt="" />
	<section class="xl:w-[1104px] w-full md:mx-auto">
		<div class="flex justify-center content-center mx-auto">
			<div class="flex gap-3 items-center">
				<img class="w-[45px]" src={logo} alt="logo" />
				<img class="w-[95px]" src={sunrise} alt="sunrise" />
			</div>
		</div>
		<div class="flex flex-col">
			<h2
				class="flex gap-[0.625rem] items-center normal-text font-medium md:text-[3.125rem] text-[2rem] justify-center tracking-wider leading-none pt-6 md:pb-[3.125rem] pb-10"
			>
				{@html $_('ecosystem-title')}
			</h2>
			<div class="text-center md:block hidden">
				<img class="w-full md:px-20" src={logos} alt={$_('ecosystem-title')} />
			</div>
			<div class="md:hidden flex w-full">
				<div class="flex flex-col gap-3 w-full">
					<div class="flex w-full">
						<img class="md:hidden h-14" src={branchHaruSP} alt="" />
						<img class="w-[calc(100%-3.5rem)] md:px-20" src={logos1} alt={$_('ecosystem-title')} />
					</div>
					<img class="w-full md:px-20" src={logos2} alt={$_('ecosystem-title')} />
					<img class="w-full md:px-20" src={logos3} alt={$_('ecosystem-title')} />
					<img class="w-full md:px-20" src={logos4} alt={$_('ecosystem-title')} />
				</div>
			</div>
		</div>
	</section>
</main>
