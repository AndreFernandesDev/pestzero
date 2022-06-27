<script lang="ts">
	import Container from '$lib/components/Container.svelte';
	import Text from '$lib/components/Text.svelte';
</script>

<footer>
	<Container>
		<img id="image" src="images/logo.png" alt="PestZero" />
		<div id="content">
			<Text type="h4"
				>Peca o seu orcamento. Trabalhamos na zona do algarve e baixo alentejo.</Text
			>
		</div>
	</Container>
</footer>

<style>
	footer {
		display: flex;
		align-items: flex-start;
		background-color: var(--dark);
		color: #ffffff;
		margin-top: var(--mg-lg);
		padding: var(--mg-md) 0;
		text-transform: uppercase;
	}

	#content {
		width: 55%;
		padding-left: 5%;
	}

	#image {
		width: 40%;
		object-fit: contain;
	}
</style>
