<script lang="ts">
	import Container from '$lib/components/Container.svelte';
	import Text from '$lib/components/Text.svelte';
	import Spacing from '$lib/components/Spacing.svelte';
	import Worker from '$lib/icons/Worker.svelte';
</script>

<section>
	<Container>
		<div id="content">
			<Spacing spacing={'--mg-md'} />
			<Text type="h2">Quem Somos</Text>
			<Spacing spacing={'--mg-sm'} />
			<Text
				>Empresa especializada na prevenção e controlo de pragas.Empresa
				especializada na prevenção e controlo de pragas.Empresa especializada na
				prevenção e controlo de pragas.</Text
			>
		</div>
	</Container>
	<div id="image">
		<Worker />
	</div>
</section>

<style>
	section {
		position: relative;
	}

	#content {
		width: 60%;
		flex-wrap: wrap;
		flex-direction: column;
	}

	#image {
		position: absolute;
		right: 0;
		top: -5px;
	}
</style>
