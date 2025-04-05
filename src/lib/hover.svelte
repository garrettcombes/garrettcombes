<script>
	let hovering = false;

	function enter() {
		hovering = true;
	}

	function leave() {
		hovering = false;
	}
</script>

<div on:mouseenter={enter} on:mouseleave={leave} class="grid-col-a">
	<slot hovering={hovering}></slot>
</div>

<style>
	.grid-col-a {
		position: relative;
		padding: .5em;
		border-bottom: var(--border);
		border-right: var(--border);
	}
</style>