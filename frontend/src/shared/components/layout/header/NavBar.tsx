import Link from 'next/link'

export function NavBar() {
  return (
    <nav className='text-sm lg:text-base'>
      <ul className='flex gap-2'>
        <li>
          <Link href='/conversion/dashboard'>Home</Link>
        </li>
        <li>
          <Link href='/conversion/dashboard/my'>My Conversions</Link>
        </li>
      </ul>
    </nav>
  )
}
