<script>
	import { fly } from 'svelte/transition';
	import { quintInOut } from 'svelte/easing';

	let visible = false;
</script>

<details bind:open={visible} id="details">
	<summary class="about__button font--editorialItalic">About</summary>
</details>

{#if visible}
	<div
		in:fly={{ duration: 450, x: 1000, easing: quintInOut }}
		out:fly={{ delay: 0, duration: 600, easing: quintInOut, x: 1000, opacity: 1 }}
		id="about-mobile"
		class="about-mobile"
	>
		<div class="about-mobile__content font--NeueMontrealBook">
			Garrett Combes is an Emmy-winning Creative Director based in Los Angeles. After
			working as an art director at some of the world’s top advertising agencies,
			he shifted his focus towards the entertainment industry, working as a Creative Director
			inside The Lab at Anonymous Content. Currently, he sits in-house at Expedia focusing on
			story-driven and longform content.
		</div>
	</div>
{/if}

<style>
	.about__button {
		color: var(--color);
		cursor: pointer;
		position: fixed;
		bottom: 1.1em;
		right: 1.5em;
		padding-left: 0.3em;
		font-size: 1.2em;
		line-height: 0.7;
		z-index: 1000;
	}

	details > summary:first-of-type {
		list-style: none;
	}

	details summary::-webkit-details-marker {
		display: none;
	}

	.about-mobile {
		height: 100vh;
		position: fixed;
		inset: 0 0 0 0;
		background: var(--bg-color);
		border-left: var(--border);
		border-bottom: var(--border);
	}

	.about-mobile__content {
		transform: translateY(50%);
		height: calc(100vh - 60%);
		padding: 0 0.5em;
		pointer-events: all;
		text-align: justify;
		font-size: 15px;
		line-height: 20px;
		letter-spacing: 0.1px;
	}
	@media screen and (min-width: 750px) {
		.about__button {
			display: none;
		}
		.about-mobile__content {
			font-size: 18px;
			line-height: 1.2;
		}
	}
</style>
