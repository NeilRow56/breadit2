import Providers from '@/providers/theme-provider'
import { cn } from '@/lib/utils'
import '@/styles/globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Breadit',
  description: 'A Reddit clone built with Next.js and TypeScript.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        'light bg-white text-slate-900 antialiased',
        inter.className
      )}
    >
      <body className="min-h-screen bg-slate-50 antialiased">
        <Providers>
          <Navbar />
          <div className="container mx-auto h-full max-w-7xl  pt-12">
            {children}
          </div>
        </Providers>
      </body>
    </html>
  )
}
