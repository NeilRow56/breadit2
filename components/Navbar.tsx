import Link from 'next/link'
import ThemeButton from './ThemeButton'
import { Icons } from './Icons'
import { buttonVariants } from './ui/button'

const Navbar = () => {
  return (
    <header
      className="fixed inset-0 top-0 z-[70] h-fit border border-zinc-300 bg-zinc-100
     py-2 dark:bg-slate-700"
    >
      <nav className="container mx-auto flex h-full max-w-7xl items-center justify-between gap-2">
        {/* Logo */}
        <div>
          <Link href="/" className="flex items-center gap-2">
            <Icons.logo className="h-8 w-8 sm:h-6 sm:w-6" />
            <p className="hidden text-sm font-medium text-zinc-700 md:block">
              Breddit
            </p>
          </Link>
        </div>
        {/* Search Bar*/}

        <div className=" flex gap-4">
          <ThemeButton />
          <Link href="/sign-in" className={buttonVariants()}>
            Sign In
          </Link>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
