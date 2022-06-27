<script lang="ts">
	import Container from '$lib/components/Container.svelte';
	import Text from '$lib/components/Text.svelte';
	import Spacing from '$lib/components/Spacing.svelte';
	import Phone from '$lib/icons/Phone.svelte';
	import Button from '$lib/components/Button.svelte';
</script>

<Spacing spacing={'--mg-md'} />
<section>
	<Container>
		<div id="content">
			<Text type="h1">Empenhados na sua saúde e bem-estar</Text>
			<Spacing spacing={'--mg-sm'} />
			<Text type="h4"
				>Empresa especializada na prevenção e controlo de pragas.</Text
			>
			<Spacing spacing={'--mg-sm'} />
			<div id="button">
				<Button type={'call'}>Ligue ja</Button>
			</div>
		</div>
		<div id="image">
			<Phone height={'140px'} />
		</div>
	</Container>
</section>

<style>
	section {
		margin: var(--mg-sm) 0;
		padding: var(--mg-lg) 0;
		background: var(--gradient);
		border-radius: 16px;
		position: relative;
	}

	#content {
		width: 60%;
		flex-wrap: wrap;
	}

	#image {
		position: absolute;
		right: 5%;
		bottom: 0;
	}

	#button {
		position: absolute;
		left: 5%;
		bottom: -16px;
	}
</style>
