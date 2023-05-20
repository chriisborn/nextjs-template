import { Analytics } from '@vercel/analytics/react'

import 'styles/__reset.css'
import 'styles/_globals.css'

import Footer from 'components/layout/footer'
import Header from 'components/layout/header'
import Navbar from 'components/layout/navbar'

import { useDictionary } from 'utilities/dictionary'

export async function generateMetadata({ params: { locale } }) {
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const dictionary = await useDictionary(locale)

	return {
		title: {
			default: dictionary.title,
			template: `%s | ${dictionary.title}`
		}
	}
}

export default function RootLayout({ children, params: { locale } }) {
	return (
		<html lang={locale}>
			<body>
				<Header />
				<main>{children}</main>
				<Footer />
				<Navbar />
				<Analytics />
			</body>
		</html>
	)
}
