<script lang="ts">
	export let items: Array<any>;
	export let start: number = 0;

	import Text from '$lib/components/Text.svelte';
	import ArrowButton from '$lib/icons/ArrowButton.svelte';

	$: current = start;

	const handleClick = (type: string, target: EventTarget | null) => {
		if (type === 'next') {
			if (current + 1 === items.length) {
				current = 0;
			} else {
				current++;
			}
		} else if (type === 'previous') {
			if (current === 0) {
				current = items.length - 1;
			} else {
				current--;
			}
		}

		console.log(current);
		// var object = <HTMLElement>(
		// 	(<HTMLElement>(<HTMLElement>target).parentNode).parentNode
		// );
		// if (!object) return;
		// object.style.transform = 'scale(1.1)';
		// setTimeout((object) => {
		// 	console.log(object);
		// 	object.style.transform = 'scale(1)';
		// }, 1000);
	};
</script>

<div id="content">
	<div id="img" />
	<Text type="h3">{items[current].title}</Text>
	<Text>{items[current].description}</Text>
</div>
<div id="buttonLeft" on:click={(e) => handleClick('previous', e.target)}>
	<ArrowButton />
</div>
<div id="buttonRight" on:click={(e) => handleClick('next', e.target)}>
	<ArrowButton />
</div>

<style>
	#img {
		background: var(--lightGray);
		width: 128px;
		height: 128px;
		border-radius: 8px;
	}
	#content {
		padding: var(--mg-md);
		flex-direction: column;
		align-items: center;
		gap: var(--mg-sm);
		text-align: center;
	}

	#buttonLeft {
		position: absolute;
		bottom: -20px;
		left: 10%;
	}

	#buttonRight {
		position: absolute;
		bottom: -20px;
		right: 10%;
		transform: rotate(-180deg);
	}
</style>
