<script>
	import Hoverable from '../lib/hover.svelte'
	import { fly } from 'svelte/transition';
	import { quintInOut } from 'svelte/easing';
	import { fade } from 'svelte/transition';
	import { onMount } from 'svelte';

	let fadeIn = false;
	onMount(() => {
		fadeIn = true;
	});

	import arrow from '$lib/images/vimeo_arrow.svg';
	import { dataset_dev } from 'svelte/internal';

	export let projects = [
		{
			brand: 'Adobe',
			title: 'Full Bleed',
			vimeo: 'https://vimeo.com/user5598817/fullbleed',
			video: '776659626?h=8d9bc2e6f5',
			imgOne: '/images/adobe_01.webp',
			imgThree: '/images/adobe_03.webp',
			imgFour: '/images/adobe_04.webp',
			thumbnail: '776819569?h=d2da82dc64',
			alt: 'adobe full bleed',
			subline: '2023 Tribeca X win'
		},
		{
			brand: 'Hewlett Packard',
			title: 'Wake Up',
			vimeo: 'https://vimeo.com/user5598817/wakeup',
			video: '777018679?h=126393ef28',
			imgOne: '/images/hp_01.webp',
			imgTwo: '/images/hp_02.webp',
			imgThree: '/images/hp_03.webp',
			imgFour: '/images/hp_04.webp',
			alt: 'hp wake up'
		},
		{
			brand: 'Expedia',
			title: 'Where to',
			vimeo: 'https://vimeo.com/user5598817/whereto',
			video: '926452808?h=e26b430b40',
			imgOne: '/images/expedia_01.webp',
			imgThree: '/images/expedia_02.webp',
			imgFour: '/images/expedia_03.webp',
			thumbnail: '926653213?h=575add8d6b',
			alt: 'expedia where to'
		},
		{
			brand: 'Lime',
			title: 'Unlock Life',
			vimeo: 'https://vimeo.com/user5598817/carlos',
			video: '777020355?h=5f8dbafbe5',
			imgOne: '/images/lime_01.webp',
			imgThree: '/images/lime_03.webp',
			imgFour: '/images/lime_04.webp',
			thumbnail: '777020693?h=864679f96f',
			alt: 'lime unlock life'
		},
		{
			brand: 'Hewlett Packard',
			title: 'Wolf IV',
			vimeo: 'https://vimeo.com/user5598817/wolf',
			video: '794967247?h=e2506c6973',
			imgOne: '/images/wolf_01.webp',
			imgTwo: '/images/wolf_02.webp',
			imgThree: '/images/wolf_03.webp',
			imgFour: '/images/wolf_04.webp',
			alt: 'hp wolf iv'
		},
		{
			brand: 'Dropbox',
			title: 'Anthem',
			vimeo: 'https://vimeo.com/user5598817/anthem',
			video: '777023359?h=9ad32513af',
			imgOne: '/images/dropbox_01.webp',
			imgThree: '/images/dropbox_03.webp',
			imgFour: '/images/dropbox_04.webp',
			thumbnail: '777023559?h=db51cf6663',
			alt: 'dropbox anthem'
		},
		{
			brand: 'Truth',
			title: 'Detox Box',
			vimeo: 'https://vimeo.com/user5598817/opioids',
			video: '777023945?h=b4e0596490',
			imgOne: '/images/truth_01.webp',
			imgTwo: '/images/truth_02.webp',
			imgThree: '/images/truth_03.webp',
			imgFour: '/images/truth_04.webp',
			alt: 'truth detox box',
			subline: '2019 Emmy win'
		}
	];
</script>

<section class="grid-container">
	{#each projects as project, i}
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
							Vimeo
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

<style>
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
		background-color: var(--color);
		color: var(--bg-color);
		transition: all 0.2s ease-in-out;
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
