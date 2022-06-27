<script lang="ts">
	export let fontSize: string = '1rem';
	export let type: string = '';
</script>

{#if type === 'call'}
	<a href="tel:965-710-575"
		><button style:--fontSize={fontSize}><slot /></button></a
	>
{:else}
	<button style:--fontSize={fontSize}><slot /></button>
{/if}

<style>
	button {
		background: #ffffff;
		box-shadow: 0px 6.15385px 6.15385px rgba(0, 0, 0, 0.15);
		border-radius: 7.69231px;
		font-weight: 700;
		font-size: var(--fontSize);
		padding: 0.5em 1.25em;
		display: flex;
	}

	a {
		text-decoration: none;
	}
</style>
