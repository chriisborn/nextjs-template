import { Analytics } from '@vercel/analytics/react'

import 'styles/__reset.css'
import 'styles/_globals.css'

import Footer from 'components/layout/footer'
import Header from 'components/layout/header'
import Navbar from 'components/layout/navbar'

import { sprintf } from 'sprintf-js'
import getDictionary from 'utilities/dictionary'

export async function generateMetadata({ params: { locale } }) {
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const dictionary = await getDictionary(locale)

	return {
		title: {
			default: sprintf(dictionary.title, dictionary.template),
			template: `%s | ${sprintf(dictionary.title, dictionary.template)}`
		},
		metadataBase: new URL(process.env.url),
		alternates: {
			canonical: '/',
			languages: (() => {
				const languages = {}
				const locales = process.env.locales.split(',')

				locales.forEach((item) => (languages[item] = `/${item}`))

				return languages
			})()
		}
	}
}

export default function RootLayout({ children, params: { locale } }) {
	return (
		<html lang={locale}>
			<body>
				<Header locale={locale} />
				<main className="bg-zinc-100 dark:bg-zinc-900">{children}</main>
				<Footer />
				<Navbar />

				<Analytics />
			</body>
		</html>
	)
}
