<script lang="ts">
	export let title: string;
	export let description: string;

	import Text from '$lib/components/Text.svelte';
	import Circle from '$lib/icons/Circle.svelte';
</script>

<div id="wrapper">
	<div>
		<div id="img" />
	</div>
	<div id="content">
		<Text type="h3">{title}</Text>
		<Text>{description}</Text>
	</div>
	<div id="icon">
		<Circle />
	</div>
</div>

<style>
	#img {
		background: var(--lightGray);
		width: 64px;
		height: 64px;
		border-radius: 8px;
	}

	#wrapper {
		border-right: 5px solid var(--green);
		width: 95%;
		align-items: center;
		position: relative;
		flex-wrap: nowrap;
	}

	#content {
		padding: var(--mg-md);
		flex-direction: column;
		max-width: 80%;
	}

	#icon {
		position: absolute;
		right: -18px;
	}
</style>
