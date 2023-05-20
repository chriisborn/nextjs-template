import Link from 'next/link'

export default function HeaderComponent() {
	return (
		<header className="border-b border-solid dark:border-zinc-800 py-5">
			<div className="container max-w-7xl mx-auto px-6 flex items-center justify-center">
				<div className="font-semibold flex flex-row space-x-6">
					<Link href="/en" className="opacity-50 hover:opacity-70">
						English
					</Link>
					<Link href="/pt" className="opacity-50 hover:opacity-70">
						Português
					</Link>
					<Link href="/es" className="opacity-50 hover:opacity-70">
						Español
					</Link>
				</div>
			</div>
		</header>
	)
}
