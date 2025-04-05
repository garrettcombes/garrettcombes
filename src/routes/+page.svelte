<script>
	export let data;
	import Hoverable from '../lib/hover.svelte'
	import { fly } from 'svelte/transition';
	import { quintInOut } from 'svelte/easing';
	import { fade } from 'svelte/transition';
	import { onMount } from 'svelte';
	// import Projects from './Projects.svelte';
	import Footer from './Footer.svelte';
	import arrow from '$lib/images/vimeo_arrow.svg';

	let fadeIn = false;
	onMount(() => {
		fadeIn = true;
	});
</script>

<svelte:head>
	<title>Garrett Combes</title>
	<meta
		name="description"
		content="Garrett Combes is an award-winning creative director based in Los Angeles."
	/>
	<meta property="og:title" content="Garrett Combes" />
	<meta property="og:image" content="/&.png" />
	<meta property="og:image:type" content="image/png" />
</svelte:head>

<section>
	<section class="grid-container">
		{#each data.projects as project, i}
			<div class="grid">
				<Hoverable let:hovering={active}>
					<div>
						<div style="padding:56.25% 0 0 0;position:relative;">
							<iframe
								src="https://player.vimeo.com/video/{project.video}&autoplay=1&loop=1&autopause=0&background=1&color=ffffff&controls=0&portrait=0"
								width="960"
								height="540"
								frameborder="0"
								allow="autoplay; fullscreen"
								allowfullscreen
								title="hilton combes vimeo"
								style="position:absolute;top:0;left:0;width:100%;height:100%;"
							></iframe>
						</div>
						{#if active}
							<a
								in:fly={{ delay: 10, duration: 500, easing: quintInOut, y: 30 }}
								out:fly={{ delay: 10, duration: 500, easing: quintInOut, y: -30 }}
								href={project.vimeo}
								rel="noreferrer"
								target="_blank"
								class="vimeo-link--active font--NeueMontrealMedium"
							>
								<div class="video-link--wrapper">
									<p class="vimeo-link">Vimeo</p>
									<img class="arrow" src={arrow} alt="arrow" />
								</div>
							</a>
						{/if}
					</div>
				</Hoverable>
				<div transition:fade={{ delay: 850, duration: 300 }} class="grid-col-b">
					<div class="images">
						{#if fadeIn}
							<img
								transition:fade
								loading="lazy"
								src={project.imgOne}
								alt={project.alt}
								width="640"
								height="550"
							/>
							{#if project.thumbnail}
								<div style="padding:56.25% 0 0 0;position:relative;">
									<iframe
										src="https://player.vimeo.com/video/{project.thumbnail}&autoplay=1&loop=1&autopause=0&background=1&color=ffffff&controls=0&portrait=0"
										width="960"
										height="540"
										frameborder="0"
										allow="autoplay; fullscreen"
										allowfullscreen
										title="hilton combes vimeo"
										style="position:absolute;top:0;left:0;width:100%;height:100%;"
									></iframe>
								</div>
							{:else if project.imgTwo}
								<img
									transition:fade
									loading="lazy"
									src={project.imgTwo}
									alt={project.alt}
									width="640"
									height="550"
								/>
							{/if}
							<img
								transition:fade
								loading="lazy"
								src={project.imgThree}
								alt={project.alt}
								width="640"
								height="550"
							/>
							<img
								transition:fade
								loading="lazy"
								src={project.imgFour}
								alt={project.alt}
								width="640"
								height="550"
							/>
						{/if}
					</div>
				</div>
				<div class="grid-col-c">
					<div class="info">
						<p class="info__brand font--NeueMontrealBook">{project.title}</p>
						{#if project.subline}
							<p class="info__title subline font--NeueMontrealBook">{project.subline}</p>
						{/if}
						<p class="info__title font--NeueMontrealMedium">{project.brand}</p>
					</div>
				</div>
				<div class="grid-col-d"></div>
			</div>
		{/each}
	</section>

	<!-- <Projects /> -->
	<Footer />
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	.grid {
		display: grid;
		grid-template-columns: 1fr;
		padding: 1em 0;
		border-bottom: var(--border);
	}

	.grid > * {
		padding: 0.5em;
	}

	.vimeo-link--active {
		cursor: pointer;
		position: absolute;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		margin: auto;
		width: fit-content;
		height: fit-content;
		font-size: small;
		text-transform: uppercase;
		letter-spacing: 1px;
		background-color: var(--bg-color);
		color: var(--color);
		border-radius: var(--border-radius);
		padding: 0.7em 1em;
		opacity: 0.9;
		transition: all 0.3s ease-in-out;
	}

	.vimeo-link--active:hover {
		background-color: rgba(255, 255, 255, 0.5);
		transition: all 0.1s ease-in-out;
	}

	.vimeo-link--active .arrow {
		transform: rotate(0deg);
		transition: all 0.2s ease-in-out;
	}

	.vimeo-link--active:hover .arrow {
		transform: rotate(90deg);
		transition: all 0.2s ease-in-out;
	}

	.video-link--wrapper {
		display: flex;
		gap: 0.2em;
		justify-content: space-between;
	}

	.grid-col-c {
		grid-row: 2/3;
	}

	.grid:last-child {
		border-bottom: var(--border);
	}

	.images {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 0.5em;
	}

	.images img {
		height: auto;
		width: 100%;
		color: var(--bg-color);
	}

	.info {
		display: flex;
		justify-content: space-between;
		padding: 1em 0;
		text-transform: uppercase;
		font-size: 1.5em;
	}

	.subline {
		font-size: 0.5em;
		position: absolute;
		transform: translateY(23px);
	}

	.grid-col-d {
		display: none;
	}

	@media screen and (min-width: 750px) {
		.grid {
			grid-template-columns: 2fr 1.316fr;
			padding: 0;
			border-top: var(--border);
			border-bottom: 0;
		}

		.grid > *:nth-child(odd) {
			border-right: var(--border);
		}

		.grid > *:nth-child(-n + 2) {
			border-bottom: var(--border);
		}

		.info {
			height: calc(100vh - 499px);
		}

		.grid-col-d {
			display: block;
			justify-self: start;
			align-self: end;
		}
	}
</style>
