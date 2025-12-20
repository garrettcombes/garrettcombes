<script>
	import { page } from '$app/stores';
	import Header from './Header.svelte';
	import About from './About.svelte';
	import './styles.css';
</script>

<div
	aria-current={$page.url.pathname === '/design' ? 'page' : undefined}
	class="design font--editorialItalic"
	>
	<a href="/design">Design</a>
</div>

<div class="app" id="app">
	<Header />

	<main>
		<slot />
	</main>


</div>

<div
		aria-current={$page.url.pathname === '/' ? 'page' : undefined}
		class="index font--editorialItalic">
		<a href="/">Home</a>
</div>


<div aria-current={$page.url.pathname === '/' ? 'page' : undefined}
		class="about font--editorialItalic">
		<a href="/#footer">About</a>
</div> 






	<About />

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
		min-height: 100svh;
		padding: 1em 0 0;
	}

	.design {
		position: fixed;
		top: -2px;
		font-size: 1.2em;
		left: 0;
		padding: 1em 0.5em 0;
		mix-blend-mode: difference;
		z-index: 1000;
	}

	.index a {
		padding: 0.1em 0.1em;
	}

	.design a, .about a {
		color: var(--bg-color);
		padding: 0.1em 0.1em;
	}

	.index a:hover, .design a:hover, .about a:hover {
		background: rgba(161, 161, 161, .08);
    border-radius: var(--border-radius);
    padding: 0.1em 0.1em;
	}

	.index {
		position: fixed;
		border-top: var(--border);
		bottom: 0;
		left: 0;
		background-color: var(--bg-color);
		mix-blend-mode: normal;
		padding: 1.2em 1em;
		font-size: 1.2em;
		width: 100%;
		z-index: 1000;
	}

	.about {
		display: none;
		position: fixed;
		bottom: -2px;
		font-size: 1.2em;
		right: 0;
		padding: 1.2em 1em;
		mix-blend-mode: difference;
		z-index: 1000;
	}

	@media screen and (min-width: 750px) {
		.design {
			padding: 1em 0.5em 0;
		}

		.index {
			bottom: 1em;
			left: 0.5em;
			border: none;

			background-color: transparent;
			mix-blend-mode: difference;
			color: var(--bg-color);

			padding: 0;
			width: auto;
		}

		.about {
			display: block;
		}
	}
</style>