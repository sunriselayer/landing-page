<script lang="ts">
	import { _ } from 'svelte-i18n';
	import { logo, sunrise, logos, logos1, logos2, logos3, logos4 } from '../../consts/images';
</script>

<main class="xl:w-[1104px] w-full md:my-[7.5rem] md:mx-auto md:p-0 px-5 py-6">
	<section class="">
		<div class="flex justify-center content-center mx-auto">
			<div class="flex gap-3 items-center">
				<img class="md:w-full h-full w-[45px]" src={logo} alt="logo" />
				<img class="md:w-full h-full w-[106px]" src={sunrise} alt="sunrise" />
			</div>
		</div>
		<div class="flex flex-col">
			<h2
				class="normal-text font-bold md:text-[3.125rem] text-[2rem] text-center tracking-wider leading-none pt-6 md:pb-[3.125rem] pb-10"
			>
				{@html $_('ecosystem-title')}
			</h2>
			<div class="text-center md:block hidden">
				<img class="w-full md:px-20" src={logos} alt={$_('ecosystem-title')}>
			</div>
			<div class="md:hidden flex w-full">
				<div class="flex flex-col gap-3 w-full">
					<img class="w-full md:px-20" src={logos1} alt={$_('ecosystem-title')}>
					<img class="w-full md:px-20" src={logos2} alt={$_('ecosystem-title')}>
					<img class="w-full md:px-20" src={logos3} alt={$_('ecosystem-title')}>
					<img class="w-full md:px-20" src={logos4} alt={$_('ecosystem-title')}>
				</div>
			</div>
		</div>
	</section>
</main>
