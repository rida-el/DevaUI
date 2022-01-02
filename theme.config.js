import Image from 'next/image';
import DevaLogo from './public/deva-logo.png'
export default {
	github: 'https://github.com/rida-el/DevaUI',
	docsRepositoryBase:
		'https://github.com/rida-el/DevaUI/blob/master/pages',
	branch: 'master',
	path: '/',
	titleSuffix: ' – Deva UI',
	nextLinks: true,
	prevLinks: true,
	search: true,
	customSearch: null,
	darkMode: true,
	footer: true,
	footerText: 'MIT 2021 © Deva',
	footerEditOnGitHubLink: true, // will link to the docs repo
	logo: (
		<>
			<Image src={DevaLogo} width={150} height={50} />
		</>
	),
	head: (
		<>
			


			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			<meta
				name="description"
				content="Deva UI"
			/>
			<meta
				name="og:title"
				content="Deva UI"
			/>
		</>
	),
};
