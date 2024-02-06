<script lang="ts">
	export let text: string;
	export let fontFamily: string;
	export let textSize: string;
</script>

<div>
	<p class="${fontFamily} text-[${textSize}]">{text}</p>
</div>
