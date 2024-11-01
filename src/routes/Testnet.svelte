<script lang="ts">
	import * as images from '../consts/images';
</script>

<main>
	<section class="gap-8 my-40 text-base-100">
		<div class="flex gap-4 justify-center my-8">
			<img src={images.color} alt="logo" />
			<img class="filter invert" src={images.sunrise} alt="sunrise" />
		</div>
		<h1 class="text-center font-orbitron text-4xl font-extrabold md:text-5xl xl:text-6xl">
			Testnet is live
		</h1>
		<button
			disabled
			class="my-8 btn btn-sm md:btn-md lg:btn-lg font-overpass text-blue-600 lg:text-xl"
		>
			<a href="https://testnet.app.sunriselayer.io" target="_blank">
				Testnet is under maintenance
			</a>
		</button>
	</section>
</main>

<style>
	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
	}

	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	h1 {
		width: 100%;
	}
</style>
