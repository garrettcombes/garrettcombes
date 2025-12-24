<script>
	import logo from '$lib/images/logo.svg';
	import { page } from '$app/stores';
	const currentYear = new Date().getFullYear();
</script>

<header id="header">
	<section class="logo-container">
		<div class="date font--editorialItalic">{currentYear}</div>
		<img src={logo} class="logo" alt="Garrett Combes" />
		<div class="highlight font--NeueMontrealMedium">
			<div class="highlight__one">Creative Direction</div>
			<div class="highlight__two">Development</div>
			<div class="highlight__three">Art & Design</div>
		</div>
	</section>

	{#if $page.url.pathname === '/'}
		<div id="scroll-indicator"></div>
	{/if}
</header>

<style>
	#header {
		position: relative;
	}
	#scroll-indicator {
		display: none;
		position: absolute;
		left: 0;
		right: 0;
		margin: 0 auto;
		bottom: 4.5em;
		offset-path: path('M0,50 0,0');
		animation: move 1s infinite alternate ease-in-out;
		width: 10px;
		height: 10px;
		border-radius: 25px;
		background: black;
	}

	@keyframes move {
		0% {
			offset-distance: 0%;
		}
		100% {
			offset-distance: 100%;
		}
	}

	.date {
		display: flex;
		justify-content: flex-end;
		padding: 0 0.1em 0;
		line-height: 1;
		font-size: 1.2em;
		z-index: 1000;
	}

	.logo-container {
		padding: 0 0.5em 5em;
	}

	.logo {
		width: 100%;
	}

	.highlight {
		padding-top: 1em;
		font-size: clamp(30px, 50%, 80px);
		font-weight: bold;
		line-height: 1;
		white-space: nowrap;
	}

	.highlight__two {
		margin-left: 150px;
	}

	.highlight__three {
		margin-left: 100px;
	}

	@media screen and (min-width: 750px) {
		#scroll-indicator {
			display: block;
		}

		.date {
			padding: 0 0.5em;
		}

		.logo-container {
			padding-bottom: 0;
			height: 100vh;
		}

		.highlight {
			padding-top: 0;
		}

		.highlight__two {
			margin-left: 200px;
		}
	}
</style>
