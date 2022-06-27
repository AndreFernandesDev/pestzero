<script lang="ts">
	import Container from './Container.svelte';
	import Button from './Button.svelte';
</script>

<Container>
	<nav>
		<div>
			<img id="logo" src="images/logo.png" alt="PestZero" />
		</div>
		<Button type={'call'} fontSize={'13px'}
			>Ligue ja <img id="icon" src="images/call.svg" alt="PestZero" /></Button
		>
	</nav>
</Container>

<style>
	nav {
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: flex-end;
		margin-top: var(--mg-md);
	}

	#logo {
		width: 120px;
		height: 53px;
		object-fit: contain;
	}

	#icon {
		width: 19px;
		height: 19px;
		object-fit: contain;
		margin-left: var(--mg-sm);
	}
</style>
