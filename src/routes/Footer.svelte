<script>
	import copy from '$lib/images/copy.svg';
	const currentYear = new Date().getFullYear();
	import { onMount } from 'svelte';

	//text animation
	let container;
	let displayText = '';
	let isVisible = false;

	const fullText = `Garrett Combes is an Emmy-winning Creative Director based in Los Angeles. After working as an art
		director at some of the world’s top advertising agencies, he shifted his focus towards the entertainment
		industry, working as a Creative Director inside The Lab at Anonymous Content. Currently, he sits
		in-house at Expedia focusing on story-driven and longform content.`;
	const typingSpeed = 50; // milliseconds per character

	onMount(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting && !isVisible) {
						isVisible = true;
						typeText();
					}
				});
			},
			{ threshold: 0.5 } // Triggers when 50% of element is visible
		);

		observer.observe(container);

		return () => observer.disconnect();
	});

	function typeText() {
		let index = 0;

		const interval = setInterval(() => {
			if (index < fullText.length) {
				displayText += fullText[index];
				index++;
			} else {
				clearInterval(interval);
			}
		}, typingSpeed);
	}
</script>

<footer id="footer" class="grid--2col">
	<div class="contact-container">
		<div class="contact">
			<div class="contact__title font--editorial">Contact</div>
			<div class="contact__email font--NeueMontrealMedium space--wider">
				garrettcombes@gmail.com
			</div>
			<div class="contact__address font--NeueMontrealBook">36°50'41.5"N 118°17'51.6"W</div>
			<div class="contact__address font--NeueMontrealBook">Los Angeles</div>
			<div class="contact__address font--NeueMontrealBook">California</div>
			<div class="contact__links font--NeueMontrealBook">
				<a
					href="https://www.instagram.com/garrett.combes/"
					class="link space--wider font--NeueMontrealBook"
					target="_blank"
					rel="noreferrer">IG</a
				>
			</div>
		</div>

		<div class="copy-container">
			<p class="copy__text font--editorial">Garrett Combes, {currentYear}</p>
			<div><img src={copy} class="copy__icon" alt="Copywrite" /></div>
		</div>
	</div>

	<div class="about-container" bind:this={container}>
		<div class="about__content font--NeueMontrealBook">
			{displayText}<span class="cursor"></span>
		</div>
	</div>
</footer>

<style>
	footer {
		height: 100vh;
		width: 100%;
	}

	.contact-container {
		position: relative;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 100%;
	}

	.contact__title {
		font-size: 2.7em;
		letter-spacing: -1px;
		padding-bottom: 0.4em;
	}

	.contact__email {
		padding-bottom: 0.5em;
	}

	.contact__address {
		line-height: 1;
	}

	.contact__links {
		display: flex;
		justify-content: space-evenly;
		padding-top: 3em;
	}

	.copy-container {
		display: none;
	}

	.contact {
		text-align: center;
		font-size: smaller;
	}

	.about-container {
		display: none;
	}

	.cursor {
		display: inline-block;
		width: 1px;
		height: 0.8em;
		background: black;
		margin-left: 2px;
		animation: blink 1s infinite;
		vertical-align: middle;
	}

	@keyframes blink {
		0%,
		50% {
			opacity: 1;
		}
		51%,
		100% {
			opacity: 0;
		}
	}

	@media screen and (min-width: 750px) {
		.contact-container {
			border-right: var(--border);
		}

		.contact {
			text-align: center;
		}

		.about-container {
			display: flex;
			align-items: center;
			height: 100%;
		}

		.about__content {
			text-transform: uppercase;
			text-align: justify;
			font-size: 12px;
			padding: 3em;
			width: 100%;
			min-height: 190px;
			letter-spacing: 0.1px;
		}

		.copy-container {
			position: absolute;
			bottom: 1em;
			right: 1em;
			display: flex;
			flex-direction: row-reverse;
			align-items: baseline;
			line-height: 1.3;
			font-size: smaller;
		}

		.copy__text {
			align-self: flex-end;
		}

		.copy__icon {
			margin-right: 0.3em;
			transform: translateY(1px);
			width: 14px;
			height: auto;
		}
	}
</style>
