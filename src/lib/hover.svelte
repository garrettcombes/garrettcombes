<script>
	let hovering = false;

	function enter() {
		hovering = true;
	}

	function leave() {
		hovering = false;
	}
</script>

<div on:mouseenter={enter} on:mouseleave={leave} class="grid-col-a" role="button" tabindex="0">
	<slot {hovering}></slot>
</div>

<style>
	.grid-col-a {
		position: relative;
		padding: 0.5em;
		border-bottom: var(--border);
		border-right: var(--border);
	}

	@media screen and (max-width: 750px) {
		.grid-col-a {
			border-right: none;
		}
	}
</style>
