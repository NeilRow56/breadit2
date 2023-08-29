import Link from 'next/link'
import ThemeButton from './ThemeButton'

const Navbar = () => {
  return (
    <header className="sticky top-0 z-[70] bg-slate-200 py-6 dark:bg-slate-700">
      <nav className="container mx-auto flex items-center justify-between px-48">
        <ul className="flex gap-6">
          <li>
            <Link href="/">Home</Link>
          </li>
        </ul>
        <ThemeButton />
      </nav>
    </header>
  )
}

export default Navbar
