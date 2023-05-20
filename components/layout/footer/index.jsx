import { IconBrandGithub } from '@tabler/icons-react'
import Link from 'next/link'

export default function FooterComponent() {
	return (
		<footer className="border-t border-solid dark:border-zinc-800 py-5">
			<div className="container max-w-7xl mx-auto px-6 flex items-center justify-center">
				<Link
					href="https://github.com/chriisborn/nextjs-template"
					className="bg-zinc-50/20 p-2 rounded-full brightness-75 hover:brightness-90"
				>
					<IconBrandGithub size={18} />
				</Link>
			</div>
		</footer>
	)
}
