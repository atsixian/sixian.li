import './globals.css'
import { Sidebar } from '../components/sidebar'
import { Analytics } from '@vercel/analytics/react'
import type { Metadata } from 'next'
import clsx from 'clsx'

export const metadata: Metadata = {
  title: {
    default: 'Sixian Li',
    template: '%s | Sixian Li',
  },
  description: "Sixian's floating thoughts",
  openGraph: {
    title: 'Sixian Li',
    description: 'Free spirit',
    url: 'https://sixian.li',
    siteName: 'Sixian Li',
    images: [
      {
        url: 'https://sixian.li/og.png',
        width: 1200,
        height: 630
      }
    ],
    type: 'website'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-US">
      <body className="bg-bg-color text-fg-color">
        <div
          aria-hidden
          className={clsx(
            "pointer-events-none fixed top-0 z-10 h-20 w-full select-none",
            "bg-gradient-to-t from-transparent to-bg-color/80",
            "backdrop-blur",
            "gradient-mask-b-0",
          )}
        />
        <div className="flex h-full flex-col items-center justify-start font-serif md:relative md:flex-row md:items-start md:justify-center md:gap-6 md:pb-12 md:pt-32">
          <Sidebar />
          <main className="w-full px-6 md:w-[60ch]">{children}</main>
        </div>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
