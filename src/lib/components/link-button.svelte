<script lang="ts">
	// A link styled as a button. Disabled renders a non-interactive control so
	// closed Cosmos Sunrise destinations cannot be opened from the old site.
	interface Props {
		className?: string;
		text: string;
		link: string;
		transparent?: boolean;
		disabled?: boolean;
	}

	let { className, text, link, transparent, disabled = false }: Props = $props();

	const appearance = `${className || ''} btn-ghost rounded-lg font-medium md:px-6 md:py-4 px-4 py-2 md:text-[1.25rem] text-[0.75rem] md:leading-[1.5rem] leading-none transition-all duration-300`;
	const colors = transparent
		? 'text-white border-white hover:text-[#010E25] hover:bg-gradient-to-b hover:from-[#EDBC64] hover:to-[#FDA60B]'
		: 'text-[#010E25] bg-gradient-to-b from-[#EDBC64] to-[#FDA60B] hover:bg-none hover:text-white hover:border-white';
</script>

{#if disabled}
	<span
		class="{appearance} {colors} cursor-not-allowed opacity-40"
		aria-disabled="true"
		title="Cosmos Sunrise has ended"
	>
		{text}
	</span>
{:else}
	<a href={link} class="{appearance} {colors}">
		{text}
	</a>
{/if}
