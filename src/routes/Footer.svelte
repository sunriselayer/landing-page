<script>
	import Label from '$lib/components/Label.svelte';
	import * as images from '../consts/images';
</script>

<footer class="footer p-12 text-black z-30 bg-base-100">
	<div class="flex flex-col lg:flex-row gap-1 lg:gap-24 xl:gap-32 md:px-2">
		<div class="flex justify-between items-start">
			<div class="flex gap-3 items-center">
				<img class="md:w-full h-full" src={images.color} alt="logo" />
				<img class="md:w-full h-full" src={images.sunrise} alt="sunrise" />
			</div>
		</div>
		<span class="flex-auto"></span>
		<div class="flex w-full gap-4 sm:justify-between">
			<div class="ibm-plex-sans flex flex-col gap-1">
				<Label className="md:text-xl font-bold text-lg text-slate-500" text="Developers" />
				<a href="https://docs.sunriselayer.io" target="_blank">
					<Label className="md:text-base text-xs font-medium" text="Docs" />
				</a>
				<a href="https://github.com/SunriseLayer" target="_blank">
					<Label className="md:text-base text-xs font-medium" text="GitHub" />
				</a>
			</div>
			<div class="ibm-plex-sans flex flex-col gap-1">
				<Label className="md:text-xl font-bold text-lg text-slate-500" text="Services" />
				<a href="https://testnet.app.sunriselayer.io" target="_blank">
					<Label className="md:text-base text-xs font-medium" text="App (Testnet)" />
				</a>
				<a href="https://testnet.risescan.sunriselayer.io/" target="_blank">
					<Label className="md:text-base text-xs font-medium" text="Explorer (Testnet)" />
				</a>
			</div>
			<div class="ibm-plex-sans flex flex-col gap-1">
				<Label className="md:text-xl font-bold text-lg text-slate-500" text="Information" />
				<a href="https://sunriselayer.medium.com" target="_blank">
					<Label className="md:text-base text-xs font-medium" text="Blog" />
				</a>
				<a
					href="https://cauchye.notion.site/Careers-at-Sunrise-38a5b18e890d476fad755b9f3063d06b?pvs=4"
					target="_blank"
				>
					<Label className="md:text-base text-xs font-medium" text="Jobs" />
				</a>
				<a href="https://github.com/SunriseLayer/brand-kit" target="_blank">
					<Label className="md:text-base text-xs font-medium" text="Press Kit" />
				</a>
			</div>
			<div class="ibm-plex-sans flex flex-col gap-1">
				<Label className="md:text-xl font-bold text-lg text-slate-500" text="Social" />
				<div class="grid grid-flow-col gap-4">
					<a href="https://discord.gg/sunrise" target="_blank">
						<img class="h-6 w-6" src={images.discord} alt="discord" />
					</a>
					<a href="https://twitter.com/SunriseLayer" target="_blank">
						<img class="h-6 w-6" src={images.twitter} alt="twitter" />
					</a>
				</div>
			</div>
		</div>
	</div>
</footer>
<footer class="footer footer-center p-4 text-black z-30 bg-base-100">
	<aside class="mb-4">
		<p class="text-sm">
			This crypto-asset marketing communication has not been reviewed or approved by any competent
			authority in any Member State of the European Union.
		</p>
		<p class="text-sm">
			The person seeking admission to trading of the crypto-asset is solely responsible for the
			content of this crypto-asset marketing communication.
		</p>
	</aside>
	<aside>
		<p>Sunrise © - All rights reserved. 2024</p>
	</aside>
</footer>

<style>
	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
	}

	footer a {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}
</style>
