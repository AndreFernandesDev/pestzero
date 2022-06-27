<script lang="ts">
	import Container from '$lib/components/Container.svelte';
	import Text from '$lib/components/Text.svelte';
	import Spacing from '$lib/components/Spacing.svelte';
	import Slider from '$lib/components/Slider.svelte';

	type Company = {
		title: string;
		description: string;
	};

	const services: Array<Company> = [
		{
			title: 'Desbaratizacao',
			description: 'Empresa especializada na prevenção e controlo de pragas.',
		},
		{
			title: 'Desbaratizacao 2',
			description: 'Empresa especializada na prevenção e controlo de pragas.',
		},
		{
			title: 'Desbaratizacao 3',
			description: 'Empresa especializada na prevenção e controlo de pragas.',
		},
		{
			title: 'Desbaratizacao 4',
			description: 'Empresa especializada na prevenção e controlo de pragas.',
		},
		{
			title: 'Desbaratizacao 5',
			description: 'Empresa especializada na prevenção e controlo de pragas.',
		},
	];
</script>

<section>
	<Container>
		<div id="content">
			<Spacing spacing={'--mg-xl'} />
			<Slider items={services} />
			<Spacing spacing={'--mg-md'} />
		</div>
	</Container>
</section>
<Spacing spacing={'--mg-xl'} />

<style>
	section {
		position: relative;
		border-bottom: 3px solid var(--green);
	}

	#content {
		flex-wrap: wrap;
		flex-direction: column;
	}
</style>
