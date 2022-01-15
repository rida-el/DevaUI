import Image from 'next/image';
import DevaLogo from './public/deva-logo.png'
export default {
	github: 'https://github.com/rida-el/DevaUI',
	
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
	footerEditOnGitHubLink: false, // will link to the docs repo
	logo: (
		<>
			<h1>Deva Ui</h1>
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
