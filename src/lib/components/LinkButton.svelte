<script lang="ts">
	interface Props {
		className?: string;
		text: string;
		link: string;
		transparent?: boolean;
	}

	let { className, text, link, transparent }: Props = $props();
</script>

<a
	href={link}
	class={`${className || ''} btn-ghost rounded-lg font-medium  ${transparent ? 'text-white border-white hover:text-black hover:bg-gradient-to-b hover:from-[#EDBC64] hover:to-[#FDA60B]' : 'text-black bg-gradient-to-b from-[#EDBC64] to-[#FDA60B] hover:bg-none hover:text-white hover:border-white'} md:px-6 md:py-4 px-4 py-2 md:text-[1.25rem] text-[0.75rem] md:leading-[1.5rem] leading-none transition-all duration-300`}
>
	{text}
</a>
