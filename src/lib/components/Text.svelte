<script lang="ts">
	export let type: string = 'p';
	export let fontSize: string = 'auto';
</script>

{#if type === 'h1'}
	<h1 style:--fontSize={fontSize}><slot /></h1>
{:else if type === 'h2'}
	<h2 style:--fontSize={fontSize}><slot /></h2>
{:else if type === 'h3'}
	<h3 style:--fontSize={fontSize}><slot /></h3>
{:else if type === 'h4'}
	<h4 style:--fontSize={fontSize}><slot /></h4>
{:else if type === 'h5'}
	<h5 style:--fontSize={fontSize}><slot /></h5>
{:else}
	<p style:--fontSize={fontSize}><slot /></p>
{/if}

<style>
	h1 {
		font-style: normal;
		font-weight: 500;
		font-size: 1rem;
		line-height: 20px;
		text-transform: uppercase;
	}

	h2 {
		font-style: normal;
		font-weight: 500;
		font-size: 24px;
		line-height: 36px;
	}

	h3 {
		font-style: normal;
		font-weight: 500;
		font-size: 13px;
		line-height: 20px;
	}

	h4 {
		font-style: normal;
		font-weight: 500;
		font-size: 10px;
		line-height: 180%;
	}

	h5 {
		font-style: normal;
		font-weight: 500;
		font-size: 13px;
		line-height: 20px;
	}

	p {
		font-style: normal;
		font-weight: 300;
		font-size: 13px;
		line-height: 180%;
	}
</style>
