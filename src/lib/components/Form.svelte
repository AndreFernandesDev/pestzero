<script lang="ts">
	import Button from '$lib/components/Button.svelte';
</script>

<form>
	<input type="text" placeholder="O seu nome..." />
	<input type="text" placeholder="O seu contacto..." />
	<textarea placeholder="A sua mensagem..." />
	<Button>Enviar</Button>
</form>

<style>
	textarea,
	input {
		width: 100%;
		margin: 0;
		padding: 0.4rem 0.25rem;
		margin-bottom: var(--mg-sm);
		border: 2px solid var(--dark);
		border-radius: 4px;
		background-color: #ffffff;
		font-family: var(--fontType);
	}

	textarea {
		min-height: 70px;
	}

	textarea::placeholder,
	input::placeholder {
		font-size: 0.75rem;
	}
</style>
