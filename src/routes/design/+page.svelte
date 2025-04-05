<script>
	import { fade } from 'svelte/transition';

	let images = [
		{ src: '/overview/gotd_art_02.webp' },
		{ src: '/overview/lab_site_02.webp' },
		{ src: '/overview/gotd_art_03.webp' },
		{ src: '/overview/gotd_art_01.webp' },
		{ video: '780617193?h=e635acb5a2' },
		{ src: '/overview/gotd_art_04.webp' },
		{ src: '/overview/hp_wolf_01.webp' },
		{ src: '/overview/grad_together.webp' },
		{ video: '780617281?h=f7c6b6a581' },
		{ src: '/overview/hp_wolf_02.webp' },
		{ src: '/overview/cherry.webp' },
		{ src: '/overview/lab_branding_02.webp' },
		{ src: '/overview/lab_branding_03.webp' },
		{ src: '/overview/lab_site_01.webp' },
		{ src: '/overview/dropbox.webp' },
		{ src: '/overview/lab_site_03.webp' },
		{ src: '/overview/studio_03.webp' },
		{ src: '/overview/studio_01.webp' },
		{ video: '794974670?h=11eb6cfcc8' },
		{ src: '/overview/wakeup_titles_01.webp' }
	];
</script>

<svelte:head>
	<title>Overview</title>
	<meta name="Overview" content="Design Images" />
</svelte:head>

<section>
	<div class="overview-container">
		<div class="overview__grid">
			{#each images as { src, video }}
				{#if src}
					<img transition:fade="{{delay: 50}}" class="overview__grid--image" loading="lazy" {src} alt="overview">
				{:else}
					<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/{video}&autoplay=1&loop=1&autopause=0&background=1&color=ffffff&controls=0&portrait=0" width="500" height= "250"  frameborder="0" allow="autoplay; fullscreen"  allowfullscreen title="garrett combes vimeo" style="position:absolute;top:0;left:0;width:100%;height:100%;"></iframe></div>
				{/if}
			{/each}
		</div>
	</div>
</section>


<style>
	.overview-container {
		position: absolute;
		inset: 0;
		top: 15em;
	}

	.overview__grid {
		display: grid;
		grid-template-columns: repeat(2,1fr);
		align-items: flex-start;
		gap: 2rem;
		padding: 1.5em .5em 5em;
	}

	.overview__grid--image {
		transform: scale(100%);
		transition: transform .25s ease-out;
	}

	.overview__grid--image:hover {
		transform: scale(110%);
		cursor:crosshair;
	}

	@media screen and (min-width: 750px) {
		.overview-container {
			top: 27em;
		}

		.overview__grid {
			grid-template-columns: repeat(4,1fr);
		}
	}
</style>