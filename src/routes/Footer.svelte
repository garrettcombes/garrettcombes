<script>
	import copy from '$lib/images/copy.svg';
  const currentYear = new Date().getFullYear();
</script>

<footer id="footer" class="grid--2col">
	<div class="contact-container">
		<div class="contact">
			<div class="contact__title font--editorial">Contact</div>
			<div class="contact__email font--NeueMontrealMedium space--wider">garrettcombes@gmail.com</div>
			<div class="contact__address font--NeueMontrealBook">6424 W Olympic Blvd</div>
			<div class="contact__address font--NeueMontrealBook">Los Angeles, CA</div>
			<div class="contact__address font--NeueMontrealBook">90048</div>
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

	<div class="about-container">
		<div class="about__content font--NeueMontrealBook">
			Garrett Combes is an Emmy-winning Creative Director based in Los Angeles. After
			working as an art director at some of the world’s top advertising agencies,
			he shifted his focus towards the entertainment industry, working as a Creative Director
			inside The Lab at Anonymous Content. Currently, he sits in-house at Expedia focusing on
			story-driven and longform content.
			<br /><br />
			Additional work upon request
		</div>
	</div>
</footer>

<style>
	footer {
		height: 100vh;
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

	@media screen and (min-width: 750px) {
		.contact-container {
			border-right: var(--border);
		}

		.contact {
			text-align: center;
		}

		.about-container {
			display: flex;
			justify-content: center;
			align-items: center;
		}

		.about__content {
			text-transform: uppercase;
			text-align: justify;
			font-size: 12px;
			padding: 3em;
			width: 100%;
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
