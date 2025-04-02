<script lang="ts">
	import { onMount } from 'svelte';
	const STORAGE_KEY = 'disclaimer_accepted';
	let isVisible = false;
	const REDIRECT_URL = 'https://x.com/SunriseLayer';

	onMount(() => {
		const accepted = localStorage.getItem(STORAGE_KEY);
		if (!accepted) {
			isVisible = true;
		}
	});

	function handleAccept() {
		localStorage.setItem(STORAGE_KEY, 'true');
		isVisible = false;
	}

	function handleReject() {
		window.location.href = REDIRECT_URL;
	}
</script>

{#if isVisible}
	<div class="fixed bottom-0 left-0 right-0 bg-white shadow-lg border-t border-gray-200 p-4 z-50">
		<div class="container mx-auto">
			<div class="flex flex-col gap-4">
				<div class="flex flex-col gap-2">
					<h3 class="font-bold text-lg">Disclaimer</h3>
					<p class="text-sm text-gray-700">
						By viewing, interacting with or otherwise using the Site, you are agreeing to the
						Privacy Policy and Terms of Service for the Site. <br />Please check below to certify
						you have read and understood and are agreeing to be bound by the Terms and Conditions in
						their entirety.
					</p>
					<div class="flex gap-2 text-sm">
						<a
							href="/docs/Sunrise - Privacy Policy (240815_clean)(GS).pdf"
							target="_blank"
							class="text-blue-600 underline-offset-4 hover:underline"
						>
							Privacy Policy
						</a>
						<span>|</span>
						<a
							href="/docs/Sunrise - Terms and Conditions of Use (250314_clean)(GS).pdf"
							target="_blank"
							class="text-blue-600 underline-offset-4 hover:underline"
						>
							Terms of Service
						</a>
					</div>
				</div>

				<div class="flex flex-col gap-2">
					<h3 class="font-bold text-lg">Use of Cookies</h3>
					<p class="text-sm text-gray-700">
						We use technical cookies to make the Site work. We would also like to use from time to
						time analytics cookies to improve your user experience. <br />Non-essential cookies will
						be set only if you accept. You can manage your non-essential cookies using the Cookie
						Settings on your browser.
					</p>
				</div>

				<div class="flex justify-end gap-4">
					<button
						class="btn btn-sm md:btn-md btn-outline font-overpass text-red-600 lg:text-xl"
						on:click={handleReject}
					>
						Reject
					</button>
					<button
						class="btn btn-sm md:btn-md font-overpass text-blue-600 lg:text-xl"
						on:click={handleAccept}
					>
						Accept
					</button>
				</div>
			</div>
		</div>
	</div>
{/if}
