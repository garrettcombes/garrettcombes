// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
export const prerender = true;

export const load = async () => {
	return {
		projects: [
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
				alt: 'hp wake up',
				subline: '2020 The One Show Silver'
			},
			{
				brand: 'Expedia',
				title: 'Somewhere',
				vimeo: 'https://vimeo.com/user5598817/somewhere',
				video: '1023313432?h=ad18c4abcb',
				imgOne: '/images/expedia2_01.webp',
				imgThree: '/images/expedia2_02.webp',
				imgFour: '/images/expedia2_03.webp',
				thumbnail: '1025607719?h=3726268849',
				alt: 'expedia somewhere'
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
				brand: 'WhatsApp',
				title: 'Layla',
				vimeo: 'https://vimeo.com/user5598817/whatsapp',
				video: '1083959025?',
				imgOne: '/images/whatsApp_01.webp',
				imgTwo: '/images/whatsApp_02.webp',
				imgThree: '/images/whatsApp_03.webp',
				imgFour: '/images/whatsApp_04.webp',
				alt: 'whatsapp hapiness and love',
				subline: '2025 Webby win'
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
		]
	};
};
