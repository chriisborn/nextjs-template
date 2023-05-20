import { match } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'
import { NextResponse } from 'next/server'

const locales = process.env.locales.split(',')
const defaultLocale = process.env.defaultLocale

function getLocale(request) {
	const headers = {}
	request.headers.forEach((value, key) => (headers[key] = value))
	const languages = new Negotiator({ headers }).languages()

	return match(languages, locales, defaultLocale)
}

export const config = {
	matcher: [
		'/((?!assets|_next|robots.txt|sitemap.xml|sw.js|manifest.json|favicon.ico|.*\\..*).*)'
	]
}

export function middleware(request) {
	const locale = getLocale(request)
	const pathname = request.nextUrl.pathname

	const isMissingLocale = locales.every(
		(locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
	)

	if (isMissingLocale) {
		return NextResponse.redirect(new URL(`/${locale}/${pathname}`, request.url))
	}
}
