<script lang="ts">
	import { _ } from 'svelte-i18n';
	import Label from '$lib/components/Label.svelte';

	function openDoc() {
		if (
			confirm(
				'This crypto-asset marketing communication has not been reviewed or approved by any competent authority in any Member State of the European Union. The person seeking admission to trading of the crypto-asset is solely responsible for the content of this crypto-asset marketing communication.\r\n\r\n Do you acknowledge and agree to the above disclaimer?'
			)
		) {
			open('https://docs.sunriselayer.io', '_blank');
		}
	}
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
			<div class="flex flex-col gap-[0.625rem] items-center">
				<button class="text-center" on:click={openDoc}>
					<Label
						className="md:text-base text-xs text-opacity-60 font-medium hover:text-[#FDA60B]"
						text={$_('header-footer.docs')}
					/>
				</button>
				<a
					class="hover:text-[#FDA60B] flex transition-all duration-300"
					href="https://github.com/SunriseLayer"
					target="_blank"
				>
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
			<div class="flex flex-col gap-[0.625rem] items-center">
				<a
					class="hover:text-[#FDA60B] flex transition-all duration-300"
					href="https://testnet.app.sunriselayer.io"
					target="_blank"
				>
					<Label
						className="md:text-base text-xs text-opacity-60 font-medium"
						text={$_('header-footer.app')}
					/>
				</a>
				<a
					class="hover:text-[#FDA60B] flex transition-all duration-300"
					href="https://testnet.risescan.sunriselayer.io/"
					target="_blank"
				>
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
			<div class="flex flex-col gap-[0.625rem] items-center">
				<a
					class="hover:text-[#FDA60B] flex transition-all duration-300"
					href="https://sunriselayer.medium.com"
					target="_blank"
				>
					<Label
						className="md:text-base text-xs text-opacity-60 font-medium"
						text={$_('header-footer.blog')}
					/>
				</a>
				<a
					class="hover:text-[#FDA60B] flex transition-all duration-300"
					href="https://cauchye.notion.site/Careers-at-Sunrise-38a5b18e890d476fad755b9f3063d06b?pvs=4"
					target="_blank"
				>
					<Label
						className="md:text-base text-xs text-opacity-60 font-medium"
						text={$_('header-footer.jobs')}
					/>
				</a>
				<a
					class="hover:text-[#FDA60B] flex transition-all duration-300"
					href="https://github.com/SunriseLayer/brand-kit"
					target="_blank"
				>
					<Label
						className="md:text-base text-xs text-opacity-60 font-medium"
						text={$_('header-footer.press-kit')}
					/>
				</a>
			</div>
		</div>
	</div>
	<div class="flex flex-row gap-[1.125rem] justify-center md:pt-10 md:pb-20">
		<a
			class="hover:text-[#FDA60B] text-white flex transition-all duration-300"
			href="https://discord.gg/sunrise"
			target="_blank"
			aria-label="Discord"
		>
			<svg width="22" height="16" viewBox="0 0 22 16" fill="currentColor">
				<path
					d="M18.2701 1.33C16.9401 0.71 15.5001 0.26 14.0001 0C13.9737 0.000375705 13.9486 0.0111588 13.9301 0.0300002C13.7501 0.36 13.5401 0.79 13.4001 1.12C11.8091 0.880151 10.1911 0.880151 8.60012 1.12C8.46012 0.78 8.25012 0.36 8.06012 0.0300002C8.05012 0.0100002 8.02012 0 7.99012 0C6.49012 0.26 5.06012 0.71 3.72012 1.33C3.71012 1.33 3.70012 1.34 3.69012 1.35C0.970117 5.42 0.220117 9.38 0.590117 13.3C0.590117 13.32 0.600117 13.34 0.620117 13.35C2.42012 14.67 4.15012 15.47 5.86012 16C5.89012 16.01 5.92012 16 5.93012 15.98C6.33012 15.43 6.69012 14.85 7.00012 14.24C7.02012 14.2 7.00012 14.16 6.96012 14.15C6.39012 13.93 5.85012 13.67 5.32012 13.37C5.28012 13.35 5.28012 13.29 5.31012 13.26C5.42012 13.18 5.53012 13.09 5.64012 13.01C5.66012 12.99 5.69012 12.99 5.71012 13C9.15012 14.57 12.8601 14.57 16.2601 13C16.2801 12.99 16.3101 12.99 16.3301 13.01C16.4401 13.1 16.5501 13.18 16.6601 13.27C16.7001 13.3 16.7001 13.36 16.6501 13.38C16.1301 13.69 15.5801 13.94 15.0101 14.16C14.9701 14.17 14.9601 14.22 14.9701 14.25C15.2901 14.86 15.6501 15.44 16.0401 15.99C16.0701 16 16.1001 16.01 16.1301 16C17.8501 15.47 19.5801 14.67 21.3801 13.35C21.4001 13.34 21.4101 13.32 21.4101 13.3C21.8501 8.77 20.6801 4.84 18.3101 1.35C18.3001 1.34 18.2901 1.33 18.2701 1.33ZM7.52012 10.91C6.49012 10.91 5.63012 9.96 5.63012 8.79C5.63012 7.62 6.47012 6.67 7.52012 6.67C8.58012 6.67 9.42012 7.63 9.41012 8.79C9.41012 9.96 8.57012 10.91 7.52012 10.91ZM14.4901 10.91C13.4601 10.91 12.6001 9.96 12.6001 8.79C12.6001 7.62 13.4401 6.67 14.4901 6.67C15.5501 6.67 16.3901 7.63 16.3801 8.79C16.3801 9.96 15.5501 10.91 14.4901 10.91Z"
				/>
			</svg>
		</a>
		<a
			class="hover:text-[#FDA60B] text-white flex transition-all duration-300"
			href="https://twitter.com/SunriseLayer"
			target="_blank"
			aria-label="Twitter"
		>
			<svg width="18" height="16" viewBox="0 0 18 16" fill="currentColor">
				<path
					d="M14.1757 0H16.9357L10.9058 6.77822L18 16H12.4455L8.0955 10.4063L3.117 16H0.3555L6.8055 8.74973L0 0.0007376H5.6955L9.62775 5.11354L14.1757 0ZM13.2075 14.3759H14.7367L4.8645 1.5393H3.2235L13.2075 14.3759Z"
				/>
			</svg>
		</a>
	</div>
</footer>

<style>
	footer a {
		font-weight: bold;
	}
</style>
