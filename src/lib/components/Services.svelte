<script lang="ts">
	import SingleService from '$lib/components/SingleService.svelte';
	import Container from '$lib/components/Container.svelte';
	import Spacing from '$lib/components/Spacing.svelte';

	type Service = {
		title: string;
		description: string;
	};

	const services: Array<Service> = [
		{
			title: 'Desbaratizacao',
			description: 'Empresa especializada na prevenção e controlo de pragas.',
		},
		{
			title: 'Desbaratizacao',
			description: 'Empresa especializada na prevenção e controlo de pragas.',
		},
		{
			title: 'Desbaratizacao',
			description: 'Empresa especializada na prevenção e controlo de pragas.',
		},
		{
			title: 'Desbaratizacao',
			description: 'Empresa especializada na prevenção e controlo de pragas.',
		},
		{
			title: 'Desbaratizacao',
			description: 'Empresa especializada na prevenção e controlo de pragas.',
		},
	];
</script>

<section>
	<Spacing spacing="--mg-lg" />
	<Container>
		{#each services as service}
			<SingleService title={service.title} description={service.description} />
		{/each}
	</Container>
</section>
