import Link from 'next/link';

export function NavBar() {
	return (
		<nav className="">
			<ul className="flex gap-2">
				<li>
					<Link href="/conversion/dashboard">Home</Link>
				</li>
				<li>
					<Link href="/conversion/dashboard">My Conversions</Link>
				</li>
			</ul>
		</nav>
	)
}