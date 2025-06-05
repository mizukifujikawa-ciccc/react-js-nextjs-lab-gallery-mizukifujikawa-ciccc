'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Nav() {
  const pathname = usePathname()
  const linkClass = (path: string) =>
    pathname === path ? 'font-semibold text-blue-500' : 'text-gray-700'

  return (
    <nav className="p-4 border-b mb-4">
      <ul className="flex gap-4">
        <li>
          <Link className={linkClass('/')} href="/">
            Home
          </Link>
        </li>
        <li>
          <Link className={linkClass('/gallery')} href="/gallery">
            Gallery
          </Link>
        </li>
      </ul>
    </nav>
  )
}
