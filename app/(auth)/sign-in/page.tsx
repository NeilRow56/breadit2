import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { ChevronLeft } from 'lucide-react'
import Link from 'next/link'
import SignInForm from '../components/signin-form'

const SignInPage = () => {
  return (
    <div className="absolute inset-0">
      <div className="mx-auto flex h-full max-w-2xl flex-col items-center justify-center gap-20">
        <Link
          href="/"
          className={cn(
            buttonVariants({ variant: 'ghost' }),
            '-mt-20 self-start'
          )}
        >
          <ChevronLeft className="mr-2 h-4 w-4" />
          Home
        </Link>

        <SignInForm />
      </div>
    </div>
  )
}

export default SignInPage
