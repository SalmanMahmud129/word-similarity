import { getServerSession } from 'next-auth'
import Link from 'next/link'
import { FC } from 'react'
import { buttonVariants } from './ui/Button'
import SignInButton from '@/components/SignInButton'
import SignOutButton from '@/components/SignOutButton'


const Navbar = async () => {
    const session = await getServerSession()


  return (
  <div className='fixed backdrop-blur-sm bg-white/75 dark:bg-slate-900 z-50 top-0 left-0 right-0 h-20 border-b border-slate-300 dark:border-slate-700 shadow-sm flex items-center justify-between'>
    <div className='container max-w-7xl mx-auto w-full flex justify-between items-center'>
        <Link href='/' className={buttonVariants({variant: 'link'})}>
            Text Similarity with Next
        </Link>

        <div className='md:hidden'>
            {/* <ThemeToggle /> */}

        </div>

        <div className='hidden md:flex gap-4'>
            {/* <ThemeToggle /> */}
            <Link href='/documentation' className={buttonVariants({variant: 'ghost'})}> Documentation</Link>
        

            {session ? (
                <>
                    <Link className={buttonVariants({variant: 'ghost'})} href='/dashboard'>
                        Dashboard
                    </Link>
                </>
            ) : <SignInButton />}
        </div>
    </div>
  </div>
  )
}

export default Navbar

// reason we have sign in and signout as different components because you cannot render client side components from a server component like a navbar and pass it a function directly 