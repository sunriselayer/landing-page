<script lang="ts">
	import { _ } from 'svelte-i18n';
	import Label from '$lib/components/Label.svelte';
	import * as images from '../../consts/images';
</script>

<footer
	class="footer md:py-12 px-12 py-6 text-white text-opacity-55 z-30 xl:w-[1140px] flex flex-col mx-auto items-center gap-6"
>
	<div class="flex gap-4 flex-row justify-evenly w-full text-center items-center">
		<div class="ibm-plex-sans flex flex-col gap-4 flex-1 self-start">
			<Label
				className="md:text-base font-bold text-xs text-white text-opacity-20"
				text={$_('header-footer.devs')}
			/>
			<div class="flex flex-col gap-[0.625rem]">
				<a href="https://docs.sunriselayer.io" target="_blank">
					<Label
						className="md:text-base text-xs text-opacity-60 font-medium"
						text={$_('header-footer.docs')}
					/>
				</a>
				<a href="https://github.com/SunriseLayer" target="_blank">
					<Label
						className="md:text-base text-xs text-opacity-60 font-medium"
						text={$_('header-footer.git')}
					/>
				</a>
			</div>
		</div>
		<div class="ibm-plex-sans flex flex-col gap-4 flex-1 self-start">
			<Label
				className="md:text-base font-bold text-xs text-white text-opacity-20"
				text={$_('header-footer.services')}
			/>
			<div class="flex flex-col gap-[0.625rem]">
				<a href="https://testnet.app.sunriselayer.io" target="_blank">
					<Label
						className="md:text-base text-xs text-opacity-60 font-medium"
						text={$_('header-footer.app')}
					/>
				</a>
				<a href="https://testnet.risescan.sunriselayer.io/" target="_blank">
					<Label
						className="md:text-base text-xs text-opacity-60 font-medium"
						text={$_('header-footer.explorer')}
					/>
				</a>
			</div>
		</div>
		<div class="ibm-plex-sans flex flex-col gap-4 flex-1 self-start">
			<Label
				className="md:text-base font-bold text-xs text-white text-opacity-20"
				text={$_('header-footer.about')}
			/>
			<div class="flex flex-col gap-[0.625rem]">
				<a href="https://sunriselayer.medium.com" target="_blank">
					<Label
						className="md:text-base text-xs text-opacity-60 font-medium"
						text={$_('header-footer.blog')}
					/>
				</a>
				<a
					href="https://cauchye.notion.site/Careers-at-Sunrise-38a5b18e890d476fad755b9f3063d06b?pvs=4"
					target="_blank"
				>
					<Label
						className="md:text-base text-xs text-opacity-60 font-medium"
						text={$_('header-footer.jobs')}
					/>
				</a>
				<a href="https://github.com/SunriseLayer/brand-kit" target="_blank">
					<Label
						className="md:text-base text-xs text-opacity-60 font-medium"
						text={$_('header-footer.press-kit')}
					/>
				</a>
			</div>
		</div>
	</div>
	<div class="flex flex-row gap-[1.125rem] justify-center md:pt-10 md:pb-20">
		<a href="https://discord.gg/sunrise" target="_blank">
			<img class="h-6 w-6" src={images.discord} alt="discord" />
		</a>
		<a href="https://twitter.com/SunriseLayer" target="_blank">
			<img class="h-6 w-6" src={images.twitter} alt="twitter" />
		</a>
	</div>
</footer>

<style>
	footer a {
		font-weight: bold;
	}
</style>
