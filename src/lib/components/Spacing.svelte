<script lang="ts">
	export let spacing: string;

	if (spacing == '--mg-sm') {
		spacing = '12px';
	} else if (spacing == '--mg-md') {
		spacing = '24px';
	} else if (spacing == '--mg-lg') {
		spacing = '36px';
	} else if (spacing == '--mg-xl') {
		spacing = '72px';
	}
</script>

<div style:--marginTop={spacing} />

<style>
	div {
		margin-top: var(--marginTop);
	}
</style>
