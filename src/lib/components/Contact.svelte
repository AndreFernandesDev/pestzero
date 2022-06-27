<script lang="ts">
	import Container from '$lib/components/Container.svelte';
	import Text from '$lib/components/Text.svelte';
	import Spacing from '$lib/components/Spacing.svelte';
	import Window from '$lib/icons/Window.svelte';
	import Form from '$lib/components/Form.svelte';
</script>

<section>
	<Container>
		<div id="content">
			<Text type="h2">Fale Connosco</Text>
			<Spacing spacing={'--mg-sm'} />
			<Form />
		</div>
	</Container>
	<div id="image">
		<Window />
	</div>
</section>

<style>
	section {
		position: relative;
	}

	#content {
		width: 70%;
		flex-wrap: wrap;
		flex-direction: column;
	}

	#image {
		position: absolute;
		right: 0;
		top: 0px;
		z-index: -99;
	}
</style>
