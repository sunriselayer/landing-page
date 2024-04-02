<script>
	import { page } from '$app/stores';
	import color from '$lib/images/color.svg';

	import { appTitle } from '../consts';

	let isEnglish = true;

	function toggleLanguage() {
		isEnglish = !isEnglish;
	}
</script>

<header>
	<div class="corner flex gap-2 items-center text-2xl">
		<img src={color} alt="SvelteKit" />
		<span>{appTitle}</span>
	</div>

	<nav class="items-center">
		<ul>
			<li class="flex items-center" aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
				<button on:click={toggleLanguage} class="items-center">
					{isEnglish ? 'English' : 'Japanese'}
				</button>
			</li>
			<li aria-current={$page.url.pathname === '/learn' ? 'page' : undefined}>
				<a href="https://docs.sunriselayer.io" target="_blank">Learn</a>
			</li>
			<li aria-current={$page.url.pathname === '/build' ? 'page' : undefined}>
				<a href="https://docs.sunriselayer.io/node/build-node" target="_blank">Build</a>
			</li>
			<!-- <li aria-current={$page.url.pathname === '/run-node' ? 'page' : undefined}>
				<a href="/run-node">Run a Node</a>
			</li> -->
		</ul>
	</nav>
</header>

<style>
	header {
		display: flex;
		justify-content: space-between;
	}

	.corner {
		width: 3em;
		height: 3em;
	}

	.corner a {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
	}

	.corner img {
		width: 2em;
		height: 2em;
		object-fit: contain;
	}

	nav {
		display: flex;
		justify-content: center;
	}

	svg {
		width: 2em;
		height: 3em;
		display: block;
	}

	path {
		fill: var(--background);
	}

	ul {
		position: relative;
		padding: 0;
		margin: 0;
		height: 3em;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		background: var(--background);
		background-size: contain;
	}

	li {
		position: relative;
		height: 100%;
	}

	li[aria-current='page']::before {
		--size: 6px;
		content: '';
		width: 0;
		height: 0;
		position: absolute;
		top: 0;
		left: calc(50% - var(--size));
		border: var(--size) solid transparent;
		border-top: var(--size) solid var(--color-theme-1);
	}

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 0.5rem;
		color: var(--color-text);
		font-weight: 700;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
	}

	a:hover {
		color: var(--color-theme-1);
	}
</style>
