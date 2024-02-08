<script lang="ts">
	export let className: string;
	export let text: string;
</script>

<div class={className}>
	<span class="select-none text-inherit">{text}</span>
</div>
