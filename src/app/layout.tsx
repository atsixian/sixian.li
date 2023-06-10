import './globals.css'
import { Sidebar } from '../components/sidebar'
import { Analytics } from '@vercel/analytics/react'
import type { Metadata } from 'next'

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
        width: 1920,
        height: 960
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
    <html lang="zh-CN">
      <body className="bg-bg-color text-fg-color">
        <div
          aria-hidden
          className="bg-bg-color/50 pointer-events-none fixed top-0 z-10 h-20 w-full select-none backdrop-blur gradient-mask-b-0 after:absolute after:inset-0 after:h-full after:w-full after:bg-gradient-to-b after:from-bg-color after:to-transparent after:opacity-80 after:content-['']"
        />
        <div className="flex h-full flex-col items-center justify-start font-serif md:relative md:flex-row md:items-start md:justify-center md:gap-6 md:p-32">
          <Sidebar />
          <main className="max-w-[60ch] px-6 md:w-[60ch]">{children}</main>
        </div>
        <Analytics />
      </body>
    </html>
  )
}
