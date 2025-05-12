<script lang="ts">
	interface Props {
		className: string;
		text: string;
	}

	let { className, text }: Props = $props();
</script>

<div class={className}>
	<span class="text-inherit">{text}</span>
</div>
