import { Analytics } from '@vercel/analytics/react'

import '@/styles/__reset.css'
import '@/styles/_globals.css'

export const metadata = {
	title: {
		default: process.env.appTitle,
		template: `%s | ${process.env.appTitle}`
	}
}

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				<main>{children}</main>
				<Analytics />
			</body>
		</html>
	)
}
